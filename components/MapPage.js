import React from 'react';

import {
  Page,
  Icon
} from 'react-onsenui';

import NavBar from './NavBar';

import {
  goods
} from '../data';

const BasicInfo = ({id = 1}) => (
  <div className='gdp__basicinfo__container mp'>
    <h3 className='gdp__basicinfo__title'>{goods[id - 1].name}</h3>
    <p><Icon icon='fa-clock-o' />&nbsp;{goods[id - 1].time}{goods[id - 1].timeAddition ? ` ${goods[id - 1].timeAddition}` : null}</p>
    <p><Icon icon='fa-map-marker' style={{
      width: '12px',
      textAlign: 'center'
    }} />&nbsp;{goods[id - 1].pos}</p>
    <span className='gdp__basicinfo__dis'>{goods[id - 1].dis}</span>
    <button className='go__there fab'><div className='go__there__inner'><Icon icon='md-walk' /><span>到这去</span></div></button>
  </div>
);

class MainPage extends React.Component {
  componentDidMount() {
    const {id = 1} = this.props;
    let startMarker;
    let endMarker;
    let transferPlans;
    const stationMarkers = [];
    const transferLines = [];
    const walkLines = [];

    const map = new qq.maps.Map(this.map, {
      center: new qq.maps.LatLng(23.115260, 113.322240),
      zoom: 8
    });

    function showPosition({lat, lng}) {
      map.panTo(new qq.maps.LatLng(lat, lng));
      renderPath(new qq.maps.LatLng(lat, lng), new qq.maps.LatLng(goods[id - 1].geo.lat, goods[id - 1].geo.lng));
    }

    function showErr() {
      const destPosition = new qq.maps.LatLng(goods[id - 1].geo.lat, goods[id - 1].geo.lng);
      map.panTo(destPosition);
      const anchor = new qq.maps.Point(6, 6);
      const size = new qq.maps.Size(24, 36);
      const endIcon = new qq.maps.MarkerImage(
        'images/busmarker.png',
        size,
        new qq.maps.Point(24, 0),
        anchor
      );
      endMarker && endMarker.setMap(null);
      endMarker = new qq.maps.Marker({
        icon: endIcon,
        position: destPosition,
        map,
        zIndex: 1
      });
    }

    function renderPath(start, end) {
      const transferService = new qq.maps.TransferService({
        location: '广州',
        complete(result) {
          result = result.detail;
          const start = result.start;
          const end = result.end;
          const anchor = new qq.maps.Point(6, 6);
          const size = new qq.maps.Size(24, 36);
          const startIcon = new qq.maps.MarkerImage(
            'images/busmarker.png',
            size
          );
          const endIcon = new qq.maps.MarkerImage(
            'images/busmarker.png',
            size,
            new qq.maps.Point(24, 0),
            anchor
          );

          startMarker && startMarker.setMap(null);
          endMarker && endMarker.setMap(null);
          // 添加标记
          startMarker = new qq.maps.Marker({
            icon: startIcon,
            position: start.latLng,
            map,
            zIndex: 1
          });
          // 创建结束标记
          endMarker = new qq.maps.Marker({
            icon: endIcon,
            position: end.latLng,
            map,
            zIndex: 1
          });

          transferPlans = result.plans;
          const plansDesc = [];
          transferPlans.forEach((plan, i) => {
            const pAttributes = [
              `onclick="renderPlan(${i})"`,
              'onmouseover=this.style.background="#eee"',
              'onmouseout=this.style.background="#fff"',
              'style="margin-top:-4px;cursor:pointer"'
            ].join(' ');

            plansDesc.push(`<p ${pAttributes}><b>方案${i + 1}.</b>`);
            const actions = transferPlans[i].actions;
            actions.forEach((action, i) => {
              let imgPosition;
              switch (action.type) {
                case qq.maps.TransferActionType.BUS:
                  imgPosition = '-38px 0px';
                  break;
                case qq.maps.TransferActionType.SUBWAY:
                  imgPosition = '-57px 0px';
                  break;
                case qq.maps.TransferActionType.WALK:
                  imgPosition = '-76 0px';
                  break;
              }
              const actionImg = `
                <span style="margin-bottom: -4px; display:inline-block;background:url(img/busicon.png) no-repeat ${imgPosition};width:19px;height:19px">
                </span>&nbsp;&nbsp;
              `;
              plansDesc.push(actionImg + action.instructions);
            });
          });
          // document.getElementById('plans').innerHTML=plans_desc.join('<br><br>');

          // 渲染到地图上
          renderPlan(0); // eslint-disable-line no-undef
        }
      });
      transferService.search(start, end);
      transferService.setPolicy(qq.maps.TransferPolicy['LEAST_TIME']);
    }

    // 清除地图上的marker
    function clearOverlay(overlays) {
      while (overlays.length > 0) {
        let overlay = overlays.pop();
        overlay.setMap(null);
      }
    }

    function renderPlan(index) {
      const plan = transferPlans[index];
      const lines = plan.lines;
      const walks = plan.walks;
      const stations = plan.stations;
      map.fitBounds(plan.bounds);

      // clear overlays;
      clearOverlay(stationMarkers);
      clearOverlay(transferLines);
      clearOverlay(walkLines);
      const anchor = new qq.maps.Point(6, 6);
      const size = new qq.maps.Size(24, 36);
      const busIcon = new qq.maps.MarkerImage(
        'img/busmarker.png',
        size,
        new qq.maps.Point(48, 0),
        anchor
      );
      const subwayIcon = new qq.maps.MarkerImage(
        'img/busmarker.png',
        size,
        new qq.maps.Point(72, 0),
        anchor
      );

      stations.forEach(station => {
        let station_icon;
        if (station.type === qq.maps.PoiType.SUBWAY_STATION) {
          station_icon = subwayIcon;
        } else {
          station_icon = busIcon;
        }

        const stationMarker = new qq.maps.Marker({
          icon: station_icon,
          position: station.latLng,
          map,
          zIndex: 0
        });
        stationMarkers.push(stationMarker);
      });

      lines.forEach(line => {
        const polyline = new qq.maps.Polyline({
          path: line.path,
          strokeColor: '#3893F9',
          strokeWeight: 6,
          map
        });
        transferLines.push(polyline);
      });

      walks.forEach(walk => {
        const polyline = new qq.maps.Polyline({
          path: walk.path,
          strokeColor: '#3FD2A3',
          strokeWeight: 6,
          map
        });
        walkLines.push(polyline);
      });
    }

    const geolocation = new qq.maps.Geolocation('OXXBZ-YNSHI-H3BGX-5XUJT-HOGIE-5KBYL', 'DoubleGood') // eslint-disable-line
    geolocation.getLocation(showPosition, showErr);
  }
  render() {
    const {navigator, id} = this.props;
    return (
      <Page>
        <NavBar backButton={true} isFixed={true} navigator={navigator} isDetail={true} />
        <Page>
          <div ref={map => {
            this.map = map;
          }} style={{height: '100%', width: '100%'}} className='mappage__fullscreen-map' />
        </Page>
        <BasicInfo id={id} />
      </Page>
    );
  }
}

// const MainPage = ({navigator, id}) => {
//   return (
// 		<Page>
//       <script charset='utf-8' src='https://map.qq.com/api/js?v=2.exp'></script>
// 			<NavBar backButton={true} isFixed={true} navigator={navigator} isDetail={true} />
// 			<Page>
// 				<img className='mappage__fullscreen-map' src={goods[id - 1].map} />
// 			</Page>
// 			<BasicInfo id={id} />
// 		</Page>
//   );
// };

export default MainPage;
