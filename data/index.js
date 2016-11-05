const addZero = num => num < 10 ? `0${num}` : `${num}`;

const genRandomTime = () => `${addZero(9 + Math.round(4 * Math.random()))}:${Math.round(Math.random()) ? '30' : '00'}-${addZero(16 + Math.round(7 * Math.random()))}:${Math.round(Math.random()) ? '30' : '00'}`;

export const goods = [
  {
    id: 1,
    thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
    name: '刘伯伯爱玉冰',
    time: genRandomTime(),
    timeAddition: '星期天公休',
    pos: '新北市板桥区捷运江子翠站出口附近',
    dis: '300m',
    person: '刘伯伯',
    qrcode: 'http://video.sike.io/images/xiaosimei_qrcode.png',
    map: '/images/dajuyuan.png',
    story: [
      '羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大下水道業，卻因某次工作哥的努力與堅持，自家烘焙的賞味咖啡就此誕生。羅大哥原本從事地他因為經濟因素持下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'http://writedirection.com/website/wp-content/uploads/2016/09/blank-profile-picture-973460_960_720.png',
        name: '心雨',
        comm: '罗大哥的咖啡不但有满满的正能量，还有烘焙到位的甘甜',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '子晴',
        comm: '罗大哥加油哦',
        time: '2016-05-10'
      },
      {
        profile: 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-05-10'
      },
      {
        profile: 'https://odesk-blog-content.s3.amazonaws.com/uploads/2014/10/02123010/profile-photo_friendly.jpg',
        name: '紫嫣',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-05-10'
      },
      {
        profile: 'http://www.johnson.cornell.edu/people/faculty/dmr42/dmr42_profile.jpg',
        name: '彤彤',
        comm: '加油！',
        time: '2016-05-10'
      }
    ]
  },
  {
    id: 2,
    thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
    name: '米粉汤阿嬷',
    time: genRandomTime(),
    pos: '新北市永和区文化路67巷（包公庙前）',
    dis: '600m',
    person: '阿嬷',
    qrcode: 'http://video.sike.io/images/xiaosimei_qrcode.png',
    map: '/images/dajuyuan.png',
    story: [
      '羅大哥原本從事地下水道業，卻因某次工作上的意外導致他因為經濟因素持左腿截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大哥的努力與堅持，自家烘焙的賞味咖啡就此誕生。羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg',
        name: '子晴',
        comm: '罗大哥加油哦',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '心雨',
        comm: '罗大哥的咖啡不但有满满的正能量，还有烘焙到位的甘甜',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '紫嫣',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '彤彤',
        comm: '加油！',
        time: '2016-05-10'
      }
    ]
  },
  {
    id: 3,
    thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
    name: '陈阿姨红豆饼',
    time: genRandomTime(),
    pos: '高雄市大寮区凤林一路附近',
    dis: '800m',
    person: '陈阿姨',
    qrcode: 'http://video.sike.io/images/xiaosimei_qrcode.png',
    map: '/images/dajuyuan.png',
    story: [
      '羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大哥的努力與堅持，自家烘焙的賞味咖啡就此誕生。羅大哥下水道業，卻因某次工作上的意外導致左腿原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '心雨',
        comm: '罗大哥的咖啡不但有满满的正能量，还有烘焙到位的甘甜',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '子晴',
        comm: '罗大哥加油哦',
        time: '2016-05-10'
      },
      {
        profile: 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '彤彤',
        comm: '加油！',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '紫嫣',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-05-10'
      }
    ]
  },
  {
    id: 4,
    thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
    name: '罗大哥赏味咖啡',
    time: genRandomTime(),
    pos: '台北市中正区延平南路226号5楼之4',
    dis: '1.0km',
    person: '罗大哥',
    qrcode: 'http://video.sike.io/images/xiaosimei_qrcode.png',
    map: '/images/dajuyuan.png',
    story: [
      '羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大哥的努力與堅持，自家烘焙從事地下水道業，卻因某次工作上的意外導致左腿的賞味咖啡就此誕生。羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '子晴',
        comm: '罗大哥加油哦',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '心雨',
        comm: '罗大哥的咖啡不但有满满的正能量，还有烘焙到位的甘甜',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '紫嫣',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '彤彤',
        comm: '加油！',
        time: '2016-05-10'
      }
    ]
  },
  {
    id: 5,
    thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
    name: '陈阿姨红豆饼',
    time: genRandomTime(),
    pos: '高雄市大寮区凤林一路附近',
    dis: '1.2km',
    person: '陈阿姨',
    qrcode: 'http://video.sike.io/images/xiaosimei_qrcode.png',
    map: '/images/dajuyuan.png',
    story: [
      '羅大哥原本從事地下他因為經濟因素持導致左腿截肢。工傷的他因為他因為經濟因素持經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大哥的努力與堅持，自家烘焙的賞味咖次工作上的意外啡就此誕生。羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '心雨',
        comm: '罗大哥的咖啡不但有满满的正能量，还有烘焙到位的甘甜',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '子晴',
        comm: '罗大哥加油哦',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '紫嫣',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '彤彤',
        comm: '加油！',
        time: '2016-05-10'
      }
    ]
  },
  {
    id: 6,
    thumbnail: 'http://pic.pimg.tw/taweidavid/bf312f6ae4ae8eac20e5306d8bdf2875.jpg',
    name: '米粉汤阿嬷',
    time: genRandomTime(),
    pos: '新北市永和区文化路67巷（包公庙前）',
    dis: '1.5km',
    person: '阿嬷',
    qrcode: 'http://video.sike.io/images/xiaosimei_qrcode.png',
    map: '/images/dajuyuan.png',
    story: [
      '下水道業，卻因某次工作羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿下水道業，卻因某次工作截肢。工傷的他因為經濟因素持續勞力工作，但穿戴義肢的膝蓋不堪摩擦而罹患蜂窩性組織炎，因此在家休息多年。在兒子的鼓勵下，羅大哥到社區大學學習調配咖啡，開始與咖啡為伍的日子。',
      '也因為羅大哥的努力與堅持，自家烘焙的賞味咖啡就此誕生。羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，羅大哥原本從事地下水道業，卻因某次工作上的意外導致左腿截肢。工傷的他因為經濟因素持續勞力工作，'
    ],
    comments: [
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '子晴',
        comm: '罗大哥加油哦',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '心雨',
        comm: '罗大哥的咖啡不但有满满的正能量，还有烘焙到位的甘甜',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '恩琪',
        comm: '好吸引的感觉',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '紫嫣',
        comm: '上次路过看到了，没想到背后有这样的故事',
        time: '2016-05-10'
      },
      {
        profile: 'https://lh3.googleusercontent.com/--cuJjE1uaFY/AAAAAAAAAAI/AAAAAAAAAAA/4fahE7RgoKA/photo.jpg',
        name: '彤彤',
        comm: '加油！',
        time: '2016-05-10'
      }
    ]
  }
];
