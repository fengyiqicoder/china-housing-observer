/* ============================================================
 * 中国楼市 · 城市数据文件
 * ------------------------------------------------------------
 * 覆盖范围：一线城市、直辖市、副省级城市（含计划单列市）、省会城市，
 * 以及各省代表性地级市（保证每个省份至少收录两个城市），共 64 城。
 *
 * 更新数据的两种方式：
 *   1. 直接修改本文件中的数字，刷新页面即可生效；
 *   2. 在页面右上角点击「更新数据」，在弹窗中修改并保存
 *      （保存到浏览器 localStorage，优先级高于本文件）。
 *
 * 字段口径：
 *   tier   城市分组：一线 | 直辖市 | 副省级 | 省会 | 地级
 *   price  平均房价（二手住宅挂牌均价，元/平方米）
 *   rent   平均月租（整租套均月租金，元/月）
 *   salary 平均工资（城镇单位就业人员平均月薪，元/月，税前）
 * ============================================================ */

window.CITY_DATA = {
  updatedAt: "2026 年 9 月核对（多平台挂牌/统计数据估算值）",
  cities: [
    /* —— 一线城市 —— */
    { name: "北京",   en: "BEIJING",      tier: "一线",   price: 54400, rent: 5850, salary: 13900 },
    { name: "上海",   en: "SHANGHAI",     tier: "一线",   price: 51500, rent: 5800, salary: 14100 },
    { name: "广州",   en: "GUANGZHOU",    tier: "一线",   price: 30100, rent: 3150, salary: 11200 },
    { name: "深圳",   en: "SHENZHEN",     tier: "一线",   price: 53200, rent: 4800, salary: 13500 },

    /* —— 直辖市 —— */
    { name: "天津",   en: "TIANJIN",      tier: "直辖市", price: 17700, rent: 2400, salary: 9800 },
    { name: "重庆",   en: "CHONGQING",    tier: "直辖市", price: 9300,  rent: 1450, salary: 9200 },

    /* —— 副省级城市（含计划单列市） —— */
    { name: "杭州",   en: "HANGZHOU",     tier: "副省级", price: 30000, rent: 3250, salary: 12800 },
    { name: "南京",   en: "NANJING",      tier: "副省级", price: 19400, rent: 2650, salary: 11500 },
    { name: "厦门",   en: "XIAMEN",       tier: "副省级", price: 32000, rent: 2400, salary: 10500 },
    { name: "宁波",   en: "NINGBO",       tier: "副省级", price: 16700, rent: 1900, salary: 10800 },
    { name: "青岛",   en: "QINGDAO",      tier: "副省级", price: 16800, rent: 1750, salary: 9600 },
    { name: "济南",   en: "JINAN",        tier: "副省级", price: 13700, rent: 1500, salary: 9800 },
    { name: "武汉",   en: "WUHAN",        tier: "副省级", price: 12700, rent: 2650, salary: 10200 },
    { name: "成都",   en: "CHENGDU",      tier: "副省级", price: 14300, rent: 2200, salary: 9900 },
    { name: "西安",   en: "XI'AN",        tier: "副省级", price: 12800, rent: 1650, salary: 9400 },
    { name: "大连",   en: "DALIAN",       tier: "副省级", price: 11600, rent: 1750, salary: 8600 },
    { name: "沈阳",   en: "SHENYANG",     tier: "副省级", price: 7900,  rent: 1500, salary: 8300 },
    { name: "长春",   en: "CHANGCHUN",    tier: "副省级", price: 6900,  rent: 1400, salary: 8100 },
    { name: "哈尔滨", en: "HARBIN",       tier: "副省级", price: 7300,  rent: 1500, salary: 7900 },

    /* —— 其他省会城市 —— */
    { name: "福州",   en: "FUZHOU",       tier: "省会",   price: 18400, rent: 2000, salary: 9900 },
    { name: "合肥",   en: "HEFEI",        tier: "省会",   price: 10400, rent: 1550, salary: 10000 },
    { name: "郑州",   en: "ZHENGZHOU",    tier: "省会",   price: 9600,  rent: 1350, salary: 9000 },
    { name: "长沙",   en: "CHANGSHA",     tier: "省会",   price: 8800,  rent: 1600, salary: 9800 },
    { name: "南昌",   en: "NANCHANG",     tier: "省会",   price: 9100,  rent: 1300, salary: 8800 },
    { name: "石家庄", en: "SHIJIAZHUANG", tier: "省会",   price: 10300, rent: 1300, salary: 8500 },
    { name: "太原",   en: "TAIYUAN",      tier: "省会",   price: 8700,  rent: 1150, salary: 8400 },
    { name: "呼和浩特", en: "HOHHOT",     tier: "省会",   price: 7800,  rent: 1200, salary: 8700 },
    { name: "南宁",   en: "NANNING",      tier: "省会",   price: 8600,  rent: 1350, salary: 8300 },
    { name: "海口",   en: "HAIKOU",       tier: "省会",   price: 12400, rent: 1750, salary: 8600 },
    { name: "贵阳",   en: "GUIYANG",      tier: "省会",   price: 7100,  rent: 1350, salary: 8600 },
    { name: "昆明",   en: "KUNMING",      tier: "省会",   price: 9100,  rent: 1400, salary: 8700 },
    { name: "拉萨",   en: "LHASA",        tier: "省会",   price: 12500, rent: 1850, salary: 10500 },
    { name: "兰州",   en: "LANZHOU",      tier: "省会",   price: 9400,  rent: 1500, salary: 8500 },
    { name: "西宁",   en: "XINING",       tier: "省会",   price: 8800,  rent: 1500, salary: 8400 },
    { name: "银川",   en: "YINCHUAN",     tier: "省会",   price: 6900,  rent: 950,  salary: 8300 },
    { name: "乌鲁木齐", en: "URUMQI",     tier: "省会",   price: 8600,  rent: 1550, salary: 8600 },

    /* —— 各省代表性地级市（保证每省至少两城） —— */
    { name: "苏州",   en: "SUZHOU",       tier: "地级",   price: 14800, rent: 1850, salary: 11000 }, // 江苏
    { name: "无锡",   en: "WUXI",         tier: "地级",   price: 14100, rent: 1550, salary: 10200 }, // 江苏
    { name: "温州",   en: "WENZHOU",      tier: "地级",   price: 14500, rent: 1500, salary: 9300 },  // 浙江
    { name: "东莞",   en: "DONGGUAN",     tier: "地级",   price: 16800, rent: 1600, salary: 9800 },  // 广东
    { name: "佛山",   en: "FOSHAN",       tier: "地级",   price: 12500, rent: 1450, salary: 9600 },  // 广东
    { name: "泉州",   en: "QUANZHOU",     tier: "地级",   price: 11500, rent: 1350, salary: 8600 },  // 福建
    { name: "烟台",   en: "YANTAI",       tier: "地级",   price: 7300,  rent: 1050, salary: 8600 },  // 山东
    { name: "洛阳",   en: "LUOYANG",      tier: "地级",   price: 7500,  rent: 1050, salary: 7600 },  // 河南
    { name: "宜昌",   en: "YICHANG",      tier: "地级",   price: 6300,  rent: 1200, salary: 8000 },  // 湖北
    { name: "岳阳",   en: "YUEYANG",      tier: "地级",   price: 5500,  rent: 1000, salary: 7800 },  // 湖南
    { name: "赣州",   en: "GANZHOU",      tier: "地级",   price: 8300,  rent: 1200, salary: 7500 },  // 江西
    { name: "唐山",   en: "TANGSHAN",     tier: "地级",   price: 7700,  rent: 1000, salary: 8200 },  // 河北
    { name: "大同",   en: "DATONG",       tier: "地级",   price: 5800,  rent: 1000, salary: 7300 },  // 山西
    { name: "包头",   en: "BAOTOU",       tier: "地级",   price: 6000,  rent: 1000, salary: 8500 },  // 内蒙古
    { name: "柳州",   en: "LIUZHOU",      tier: "地级",   price: 6100,  rent: 1100, salary: 7800 },  // 广西
    { name: "三亚",   en: "SANYA",        tier: "地级",   price: 28100, rent: 2300, salary: 8500 },  // 海南
    { name: "遵义",   en: "ZUNYI",        tier: "地级",   price: 5000,  rent: 850,  salary: 7600 },  // 贵州
    { name: "大理",   en: "DALI",         tier: "地级",   price: 13800, rent: 1500, salary: 7500 },  // 云南
    { name: "绵阳",   en: "MIANYANG",     tier: "地级",   price: 7100,  rent: 1000, salary: 8300 },  // 四川
    { name: "咸阳",   en: "XIANYANG",     tier: "地级",   price: 6200,  rent: 950,  salary: 7800 },  // 陕西
    { name: "吉林",   en: "JILIN CITY",   tier: "地级",   price: 5400,  rent: 1150, salary: 7200 },  // 吉林
    { name: "大庆",   en: "DAQING",       tier: "地级",   price: 5000,  rent: 1200, salary: 8000 },  // 黑龙江
    { name: "芜湖",   en: "WUHU",         tier: "地级",   price: 9300,  rent: 1200, salary: 8600 },  // 安徽
    { name: "日喀则", en: "SHIGATSE",     tier: "地级",   price: 8600,  rent: 2100, salary: 9200 },  // 西藏
    { name: "天水",   en: "TIANSHUI",     tier: "地级",   price: 6400,  rent: 1150, salary: 7000 },  // 甘肃
    { name: "海东",   en: "HAIDONG",      tier: "地级",   price: 5100,  rent: 850,  salary: 7500 },  // 青海
    { name: "吴忠",   en: "WUZHONG",      tier: "地级",   price: 5700,  rent: 700,  salary: 7300 },  // 宁夏
    { name: "喀什",   en: "KASHGAR",      tier: "地级",   price: 5500,  rent: 1000, salary: 7200 }   // 新疆
  ],

  /* 计算假设（可按需调整） */
  assumptions: {
    buyArea: 90,        // 房价收入比按 90㎡ 住房计
    rentArea: 60,       // 租售比按 60㎡ 整租住房计
    earnersPerHome: 2   // 家庭收入按双职工计
  },

  /* 国际参照城市：与中国城市同口径，数值为按当期汇率折合人民币的估算值
     price 平均房价（元/㎡）  rent 60㎡ 整租月租金（元/月）  salary 平均月薪（元/月，税前） */
  worldCities: [
    { name: "纽约",   en: "NEW YORK",  price: 85700, rent: 25100, salary: 42900 },
    { name: "伦敦",   en: "LONDON",    price: 92000, rent: 18100, salary: 37900 },
    { name: "东京",   en: "TOKYO",     price: 42700, rent: 6400, salary: 22700 },
    { name: "新加坡", en: "SINGAPORE", price: 135500, rent: 17500, salary: 30700 }
  ]
};
