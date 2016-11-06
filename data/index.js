const addZero = num => num < 10 ? `0${num}` : `${num}`;

const genRandomTime = () => `${addZero(9 + Math.round(4 * Math.random()))}:${Math.round(Math.random()) ? '30' : '00'}-${addZero(16 + Math.round(7 * Math.random()))}:${Math.round(Math.random()) ? '30' : '00'}`;

export const goods = [
  {
    id: 1,
    thumbnail: 'images/liubobo.png',
    name: '张大强自强鲜花',
    time: genRandomTime(),
    // timeAddition: '星期天公休',
    pos: '广州市天河区珠江新城地铁站B1出口附近',
    geo: {
      lat: 23.117889,
      lng: 113.320933
    },
    dis: '360m',
    person: '张大哥',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '张大哥原来从事地下水道业，却因某次工作的意外导致左腿截肢。工伤的他因为经济因素持续劳力工作，但穿戴义肢的膝盖不摩擦而罹患蜂窝性组织炎，因此在家休息多年，张大哥平时喜欢鲜花，在一次偶然的机会，看到社区的插花活动，产生兴致报名学习，后来在家人的鼓励下，张大哥决定重新融入社会，在社区摆摊卖花为生。',
      '附近店主和邻居都称赞张大哥的卖的鲜花，物美价廉。不过由于生意不稳定，收入其实并不是很好。张大哥积极向上的生活态度需要我们鼓励，如果你路过，希望你可以友善地帮助张大哥买一束鲜花，为张大哥打气。'
    ],
    comments: [
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢张大哥',
        time: '2016-09-10'
      },
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '张大哥加油哦',
        time: '2016-09-09'
      },
      {
        profile: 'images/enqi.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-08-24'
      },
      {
        profile: 'images/pete.jpg',
        name: '皮特',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-08-06'
      },
      {
        profile: 'images/john.jpg',
        name: '约翰',
        comm: '加油！',
        time: '2016-06-18'
      }
    ]
  },
  {
    id: 2,
    thumbnail: 'images/luodagor.jpg',
    name: '写字卖艺的90后小哥',
    time: genRandomTime(),
    pos: '越秀区淘金路6-8，沃尔玛超市附近',
    dis: '5.8km',
    geo: {
      lat: 23.141993,
      lng: 113.287867
    },
    person: '赵亚全',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '咬笔书写的年轻人叫赵亚全,1991年出生,河南开封人,他3岁时因调皮爬上一个土堆玩耍意外触碰到高压电,此后他失去了左臂,右手也落下残疾。18岁那年,他觉得自己已经成年,应该学一门手艺养活自己,他凭着一张嘴和一根毛笔经过5年苦练,写出了具有独特风格的“Q版”隶书。',
      '他希望卖艺的钱能换一顿饱饭并支付住宿费用。赵亚全说他喜欢写字,就算条件艰苦一些也会坚持,他想一直写下去并到更多的地方走走。'
    ],
    comments: [
      {
        profile: 'images/john.jpg',
        name: '约翰',
        comm: '加油！',
        time: '2016-06-18'
      },
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '亚全加油哦',
        time: '2016-09-09'
      },
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢亚全',
        time: '2016-09-10'
      },
      {
        profile: 'images/pete.jpg',
        name: '皮特',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-08-06'
      },
      {
        profile: 'images/enqi.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-08-24'
      }
    ]
  },
  {
    id: 3,
    thumbnail: 'images/amo.jpg',
    name: '张老奶奶的生肖漫画',
    time: genRandomTime(),
    pos: '江南西A出口直走200米',
    dis: '8.0km',
    geo: {
      lat: 23.095740,
      lng: 113.272600
    },
    person: '张老奶奶',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '在江南西地铁站A出口直走大概200米左右，有一位年约81岁的老婆婆，家里有个患癌的老伴和智障儿子， 生活拮据，靠画十二生肖补贴家用。',
      '基本上每天都可以看到老婆婆，一画就是好几个小时，婆婆说希望自力更生，不习惯接受别人的帮助，希望大家路过可以帮她买份地图，让她安享晚年。'
    ],
    comments: [
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '张老奶奶加油哦',
        time: '2016-09-09'
      },
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢张老奶奶',
        time: '2016-09-10'
      },
      {
        profile: 'images/pete.jpg',
        name: '皮特',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-08-06'
      },
      {
        profile: 'images/enqi.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-08-24'
      },
      {
        profile: 'images/john.jpg',
        name: '约翰',
        comm: '加油！',
        time: '2016-06-18'
      }
    ]
  },
  {
    id: 4,
    thumbnail: 'images/chenaunt.jpg',
    name: '广州火车站“地图婆婆”',
    time: genRandomTime(),
    pos: '广州火车站H出口，麦当劳附近',
    dis: '9.4km',
    geo: {
      lat: 23.152608,
      lng: 113.324495
    },
    person: '地图婆婆',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '“地图婆婆”来自河南，儿子因为拆迁问题，离家之后就再没有与家里联系，她和老伴一起来广州生活顺便希望找回她的儿子，她平时在火车站卖地图，老伴负责捡废品，老人家说，自己暂时还算健康，可以自己赚钱养活自己，活得也自由一些。'
    ],
    comments: [
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '婆婆加油哦',
        time: '2016-09-09'
      },
      {
        profile: 'images/john.jpg',
        name: '约翰',
        comm: '加油！',
        time: '2016-06-18'
      },
      {
        profile: 'images/pete.jpg',
        name: '皮特',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-08-06'
      },
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢婆婆',
        time: '2016-09-10'
      },
      {
        profile: 'images/enqi.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-08-24'
      }
    ]
  },
  {
    id: 5,
    thumbnail: 'images/luodagor.jpg',
    name: '罗大哥赏味咖啡',
    time: genRandomTime(),
    pos: '广州火车站H出口，麦当劳附近',
    dis: '9.4km',
    geo: {
      lat: 23.152608,
      lng: 113.324495
    },
    person: '罗大哥',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '事地下水道業，卻因某次工作上羅大哥原本從的意外導致左為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大哥的努力與堅持，自家烘焙從事地下水道業，卻因某腿截肢。工傷的他因次工作上的意外導致左腿的賞味咖啡就此誕生。羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'images/john.jpg',
        name: '约翰',
        comm: '加油！',
        time: '2016-06-18'
      },
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢罗大哥',
        time: '2016-09-10'
      },
      {
        profile: 'images/pete.jpg',
        name: '皮特',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-08-06'
      },
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '罗大哥加油哦',
        time: '2016-09-09'
      },
      {
        profile: 'images/enqi.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-08-24'
      }
    ]
  },
  {
    id: 6,
    thumbnail: 'images/chenaunt.jpg',
    name: '陈阿姨红豆饼',
    time: genRandomTime(),
    pos: '越秀区淘金路6-8，沃尔玛超市附近',
    dis: '5.8km',
    geo: {
      lat: 23.141993,
      lng: 113.287867
    },
    person: '陈阿姨',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '陈阿姨原本從經濟因素持導致左腿截肢。工傷的他因為他因為經濟擦而罹患蜂窩性組織炎，下，陈阿姨到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為陈阿姨的努力與堅持，自家烘焙的賞味咖次工作上的意外因此在家休息多年。在兒子的鼓勵啡就此誕生。陈阿姨原本從事地下水道業，卻因某次工作上地下水道業，卻因某次工作上的的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，陈阿姨原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'images/john.jpg',
        name: '约翰',
        comm: '加油！',
        time: '2016-06-18'
      },
      {
        profile: 'images/pete.jpg',
        name: '皮特',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-08-06'
      },
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢陈阿姨',
        time: '2016-09-10'
      },
      {
        profile: 'images/enqi.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-08-24'
      },
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '陈阿姨加油哦',
        time: '2016-09-09'
      }
    ]
  },
  {
    id: 7,
    thumbnail: 'images/amo.jpg',
    name: '米粉汤阿嬷',
    time: genRandomTime(),
    pos: '广州市天河区珠江新城地铁站B1出口附近',
    geo: {
      lat: 23.117889,
      lng: 113.320933
    },
    dis: '360m',
    person: '阿嬷',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '下水道業，卻因某次工作羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿下水道業，卻因某次工作截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大哥的努力與堅持，自家烘焙的賞味咖啡就此誕生。羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢阿嬷',
        time: '2016-09-10'
      },
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '阿嬷加油哦',
        time: '2016-09-09'
      },
      {
        profile: 'images/enqi.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-08-24'
      },
      {
        profile: 'images/pete.jpg',
        name: '皮特',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-08-06'
      },
      {
        profile: 'images/john.jpg',
        name: '约翰',
        comm: '加油！',
        time: '2016-06-18'
      }
    ]
  }
];
