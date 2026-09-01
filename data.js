/* ============================================================
 * 中国楼市 · 城市数据文件
 * ------------------------------------------------------------
 * 覆盖范围：一线城市、直辖市、副省级城市（含计划单列市）、省会城市，
 * 以及全国全部地级市（三沙市无住宅市场数据，未收录；另含大理、喀什
 * 两个州/地区驻地城市），共 298 城。
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
    { name: "喀什",   en: "KASHGAR",      tier: "地级",   price: 5500,  rent: 1000, salary: 7200 },  // 新疆

    /* —— 河北 其余地级市 —— */
    { name: "秦皇岛", en: "QINHUANGDAO",  tier: "地级",   price: 8300,  rent: 1250, salary: 7800 },
    { name: "邯郸",   en: "HANDAN",       tier: "地级",   price: 6600,  rent: 1050, salary: 7600 },
    { name: "邢台",   en: "XINGTAI",      tier: "地级",   price: 6300,  rent: 1000, salary: 7400 },
    { name: "保定",   en: "BAODING",      tier: "地级",   price: 8800,  rent: 1250, salary: 7900 },
    { name: "张家口", en: "ZHANGJIAKOU",  tier: "地级",   price: 6800,  rent: 1050, salary: 7500 },
    { name: "承德",   en: "CHENGDE",      tier: "地级",   price: 6600,  rent: 1050, salary: 7600 },
    { name: "沧州",   en: "CANGZHOU",     tier: "地级",   price: 7300,  rent: 1100, salary: 7800 },
    { name: "廊坊",   en: "LANGFANG",     tier: "地级",   price: 9300,  rent: 1450, salary: 8400 },
    { name: "衡水",   en: "HENGSHUI",     tier: "地级",   price: 7000,  rent: 1050, salary: 7400 },

    /* —— 山西 其余地级市 —— */
    { name: "阳泉",   en: "YANGQUAN",     tier: "地级",   price: 5300,  rent: 900,  salary: 7300 },
    { name: "长治",   en: "CHANGZHI",     tier: "地级",   price: 6400,  rent: 1000, salary: 7800 },
    { name: "晋城",   en: "JINCHENG",     tier: "地级",   price: 6600,  rent: 1000, salary: 7900 },
    { name: "朔州",   en: "SHUOZHOU",     tier: "地级",   price: 5100,  rent: 900,  salary: 7500 },
    { name: "晋中",   en: "JINZHONG",     tier: "地级",   price: 6800,  rent: 1050, salary: 7600 },
    { name: "运城",   en: "YUNCHENG",     tier: "地级",   price: 5900,  rent: 950,  salary: 7200 },
    { name: "忻州",   en: "XINZHOU",      tier: "地级",   price: 5500,  rent: 900,  salary: 7100 },
    { name: "临汾",   en: "LINFEN",       tier: "地级",   price: 6200,  rent: 1000, salary: 7300 },
    { name: "吕梁",   en: "LVLIANG",      tier: "地级",   price: 5600,  rent: 900,  salary: 7500 },

    /* —— 内蒙古 其余地级市 —— */
    { name: "乌海",   en: "WUHAI",        tier: "地级",   price: 4500,  rent: 850,  salary: 8000 },
    { name: "赤峰",   en: "CHIFENG",      tier: "地级",   price: 5900,  rent: 950,  salary: 7400 },
    { name: "通辽",   en: "TONGLIAO",     tier: "地级",   price: 5300,  rent: 900,  salary: 7400 },
    { name: "鄂尔多斯", en: "ORDOS",      tier: "地级",   price: 7800,  rent: 1200, salary: 9800 },
    { name: "呼伦贝尔", en: "HULUNBUIR",  tier: "地级",   price: 5100,  rent: 900,  salary: 7500 },
    { name: "巴彦淖尔", en: "BAYANNUR",   tier: "地级",   price: 4800,  rent: 850,  salary: 7300 },
    { name: "乌兰察布", en: "ULANQAB",    tier: "地级",   price: 4500,  rent: 800,  salary: 7200 },

    /* —— 辽宁 其余地级市 —— */
    { name: "鞍山",   en: "ANSHAN",       tier: "地级",   price: 4800,  rent: 900,  salary: 7400 },
    { name: "抚顺",   en: "FUSHUN",       tier: "地级",   price: 4000,  rent: 800,  salary: 7100 },
    { name: "本溪",   en: "BENXI",        tier: "地级",   price: 4300,  rent: 850,  salary: 7200 },
    { name: "丹东",   en: "DANDONG",      tier: "地级",   price: 5600,  rent: 950,  salary: 7300 },
    { name: "锦州",   en: "JINZHOU",      tier: "地级",   price: 5100,  rent: 900,  salary: 7300 },
    { name: "营口",   en: "YINGKOU",      tier: "地级",   price: 5400,  rent: 900,  salary: 7500 },
    { name: "阜新",   en: "FUXIN",        tier: "地级",   price: 3500,  rent: 750,  salary: 6900 },
    { name: "辽阳",   en: "LIAOYANG",     tier: "地级",   price: 4500,  rent: 850,  salary: 7200 },
    { name: "盘锦",   en: "PANJIN",       tier: "地级",   price: 5600,  rent: 950,  salary: 8000 },
    { name: "铁岭",   en: "TIELING",      tier: "地级",   price: 4000,  rent: 800,  salary: 7000 },
    { name: "朝阳",   en: "CHAOYANG",     tier: "地级",   price: 4500,  rent: 850,  salary: 7000 },
    { name: "葫芦岛", en: "HULUDAO",      tier: "地级",   price: 5000,  rent: 900,  salary: 7100 },

    /* —— 吉林 其余地级市 —— */
    { name: "四平",   en: "SIPING",       tier: "地级",   price: 4300,  rent: 850,  salary: 7000 },
    { name: "辽源",   en: "LIAOYUAN",     tier: "地级",   price: 3700,  rent: 750,  salary: 6900 },
    { name: "通化",   en: "TONGHUA",      tier: "地级",   price: 4300,  rent: 850,  salary: 7100 },
    { name: "白山",   en: "BAISHAN",      tier: "地级",   price: 3800,  rent: 800,  salary: 7000 },
    { name: "松原",   en: "SONGYUAN",     tier: "地级",   price: 4500,  rent: 850,  salary: 7300 },
    { name: "白城",   en: "BAICHENG",     tier: "地级",   price: 4000,  rent: 800,  salary: 6900 },

    /* —— 黑龙江 其余地级市 —— */
    { name: "齐齐哈尔", en: "QIQIHAR",    tier: "地级",   price: 4000,  rent: 850,  salary: 7000 },
    { name: "鸡西",   en: "JIXI",         tier: "地级",   price: 2900,  rent: 700,  salary: 6800 },
    { name: "鹤岗",   en: "HEGANG",       tier: "地级",   price: 2200,  rent: 600,  salary: 6700 },
    { name: "双鸭山", en: "SHUANGYASHAN", tier: "地级",   price: 2700,  rent: 650,  salary: 6800 },
    { name: "伊春",   en: "YICHUN (HLJ)", tier: "地级",   price: 2800,  rent: 650,  salary: 6800 },
    { name: "佳木斯", en: "JIAMUSI",      tier: "地级",   price: 4300,  rent: 850,  salary: 7000 },
    { name: "七台河", en: "QITAIHE",      tier: "地级",   price: 2800,  rent: 650,  salary: 6700 },
    { name: "牡丹江", en: "MUDANJIANG",   tier: "地级",   price: 4600,  rent: 900,  salary: 7000 },
    { name: "黑河",   en: "HEIHE",        tier: "地级",   price: 4000,  rent: 800,  salary: 6900 },
    { name: "绥化",   en: "SUIHUA",       tier: "地级",   price: 3800,  rent: 800,  salary: 6700 },

    /* —— 江苏 其余地级市 —— */
    { name: "徐州",   en: "XUZHOU",       tier: "地级",   price: 9500,  rent: 1350, salary: 8800 },
    { name: "常州",   en: "CHANGZHOU",    tier: "地级",   price: 11200, rent: 1600, salary: 10200 },
    { name: "南通",   en: "NANTONG",      tier: "地级",   price: 12000, rent: 1600, salary: 9800 },
    { name: "连云港", en: "LIANYUNGANG",  tier: "地级",   price: 7900,  rent: 1200, salary: 8300 },
    { name: "淮安",   en: "HUAI'AN",      tier: "地级",   price: 7600,  rent: 1200, salary: 8300 },
    { name: "盐城",   en: "YANCHENG",     tier: "地级",   price: 8100,  rent: 1250, salary: 8500 },
    { name: "扬州",   en: "YANGZHOU",     tier: "地级",   price: 10300, rent: 1450, salary: 9200 },
    { name: "镇江",   en: "ZHENJIANG",    tier: "地级",   price: 8700,  rent: 1300, salary: 9300 },
    { name: "泰州",   en: "TAIZHOU (JS)", tier: "地级",   price: 8900,  rent: 1300, salary: 9000 },
    { name: "宿迁",   en: "SUQIAN",       tier: "地级",   price: 7300,  rent: 1150, salary: 8000 },

    /* —— 浙江 其余地级市 —— */
    { name: "嘉兴",   en: "JIAXING",      tier: "地级",   price: 11200, rent: 1600, salary: 9800 },
    { name: "湖州",   en: "HUZHOU",       tier: "地级",   price: 10300, rent: 1500, salary: 9500 },
    { name: "绍兴",   en: "SHAOXING",     tier: "地级",   price: 12800, rent: 1700, salary: 10200 },
    { name: "金华",   en: "JINHUA",       tier: "地级",   price: 12400, rent: 1650, salary: 9600 },
    { name: "衢州",   en: "QUZHOU",       tier: "地级",   price: 9500,  rent: 1300, salary: 9000 },
    { name: "舟山",   en: "ZHOUSHAN",     tier: "地级",   price: 12000, rent: 1500, salary: 10000 },
    { name: "台州",   en: "TAIZHOU (ZJ)", tier: "地级",   price: 12800, rent: 1650, salary: 9500 },
    { name: "丽水",   en: "LISHUI",       tier: "地级",   price: 12000, rent: 1500, salary: 9200 },

    /* —— 安徽 其余地级市 —— */
    { name: "蚌埠",   en: "BENGBU",       tier: "地级",   price: 6800,  rent: 1100, salary: 8000 },
    { name: "淮南",   en: "HUAINAN",      tier: "地级",   price: 6000,  rent: 1000, salary: 7800 },
    { name: "马鞍山", en: "MA'ANSHAN",    tier: "地级",   price: 7900,  rent: 1200, salary: 8800 },
    { name: "淮北",   en: "HUAIBEI",      tier: "地级",   price: 6800,  rent: 1050, salary: 7900 },
    { name: "铜陵",   en: "TONGLING",     tier: "地级",   price: 7000,  rent: 1100, salary: 8300 },
    { name: "安庆",   en: "ANQING",       tier: "地级",   price: 7600,  rent: 1150, salary: 8000 },
    { name: "黄山",   en: "HUANGSHAN",    tier: "地级",   price: 8700,  rent: 1250, salary: 8100 },
    { name: "滁州",   en: "CHUZHOU",      tier: "地级",   price: 8100,  rent: 1200, salary: 8300 },
    { name: "阜阳",   en: "FUYANG",       tier: "地级",   price: 7600,  rent: 1150, salary: 7700 },
    { name: "宿州",   en: "SUZHOU (AH)",  tier: "地级",   price: 7000,  rent: 1100, salary: 7600 },
    { name: "六安",   en: "LU'AN",        tier: "地级",   price: 7300,  rent: 1100, salary: 7800 },
    { name: "亳州",   en: "BOZHOU",       tier: "地级",   price: 7000,  rent: 1100, salary: 7500 },
    { name: "池州",   en: "CHIZHOU",      tier: "地级",   price: 7400,  rent: 1100, salary: 7900 },
    { name: "宣城",   en: "XUANCHENG",    tier: "地级",   price: 7600,  rent: 1150, salary: 8200 },

    /* —— 福建 其余地级市 —— */
    { name: "莆田",   en: "PUTIAN",       tier: "地级",   price: 10300, rent: 1350, salary: 8500 },
    { name: "三明",   en: "SANMING",      tier: "地级",   price: 7900,  rent: 1150, salary: 8400 },
    { name: "漳州",   en: "ZHANGZHOU",    tier: "地级",   price: 9500,  rent: 1300, salary: 8600 },
    { name: "南平",   en: "NANPING",      tier: "地级",   price: 7300,  rent: 1100, salary: 8200 },
    { name: "龙岩",   en: "LONGYAN",      tier: "地级",   price: 9500,  rent: 1250, salary: 8700 },
    { name: "宁德",   en: "NINGDE",       tier: "地级",   price: 10300, rent: 1350, salary: 8800 },

    /* —— 江西 其余地级市 —— */
    { name: "景德镇", en: "JINGDEZHEN",   tier: "地级",   price: 7900,  rent: 1150, salary: 8000 },
    { name: "萍乡",   en: "PINGXIANG",    tier: "地级",   price: 6800,  rent: 1050, salary: 7900 },
    { name: "九江",   en: "JIUJIANG",     tier: "地级",   price: 8100,  rent: 1200, salary: 8200 },
    { name: "新余",   en: "XINYU",        tier: "地级",   price: 6600,  rent: 1050, salary: 8200 },
    { name: "鹰潭",   en: "YINGTAN",      tier: "地级",   price: 7300,  rent: 1100, salary: 8000 },
    { name: "吉安",   en: "JI'AN",        tier: "地级",   price: 7900,  rent: 1150, salary: 7900 },
    { name: "宜春",   en: "YICHUN (JX)",  tier: "地级",   price: 7300,  rent: 1100, salary: 7800 },
    { name: "抚州",   en: "FUZHOU (JX)",  tier: "地级",   price: 7600,  rent: 1100, salary: 7700 },
    { name: "上饶",   en: "SHANGRAO",     tier: "地级",   price: 8100,  rent: 1200, salary: 7900 },

    /* —— 山东 其余地级市 —— */
    { name: "淄博",   en: "ZIBO",         tier: "地级",   price: 7600,  rent: 1150, salary: 8600 },
    { name: "枣庄",   en: "ZAOZHUANG",    tier: "地级",   price: 6400,  rent: 1050, salary: 7800 },
    { name: "东营",   en: "DONGYING",     tier: "地级",   price: 8700,  rent: 1250, salary: 9800 },
    { name: "潍坊",   en: "WEIFANG",      tier: "地级",   price: 8100,  rent: 1200, salary: 8500 },
    { name: "济宁",   en: "JINING",       tier: "地级",   price: 7600,  rent: 1150, salary: 8200 },
    { name: "泰安",   en: "TAI'AN",       tier: "地级",   price: 7900,  rent: 1200, salary: 8200 },
    { name: "威海",   en: "WEIHAI",       tier: "地级",   price: 9500,  rent: 1300, salary: 8600 },
    { name: "日照",   en: "RIZHAO",       tier: "地级",   price: 8700,  rent: 1250, salary: 8300 },
    { name: "临沂",   en: "LINYI",        tier: "地级",   price: 8400,  rent: 1250, salary: 8200 },
    { name: "德州",   en: "DEZHOU",       tier: "地级",   price: 7000,  rent: 1100, salary: 7900 },
    { name: "聊城",   en: "LIAOCHENG",    tier: "地级",   price: 7300,  rent: 1100, salary: 7800 },
    { name: "滨州",   en: "BINZHOU",      tier: "地级",   price: 7000,  rent: 1100, salary: 8200 },
    { name: "菏泽",   en: "HEZE",         tier: "地级",   price: 6800,  rent: 1100, salary: 7600 },

    /* —— 河南 其余地级市 —— */
    { name: "开封",   en: "KAIFENG",      tier: "地级",   price: 7300,  rent: 1100, salary: 7800 },
    { name: "平顶山", en: "PINGDINGSHAN", tier: "地级",   price: 6400,  rent: 1050, salary: 7700 },
    { name: "安阳",   en: "ANYANG",       tier: "地级",   price: 6800,  rent: 1050, salary: 7700 },
    { name: "鹤壁",   en: "HEBI",         tier: "地级",   price: 5600,  rent: 950,  salary: 7500 },
    { name: "新乡",   en: "XINXIANG",     tier: "地级",   price: 7000,  rent: 1100, salary: 7900 },
    { name: "焦作",   en: "JIAOZUO",      tier: "地级",   price: 6800,  rent: 1050, salary: 7800 },
    { name: "濮阳",   en: "PUYANG",       tier: "地级",   price: 6600,  rent: 1050, salary: 7600 },
    { name: "许昌",   en: "XUCHANG",      tier: "地级",   price: 7000,  rent: 1100, salary: 8000 },
    { name: "漯河",   en: "LUOHE",        tier: "地级",   price: 6600,  rent: 1050, salary: 7600 },
    { name: "三门峡", en: "SANMENXIA",    tier: "地级",   price: 6400,  rent: 1000, salary: 7800 },
    { name: "南阳",   en: "NANYANG",      tier: "地级",   price: 7000,  rent: 1100, salary: 7600 },
    { name: "商丘",   en: "SHANGQIU",     tier: "地级",   price: 6600,  rent: 1050, salary: 7400 },
    { name: "信阳",   en: "XINYANG",      tier: "地级",   price: 7000,  rent: 1100, salary: 7500 },
    { name: "周口",   en: "ZHOUKOU",      tier: "地级",   price: 6400,  rent: 1050, salary: 7300 },
    { name: "驻马店", en: "ZHUMADIAN",    tier: "地级",   price: 6800,  rent: 1050, salary: 7400 },

    /* —— 湖北 其余地级市 —— */
    { name: "黄石",   en: "HUANGSHI",     tier: "地级",   price: 6100,  rent: 1000, salary: 8100 },
    { name: "十堰",   en: "SHIYAN",       tier: "地级",   price: 6800,  rent: 1050, salary: 8200 },
    { name: "襄阳",   en: "XIANGYANG",    tier: "地级",   price: 7300,  rent: 1150, salary: 8500 },
    { name: "鄂州",   en: "EZHOU",        tier: "地级",   price: 6400,  rent: 1000, salary: 8200 },
    { name: "荆门",   en: "JINGMEN",      tier: "地级",   price: 6000,  rent: 1000, salary: 8000 },
    { name: "孝感",   en: "XIAOGAN",      tier: "地级",   price: 6400,  rent: 1050, salary: 7900 },
    { name: "荆州",   en: "JINGZHOU",     tier: "地级",   price: 6200,  rent: 1000, salary: 7900 },
    { name: "黄冈",   en: "HUANGGANG",    tier: "地级",   price: 6200,  rent: 1000, salary: 7700 },
    { name: "咸宁",   en: "XIANNING",     tier: "地级",   price: 6000,  rent: 1000, salary: 7800 },
    { name: "随州",   en: "SUIZHOU",      tier: "地级",   price: 6200,  rent: 1000, salary: 7700 },

    /* —— 湖南 其余地级市 —— */
    { name: "株洲",   en: "ZHUZHOU",      tier: "地级",   price: 6200,  rent: 1050, salary: 8600 },
    { name: "湘潭",   en: "XIANGTAN",     tier: "地级",   price: 5800,  rent: 1000, salary: 8400 },
    { name: "衡阳",   en: "HENGYANG",     tier: "地级",   price: 6000,  rent: 1000, salary: 8000 },
    { name: "邵阳",   en: "SHAOYANG",     tier: "地级",   price: 5500,  rent: 950,  salary: 7500 },
    { name: "常德",   en: "CHANGDE",      tier: "地级",   price: 6200,  rent: 1050, salary: 8100 },
    { name: "张家界", en: "ZHANGJIAJIE",  tier: "地级",   price: 6000,  rent: 1000, salary: 7600 },
    { name: "益阳",   en: "YIYANG",       tier: "地级",   price: 5600,  rent: 950,  salary: 7700 },
    { name: "郴州",   en: "CHENZHOU",     tier: "地级",   price: 6200,  rent: 1000, salary: 7900 },
    { name: "永州",   en: "YONGZHOU",     tier: "地级",   price: 5500,  rent: 950,  salary: 7500 },
    { name: "怀化",   en: "HUAIHUA",      tier: "地级",   price: 5800,  rent: 950,  salary: 7600 },
    { name: "娄底",   en: "LOUDI",        tier: "地级",   price: 5300,  rent: 900,  salary: 7700 },

    /* —— 广东 其余地级市 —— */
    { name: "韶关",   en: "SHAOGUAN",     tier: "地级",   price: 7300,  rent: 1150, salary: 8200 },
    { name: "珠海",   en: "ZHUHAI",       tier: "地级",   price: 19500, rent: 2250, salary: 10800 },
    { name: "汕头",   en: "SHANTOU",      tier: "地级",   price: 9500,  rent: 1350, salary: 8300 },
    { name: "江门",   en: "JIANGMEN",     tier: "地级",   price: 8700,  rent: 1300, salary: 9000 },
    { name: "湛江",   en: "ZHANJIANG",    tier: "地级",   price: 8400,  rent: 1250, salary: 8300 },
    { name: "茂名",   en: "MAOMING",      tier: "地级",   price: 7900,  rent: 1200, salary: 8100 },
    { name: "肇庆",   en: "ZHAOQING",     tier: "地级",   price: 7600,  rent: 1200, salary: 8400 },
    { name: "惠州",   en: "HUIZHOU",      tier: "地级",   price: 9500,  rent: 1400, salary: 9200 },
    { name: "梅州",   en: "MEIZHOU",      tier: "地级",   price: 7000,  rent: 1100, salary: 7800 },
    { name: "汕尾",   en: "SHANWEI",      tier: "地级",   price: 8100,  rent: 1200, salary: 7900 },
    { name: "河源",   en: "HEYUAN",       tier: "地级",   price: 7600,  rent: 1150, salary: 8000 },
    { name: "阳江",   en: "YANGJIANG",    tier: "地级",   price: 7300,  rent: 1150, salary: 8000 },
    { name: "清远",   en: "QINGYUAN",     tier: "地级",   price: 7900,  rent: 1200, salary: 8300 },
    { name: "中山",   en: "ZHONGSHAN",    tier: "地级",   price: 10300, rent: 1500, salary: 9500 },
    { name: "潮州",   en: "CHAOZHOU",     tier: "地级",   price: 7600,  rent: 1150, salary: 7800 },
    { name: "揭阳",   en: "JIEYANG",      tier: "地级",   price: 7900,  rent: 1150, salary: 7600 },
    { name: "云浮",   en: "YUNFU",        tier: "地级",   price: 6800,  rent: 1050, salary: 7700 },

    /* —— 广西 其余地级市 —— */
    { name: "桂林",   en: "GUILIN",       tier: "地级",   price: 7900,  rent: 1200, salary: 7900 },
    { name: "梧州",   en: "WUZHOU",       tier: "地级",   price: 6800,  rent: 1050, salary: 7500 },
    { name: "北海",   en: "BEIHAI",       tier: "地级",   price: 8700,  rent: 1250, salary: 7800 },
    { name: "防城港", en: "FANGCHENGGANG", tier: "地级",  price: 7900,  rent: 1150, salary: 7700 },
    { name: "钦州",   en: "QINZHOU",      tier: "地级",   price: 7300,  rent: 1100, salary: 7500 },
    { name: "贵港",   en: "GUIGANG",      tier: "地级",   price: 7000,  rent: 1100, salary: 7400 },
    { name: "玉林",   en: "YULIN (GX)",   tier: "地级",   price: 7600,  rent: 1150, salary: 7500 },
    { name: "百色",   en: "BAISE",        tier: "地级",   price: 7300,  rent: 1100, salary: 7600 },
    { name: "贺州",   en: "HEZHOU",       tier: "地级",   price: 7000,  rent: 1050, salary: 7400 },
    { name: "河池",   en: "HECHI",        tier: "地级",   price: 6800,  rent: 1050, salary: 7500 },
    { name: "来宾",   en: "LAIBIN",       tier: "地级",   price: 6600,  rent: 1050, salary: 7400 },
    { name: "崇左",   en: "CHONGZUO",     tier: "地级",   price: 6800,  rent: 1050, salary: 7500 },

    /* —— 海南 其余地级市 —— */
    { name: "儋州",   en: "DANZHOU",      tier: "地级",   price: 10300, rent: 1250, salary: 7900 },

    /* —— 四川 其余地级市 —— */
    { name: "自贡",   en: "ZIGONG",       tier: "地级",   price: 6400,  rent: 1050, salary: 7900 },
    { name: "攀枝花", en: "PANZHIHUA",    tier: "地级",   price: 7300,  rent: 1150, salary: 8800 },
    { name: "泸州",   en: "LUZHOU",       tier: "地级",   price: 7300,  rent: 1150, salary: 8100 },
    { name: "德阳",   en: "DEYANG",       tier: "地级",   price: 7600,  rent: 1200, salary: 8500 },
    { name: "广元",   en: "GUANGYUAN",    tier: "地级",   price: 6800,  rent: 1050, salary: 7700 },
    { name: "遂宁",   en: "SUINING",      tier: "地级",   price: 7000,  rent: 1100, salary: 7800 },
    { name: "内江",   en: "NEIJIANG",     tier: "地级",   price: 6400,  rent: 1050, salary: 7700 },
    { name: "乐山",   en: "LESHAN",       tier: "地级",   price: 7300,  rent: 1150, salary: 8000 },
    { name: "南充",   en: "NANCHONG",     tier: "地级",   price: 7600,  rent: 1200, salary: 7900 },
    { name: "眉山",   en: "MEISHAN",      tier: "地级",   price: 7900,  rent: 1200, salary: 8200 },
    { name: "宜宾",   en: "YIBIN",        tier: "地级",   price: 7600,  rent: 1200, salary: 8300 },
    { name: "广安",   en: "GUANG'AN",     tier: "地级",   price: 6800,  rent: 1050, salary: 7600 },
    { name: "达州",   en: "DAZHOU",       tier: "地级",   price: 7300,  rent: 1100, salary: 7700 },
    { name: "雅安",   en: "YA'AN",        tier: "地级",   price: 7000,  rent: 1100, salary: 8000 },
    { name: "巴中",   en: "BAZHONG",      tier: "地级",   price: 6800,  rent: 1050, salary: 7500 },
    { name: "资阳",   en: "ZIYANG",       tier: "地级",   price: 6600,  rent: 1050, salary: 7700 },

    /* —— 贵州 其余地级市 —— */
    { name: "六盘水", en: "LIUPANSHUI",   tier: "地级",   price: 5300,  rent: 900,  salary: 7900 },
    { name: "安顺",   en: "ANSHUN",       tier: "地级",   price: 5800,  rent: 950,  salary: 7700 },
    { name: "毕节",   en: "BIJIE",        tier: "地级",   price: 5600,  rent: 900,  salary: 7500 },
    { name: "铜仁",   en: "TONGREN",      tier: "地级",   price: 5900,  rent: 950,  salary: 7600 },

    /* —— 云南 其余地级市 —— */
    { name: "曲靖",   en: "QUJING",       tier: "地级",   price: 6800,  rent: 1100, salary: 7900 },
    { name: "玉溪",   en: "YUXI",         tier: "地级",   price: 7300,  rent: 1150, salary: 8400 },
    { name: "保山",   en: "BAOSHAN",      tier: "地级",   price: 7000,  rent: 1100, salary: 7700 },
    { name: "昭通",   en: "ZHAOTONG",     tier: "地级",   price: 6400,  rent: 1050, salary: 7500 },
    { name: "丽江",   en: "LIJIANG",      tier: "地级",   price: 8700,  rent: 1250, salary: 7800 },
    { name: "普洱",   en: "PU'ER",        tier: "地级",   price: 7000,  rent: 1100, salary: 7700 },
    { name: "临沧",   en: "LINCANG",      tier: "地级",   price: 6600,  rent: 1050, salary: 7500 },

    /* —— 西藏 其余地级市 —— */
    { name: "昌都",   en: "QAMDO",        tier: "地级",   price: 7300,  rent: 1150, salary: 9500 },
    { name: "林芝",   en: "NYINGCHI",     tier: "地级",   price: 8700,  rent: 1300, salary: 9800 },
    { name: "山南",   en: "SHANNAN",      tier: "地级",   price: 7600,  rent: 1200, salary: 9500 },
    { name: "那曲",   en: "NAGQU",        tier: "地级",   price: 7000,  rent: 1100, salary: 9800 },

    /* —— 陕西 其余地级市 —— */
    { name: "铜川",   en: "TONGCHUAN",    tier: "地级",   price: 5600,  rent: 950,  salary: 7600 },
    { name: "宝鸡",   en: "BAOJI",        tier: "地级",   price: 7000,  rent: 1100, salary: 8000 },
    { name: "渭南",   en: "WEINAN",       tier: "地级",   price: 6800,  rent: 1050, salary: 7700 },
    { name: "延安",   en: "YAN'AN",       tier: "地级",   price: 7600,  rent: 1150, salary: 8300 },
    { name: "汉中",   en: "HANZHONG",     tier: "地级",   price: 7600,  rent: 1150, salary: 7900 },
    { name: "榆林",   en: "YULIN (SN)",   tier: "地级",   price: 8700,  rent: 1250, salary: 9500 },
    { name: "安康",   en: "ANKANG",       tier: "地级",   price: 7300,  rent: 1100, salary: 7700 },
    { name: "商洛",   en: "SHANGLUO",     tier: "地级",   price: 7000,  rent: 1050, salary: 7500 },

    /* —— 甘肃 其余地级市 —— */
    { name: "嘉峪关", en: "JIAYUGUAN",    tier: "地级",   price: 5600,  rent: 950,  salary: 8500 },
    { name: "金昌",   en: "JINCHANG",     tier: "地级",   price: 4800,  rent: 850,  salary: 8300 },
    { name: "白银",   en: "BAIYIN",       tier: "地级",   price: 5400,  rent: 950,  salary: 7700 },
    { name: "武威",   en: "WUWEI",        tier: "地级",   price: 5600,  rent: 950,  salary: 7400 },
    { name: "张掖",   en: "ZHANGYE",      tier: "地级",   price: 5900,  rent: 1000, salary: 7500 },
    { name: "平凉",   en: "PINGLIANG",    tier: "地级",   price: 6200,  rent: 1000, salary: 7300 },
    { name: "酒泉",   en: "JIUQUAN",      tier: "地级",   price: 5900,  rent: 1000, salary: 8000 },
    { name: "庆阳",   en: "QINGYANG",     tier: "地级",   price: 6800,  rent: 1050, salary: 7800 },
    { name: "定西",   en: "DINGXI",       tier: "地级",   price: 5900,  rent: 950,  salary: 7200 },
    { name: "陇南",   en: "LONGNAN",      tier: "地级",   price: 6200,  rent: 1000, salary: 7200 },

    /* —— 宁夏 其余地级市 —— */
    { name: "石嘴山", en: "SHIZUISHAN",   tier: "地级",   price: 4500,  rent: 800,  salary: 7700 },
    { name: "固原",   en: "GUYUAN",       tier: "地级",   price: 5900,  rent: 950,  salary: 7300 },
    { name: "中卫",   en: "ZHONGWEI",     tier: "地级",   price: 5400,  rent: 900,  salary: 7400 },

    /* —— 新疆 其余地级市 —— */
    { name: "克拉玛依", en: "KARAMAY",    tier: "地级",   price: 6400,  rent: 1050, salary: 10500 },
    { name: "吐鲁番", en: "TURPAN",       tier: "地级",   price: 5100,  rent: 900,  salary: 7800 },
    { name: "哈密",   en: "HAMI",         tier: "地级",   price: 5600,  rent: 950,  salary: 8200 }
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
