/* ============================================================
 * 中国楼市 · 城市数据文件
 * ------------------------------------------------------------
 * 覆盖范围：一线城市、直辖市、副省级城市（含计划单列市）、省会城市，共 36 城。
 *
 * 更新数据的两种方式：
 *   1. 直接修改本文件中的数字，刷新页面即可生效；
 *   2. 在页面右上角点击「更新数据」，在弹窗中修改并保存
 *      （保存到浏览器 localStorage，优先级高于本文件）。
 *
 * 字段口径：
 *   tier   城市分组：一线 | 直辖市 | 副省级 | 省会
 *   price  平均房价（二手住宅挂牌均价，元/平方米）
 *   rent   平均月租（整租套均月租金，元/月）
 *   salary 平均工资（城镇单位就业人员平均月薪，元/月，税前）
 * ============================================================ */

window.CITY_DATA = {
  updatedAt: "2025 年估算值（示例数据，请以最新官方/平台数据为准）",
  cities: [
    /* —— 一线城市 —— */
    { name: "北京",   en: "BEIJING",      tier: "一线",   price: 57800, rent: 5450, salary: 13900 },
    { name: "上海",   en: "SHANGHAI",     tier: "一线",   price: 54600, rent: 5650, salary: 14100 },
    { name: "广州",   en: "GUANGZHOU",    tier: "一线",   price: 28800, rent: 3750, salary: 11200 },
    { name: "深圳",   en: "SHENZHEN",     tier: "一线",   price: 51300, rent: 5150, salary: 13500 },

    /* —— 直辖市 —— */
    { name: "天津",   en: "TIANJIN",      tier: "直辖市", price: 20800, rent: 2600, salary: 9800 },
    { name: "重庆",   en: "CHONGQING",    tier: "直辖市", price: 12500, rent: 2100, salary: 9200 },

    /* —— 副省级城市（含计划单列市） —— */
    { name: "杭州",   en: "HANGZHOU",     tier: "副省级", price: 32000, rent: 3900, salary: 12800 },
    { name: "南京",   en: "NANJING",      tier: "副省级", price: 27500, rent: 3100, salary: 11500 },
    { name: "厦门",   en: "XIAMEN",       tier: "副省级", price: 39500, rent: 3200, salary: 10500 },
    { name: "宁波",   en: "NINGBO",       tier: "副省级", price: 21000, rent: 2700, salary: 10800 },
    { name: "青岛",   en: "QINGDAO",      tier: "副省级", price: 17500, rent: 2200, salary: 9600 },
    { name: "济南",   en: "JINAN",        tier: "副省级", price: 14500, rent: 2200, salary: 9800 },
    { name: "武汉",   en: "WUHAN",        tier: "副省级", price: 15500, rent: 2300, salary: 10200 },
    { name: "成都",   en: "CHENGDU",      tier: "副省级", price: 16500, rent: 2300, salary: 9900 },
    { name: "西安",   en: "XI'AN",        tier: "副省级", price: 14500, rent: 2100, salary: 9400 },
    { name: "大连",   en: "DALIAN",       tier: "副省级", price: 12500, rent: 2000, salary: 8600 },
    { name: "沈阳",   en: "SHENYANG",     tier: "副省级", price: 9800,  rent: 1900, salary: 8300 },
    { name: "长春",   en: "CHANGCHUN",    tier: "副省级", price: 9200,  rent: 1700, salary: 8100 },
    { name: "哈尔滨", en: "HARBIN",       tier: "副省级", price: 8800,  rent: 1600, salary: 7900 },

    /* —— 其他省会城市 —— */
    { name: "福州",   en: "FUZHOU",       tier: "省会",   price: 20500, rent: 2400, salary: 9900 },
    { name: "合肥",   en: "HEFEI",        tier: "省会",   price: 15500, rent: 2100, salary: 10000 },
    { name: "郑州",   en: "ZHENGZHOU",    tier: "省会",   price: 11500, rent: 1900, salary: 9000 },
    { name: "长沙",   en: "CHANGSHA",     tier: "省会",   price: 10500, rent: 2000, salary: 9800 },
    { name: "南昌",   en: "NANCHANG",     tier: "省会",   price: 11500, rent: 1800, salary: 8800 },
    { name: "石家庄", en: "SHIJIAZHUANG", tier: "省会",   price: 11500, rent: 1700, salary: 8500 },
    { name: "太原",   en: "TAIYUAN",      tier: "省会",   price: 10500, rent: 1700, salary: 8400 },
    { name: "呼和浩特", en: "HOHHOT",     tier: "省会",   price: 9500,  rent: 1600, salary: 8700 },
    { name: "南宁",   en: "NANNING",      tier: "省会",   price: 10500, rent: 1700, salary: 8300 },
    { name: "海口",   en: "HAIKOU",       tier: "省会",   price: 15500, rent: 2100, salary: 8600 },
    { name: "贵阳",   en: "GUIYANG",      tier: "省会",   price: 9500,  rent: 1600, salary: 8600 },
    { name: "昆明",   en: "KUNMING",      tier: "省会",   price: 11500, rent: 1800, salary: 8700 },
    { name: "拉萨",   en: "LHASA",        tier: "省会",   price: 13000, rent: 1900, salary: 10500 },
    { name: "兰州",   en: "LANZHOU",      tier: "省会",   price: 10500, rent: 1700, salary: 8500 },
    { name: "西宁",   en: "XINING",       tier: "省会",   price: 9500,  rent: 1600, salary: 8400 },
    { name: "银川",   en: "YINCHUAN",     tier: "省会",   price: 8800,  rent: 1500, salary: 8300 },
    { name: "乌鲁木齐", en: "URUMQI",     tier: "省会",   price: 8500,  rent: 1500, salary: 8600 }
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
    { name: "纽约",   en: "NEW YORK",  price: 78000, rent: 25000, salary: 46000 },
    { name: "伦敦",   en: "LONDON",    price: 50000, rent: 19000, salary: 36500 },
    { name: "东京",   en: "TOKYO",     price: 48000, rent: 8800,  salary: 19500 },
    { name: "新加坡", en: "SINGAPORE", price: 53000, rent: 17500, salary: 31800 }
  ]
};
