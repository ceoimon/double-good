const addZero = num => num < 10 ? `0${num}` : `${num}`;

const genRandomTime = () => `${addZero(9 + Math.round(4 * Math.random()))}:${Math.round(Math.random()) ? '30' : '00'}-${addZero(16 + Math.round(7 * Math.random()))}:${Math.round(Math.random()) ? '30' : '00'}`;

export const goods = [
  {
    id: 1,
    thumbnail: 'images/liubobo.png',
    name: '刘伯伯爱玉冰',
    time: genRandomTime(),
    timeAddition: '星期天公休',
    pos: '广州市越秀区珠江新城地铁站附近',
    geo: {
      lat: 23.119450,
      lng: 113.321218
    },
    dis: '700m',
    person: '刘伯伯',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '羅大哥原本從本從事地下水道業，卻因某次工作的意外導致左腿截工作，但穿戴義肢的膝蓋不堪摩擦組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大下水道業，卻因某次工作哥的努力與堅持，自家烘焙的賞味咖啡就此誕生。羅大哥原本從事地他因為經濟因素持下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢陈伯伯',
        time: '2016-09-10'
      },
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '陈伯伯加油哦',
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
    thumbnail: 'images/amo.jpg',
    name: '米粉汤阿嬷',
    time: genRandomTime(),
    pos: '广州市天河区花城大道',
    dis: '600m',
    geo: {
      lat: 23.119068,
      lng: 113.324704
    },
    person: '阿嬷',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '阿嬷工作上的意外導原本從事地下水道業，卻因某次致他因為經濟因素持左腿截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，阿嬷到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為阿嬷的努力與堅持，自家烘焙的賞味咖啡就此誕生。阿嬷原本從事地持左腿截肢。工傷的他因為經下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，阿嬷原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '阿嬷加油哦',
        time: '2016-09-09'
      },
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢阿嬷',
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
    id: 3,
    thumbnail: 'images/chenaunt.jpg',
    name: '陈阿姨红豆饼',
    time: genRandomTime(),
    pos: '高雄市大寮区凤林一路附近',
    dis: '800m',
    person: '陈阿姨',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '陈阿姨原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，陈阿姨到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為陈阿姨的努力與堅持，自家烘焙的賞味咖啡就此誕生。陈阿姨下水道業，卻因某次工作上的意外導致左腿原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，陈阿姨原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '陈阿姨加油哦',
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
        comm: '很喜欢陈阿姨',
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
    id: 4,
    thumbnail: 'images/luodagor.jpg',
    name: '罗大哥赏味咖啡',
    time: genRandomTime(),
    pos: '台北市中正区延平南路226号5楼之4',
    dis: '1.0km',
    person: '罗大哥',
    qrcode: 'images/qrcode.png',
    map: 'images/map.png',
    story: [
      '羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大哥的努力與堅持，自家烘焙從事地下水道業，卻因某次工作上的意外導致左腿的賞味咖啡就此誕生。羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
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
        comm: '陈阿姨加油哦',
        time: '2016-09-09'
      },
      {
        profile: 'images/xinyu.jpg',
        name: '心雨',
        comm: '很喜欢陈阿姨',
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
    id: 5,
    thumbnail: 'images/luodagor.jpg',
    name: '罗大哥赏味咖啡',
    time: genRandomTime(),
    pos: '台北市中正区延平南路226号5楼之4',
    dis: '1.5km',
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
        comm: '很喜欢陈阿姨',
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
        comm: '陈阿姨加油哦',
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
    pos: '高雄市大寮区凤林一路附近',
    dis: '1.2km',
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
    pos: '新北市永和区文化路67巷（包公庙前）',
    dis: '1.5km',
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
        comm: '很喜欢陈伯伯',
        time: '2016-09-10'
      },
      {
        profile: 'images/ziqing.png',
        name: '子晴',
        comm: '陈伯伯加油哦',
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
