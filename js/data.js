/* ============================================================
   泰拉攻略站 · 数据文件
   ------------------------------------------------------------
   想给网站加内容？只要在下面对应的列表里复制一段花括号 { ... }
   改成新内容，刷新网页就能看到，不需要懂编程。

   关于物品图标（img 字段）：
   - 所有物品图片均从泰拉瑞亚官方 Wiki 下载，存放在 img 文件夹；
     如果某张图缺失（img 填了名字但文件不存在），会自动退回 emoji 占位。
   - 想换成真实游戏图：在 https://terraria.wiki.gg 搜物品英文名，
     保存对应图片到 img 文件夹、按 "英文名.png" 命名（如 Copper_Ore.png），
     再把 img 字段改成 "英文名.png"，刷新即自动显示。
   ============================================================ */

window.TERRARIA_DATA = {

  /* ---------- BOSS 的四个阶段（筛选用） ---------- */
  stages: [
    { id: 1, name: "困难模式前" },
    { id: 2, name: "困难模式初期" },
    { id: 3, name: "世纪之花后" },
    { id: 4, name: "游戏末期" }
  ],

  /* ==========================================================
     BOSS 列表
     复制下面任意一整段 { ... }，改文字即可新增一个 BOSS：
     ----------------------------------------------------------
     {
       id: "新boss的英文代号",        // 不能和别的重复
       name: "BOSS名字",
       icon: "😈",                    // 任意 emoji 当图标
       stage: 1,                      // 1肉前 2肉后初期 3花后 4末期
       summon: "召唤方式写这里",
       prepare: ["准备1", "准备2"],
       tips: ["打法要点1", "打法要点2"],
       drops: ["掉落1", "掉落2"]
     }
     ========================================================== */
  bosses: [
    {
      id: "slime-king",
      img: "King_Slime.png",
      name: "史莱姆王",
      icon: "👑",
      stage: 1,
      summon: "在恶魔祭坛用「金冠 + 凝胶」合成史莱姆王冠后召唤；触发史莱姆雨事件时也可能自然出现。",
      prepare: [
        "钨/金等级以上的武器和防具",
        "在空中架一条长平台或拉一条绳子，防止被围",
        "带几组弱效治疗药水"
      ],
      tips: [
        "它跳得高但转向慢，沿长平台横向拉开距离最稳",
        "受伤后会分裂出小蓝史莱姆，先清小怪再打本体",
        "手机端建议开启自动瞄准，边跑边按攻击键即可"
      ],
      drops: ["固化机", "忍者套装部件", "史莱姆枪", "史莱姆钩爪"]
    },
    {
      id: "eye",
      img: "Eye_of_Cthulhu.png",
      name: "克苏鲁之眼",
      icon: "👁️",
      stage: 1,
      summon: "夜晚使用「可疑眼球」召唤；前期血量和防御达标后，每晚也有概率自己出现。",
      prepare: [
        "银/钨套装以上，180 点以上生命值",
        "远程武器：手里剑、弓箭或燧石枪",
        "搭 2~3 层长平台，放一个篝火"
      ],
      tips: [
        "一阶段来回冲撞并召唤小眼球仆从，保持横向跑动",
        "血量过半进入二阶段，几乎不停冲撞，速度明显变快",
        "手机端把摇杆一直推向一个方向跑，攻击键连点就行"
      ],
      drops: ["魔金矿石/猩红矿石", "邪箭", "双筒望远镜", "面具与纪念章"]
    },
    {
      id: "eater",
      img: "Eater_of_Worlds.png",
      name: "世界吞噬怪",
      icon: "🪱",
      stage: 1,
      summon: "腐化世界专属：在腐化之地使用「蠕虫诱饵」，或连续敲碎 3 个暗影珠。",
      prepare: [
        "200 点生命值以上，带钩爪防掉落",
        "穿透类武器：魔刺、小丑之箭、手雷都很好用",
        "备好返回药水和治疗药水"
      ],
      tips: [
        "它是多节长虫，穿透武器一次能打好几节",
        "会反复从地下钻出，集火头部能更快结束战斗",
        "手机端建议在腐化裂口附近挖一条长直通道，边退边打"
      ],
      drops: ["魔金矿石", "暗影鳞片（合成暗影套、噩梦镐必需）"]
    },
    {
      id: "brain",
      img: "Brain_of_Cthulhu.png",
      name: "克苏鲁之脑",
      icon: "🧠",
      stage: 1,
      summon: "猩红世界专属：在猩红之地使用「血腥脊椎」，或连续敲碎 3 个猩红之心。",
      prepare: [
        "猩红套装或更好的防具",
        "带范围伤害的武器（手雷、尖球、穿透类）",
        "在洞穴里铺平台、放篝火，保证退路"
      ],
      tips: [
        "一阶段本体无敌，只有围着它转的飞眼怪能打，先清飞眼",
        "二阶段本体显形，会瞬移到你身边冲撞，留意传送前的虚影",
        "手机端可锁定本体，看到虚影消失就立刻反方向跑"
      ],
      drops: ["猩红矿石", "组织样本（合成猩红套、死亡使者镐必需）"]
    },
    {
      id: "queen-bee",
      img: "Queen_Bee.png",
      name: "蜂王",
      icon: "🐝",
      stage: 1,
      summon: "在地下丛林的蜂巢内破坏幼虫，或在蜂巢里使用「憎恶之蜂」。",
      prepare: [
        "丛林套或熔岩套，200 点生命值以上",
        "把蜂巢内部拓宽，铺几层平台",
        "在附近放床设置出生点，蜂蜜泡一泡有回血增益"
      ],
      tips: [
        "它交替使用冲撞和放蜂，绕着平台转圈输出",
        "蜂巢空间太小一定要先挖大，被墙卡住很容易死",
        "手机端黑暗中建议开智能光标，锁定蜂王输出"
      ],
      drops: ["蜜蜂枪", "养蜂人", "蜂蜡（蜜蜂套）", "蜂巢背包", "花蜜", "蜜蜂钩爪"]
    },
    {
      id: "skeletron",
      img: "Skeletron.png",
      name: "骷髅王",
      icon: "💀",
      stage: 1,
      summon: "夜晚到地牢入口找「老人」对话，点击诅咒；必须在夜晚召唤。",
      prepare: [
        "15 点以上防御，远程武器更舒服",
        "搭一条超长平台，带羽落和敏捷药水",
        "入夜后立刻开打，留足战斗时间"
      ],
      tips: [
        "可以先打两只手，手断了之后头部防御大降",
        "头会旋转着冲撞，提前沿平台跑开",
        "天亮还没打完会被它一击秒杀，千万别拖",
        "手机端先锁定一只手打爆，再切头部"
      ],
      drops: ["骷髅面具/纪念章", "解锁地牢（钴护盾、村正、手枪等宝藏）"]
    },
    {
      id: "wall",
      img: "Wall_of_Flesh.png",
      name: "血肉墙",
      icon: "🔥",
      stage: 1,
      summon: "在地狱把「向导巫毒娃娃」丢进岩浆（向导必须存活）。这是困难模式前的最终 BOSS。",
      prepare: [
        "在地狱铺一条超长直桥（尽量铺长，越长越好打）",
        "熔岩套、蜜蜂枪或蜜蜂手雷",
        "带够治疗药水，黑曜石皮肤药水防岩浆"
      ],
      tips: [
        "它只会从世界一头匀速压向另一头，没有回头路，边退边打",
        "先打两只眼睛和嘴巴，顺手清掉扑过来的饿鬼",
        "手机端把摇杆固定朝一个方向跑，开自动瞄准持续输出",
        "打赢后世界永久进入困难模式：神圣之地出现，旧矿被感染"
      ],
      drops: ["神锤", "破坏者巨剑", "发条突击步枪", "激光步枪"]
    },
    {
      id: "queen-slime",
      img: "Queen_Slime.png",
      name: "史莱姆皇后",
      icon: "💠",
      stage: 2,
      summon: "在地下神圣之地挖到「明胶水晶」，到神圣地表使用召唤。困难模式可选 BOSS。",
      prepare: [
        "困难矿石套装（钴/秘银/精金级别）",
        "搭 3~4 层平台，有翅膀会轻松很多",
        "带足治疗药水"
      ],
      tips: [
        "本体跳跃追击，同时放出飞行小史莱姆，先清弹幕",
        "半血后冲撞更频繁，利用平台上下落差拉扯",
        "手机端没有翅膀前建议晚点再打，机动性很关键"
      ],
      drops: ["水晶刺客套装", "明胶鞍（坐骑）", "闪光石", "钩爪"]
    },
    {
      id: "twins",
      img: "The_Twins.png",
      name: "双子魔眼",
      icon: "😈",
      stage: 2,
      summon: "夜晚使用「机械眼球」（肉后夜晩也可能自然出现）。新三王之一。",
      prepare: [
        "精金/钛金套装或更好",
        "代达罗斯风暴弓 + 神圣箭，或水晶蛇等魔法武器",
        "3~4 层长平台，心形灯笼 + 篝火"
      ],
      tips: [
        "建议先集火绿色的魔焰眼，减少火焰弹幕压力",
        "一只进入二阶段后优先打死它，再处理另一只",
        "二阶段会持续高速冲撞，保持跑动不要停",
        "手机端弹幕多时别慌，沿平台绕大圈最稳"
      ],
      drops: ["神圣锭", "视域之魂（巨兽鲨等装备的合成材料）"]
    },
    {
      id: "destroyer",
      img: "The_Destroyer.png",
      name: "毁灭者",
      icon: "🐛",
      stage: 2,
      summon: "夜晚使用「机械蠕虫」。新三王之一，超长机械虫。",
      prepare: [
        "钛金/精金套装",
        "穿透或范围武器：恶魔锄刀、雨云魔杖、代达罗斯风暴弓",
        "搭一层高平台，但不要飞太高"
      ],
      tips: [
        "攻击任意一节都对整体造成伤害，穿透武器输出爆炸",
        "飞太高它身上的探针会放激光，保持在平台附近打",
        "它钻地时不要追，等它再钻出来继续输出",
        "手机端锁定身体中段，走位压力最小"
      ],
      drops: ["神圣锭", "力量之魂（巨兽鲨、光辉飞盘等材料）"]
    },
    {
      id: "prime",
      img: "Skeletron_Prime.png",
      name: "机械骷髅王",
      icon: "🤖",
      stage: 2,
      summon: "夜晚使用「机械骷髅头」。新三王之一。",
      prepare: [
        "精金/钛金套装，巨兽鲨或水晶蛇",
        "超长平台，治疗药水至少带两组",
        "入夜立即开打，防止拖到天亮"
      ],
      tips: [
        "四只手分别是激光、炮、钳、锯，优先拆掉激光手和炮",
        "头会周期性旋转冲撞，看到抬头就横向跑",
        "同样有天亮秒杀机制，注意时间",
        "手机端按「激光→炮→钳/锯→头」的顺序逐个锁定"
      ],
      drops: ["神圣锭", "恐惧之魂（火焰喷射器、冰雪镰刀等材料）"]
    },
    {
      id: "plantera",
      img: "Plantera.png",
      name: "世纪之花",
      icon: "🌸",
      stage: 3,
      summon: "打败任意一个机械 BOSS 后，地下丛林会陆续长出粉色花苞，用镐敲碎即召唤。",
      prepare: [
        "神圣套、乌龟套或同级别装备",
        "巨兽鲨 + 叶绿弹，或泰拉刃等武器",
        "在地下丛林挖出大圆形场地，放篝火、心形灯笼和蜂蜜池"
      ],
      tips: [
        "一阶段用触手钩着地形追你，沿圆形场地绕圈即可",
        "半血后进入狂暴形态，冲撞极快，提前留好位移空间",
        "千万别把它拉出地下丛林，离开后它会大幅强化",
        "手机端锁定本体，善用钩爪保持机动"
      ],
      drops: ["神庙钥匙（进入丛林蜥蜴神庙）", "榴弹发射器", "矮人法杖", "吉他斧"]
    },
    {
      id: "golem",
      img: "Golem.png",
      name: "石巨人",
      icon: "🗿",
      stage: 3,
      summon: "用「丛林蜥蜴电池」在神庙深处的蜥蜴祭坛上召唤（电池在神庙箱中获得）。",
      prepare: [
        "乌龟套/甲虫套或同级别装备",
        "可以把祭坛房间改造一下，留单向墙输出",
        "带穿墙武器（如死神镰刀）会轻松很多"
      ],
      tips: [
        "先打两只拳头让它们脱落，再打头和身体",
        "二阶段头部会飞出来追你并放激光，保持横向移动",
        "它跳跃落地时躲远，被压住伤害很高",
        "手机端场地小，贴着房间绕柱走位最稳"
      ],
      drops: ["甲虫鞘翅", "锯刃镐", "石巨人之眼", "热能射线", "日耀碑牌碎片"]
    },
    {
      id: "fishron",
      img: "Duke_Fishron.png",
      name: "猪龙鱼公爵",
      icon: "🐟",
      stage: 3,
      summon: "在发光蘑菇地抓到「松露虫」后，到海边用鱼竿钓鱼召唤。可选高难 BOSS。",
      prepare: [
        "叶绿/乌龟级别以上装备，翅膀必备",
        "巨兽鲨 + 叶绿弹或同等级武器",
        "海上空搭 2~3 层超长平台"
      ],
      tips: [
        "冲撞伤害极高，沿平台斜向飞行躲冲刺节奏",
        "二阶段会传送突进，并召唤旋风鲨鱼弹幕",
        "手机版它属于最难打的 BOSS 之一，建议装备成型后再来",
        "手残党可以先打石巨人、刷出更好装备后再挑战"
      ],
      drops: ["猪鲨链球", "海啸弓", "泡泡枪", "猪鲨翅膀"]
    },
    {
      id: "empress",
      img: "Empress_of_Light.png",
      name: "光之女皇",
      icon: "🦋",
      stage: 3,
      summon: "黄昏后在神圣地表找到「夜光七彩草蛉」，杀死它即召唤。可选 BOSS。",
      prepare: [
        "神圣套/幽灵套/阴森套或同级别装备",
        "翅膀 + 高机动饰品，多层开阔平台",
        "手机性能较弱的话适当降低画面粒子设置"
      ],
      tips: [
        "弹幕华丽但有规律：横向冲刺 + 七彩射线，听音效看节奏躲",
        "全程保持斜向飞行，不要长时间悬停",
        "白天将其击杀（极高难度）必掉毕业召唤武器「泰拉棱镜」",
        "手机端弹幕密集时可能掉帧，提前在设置里关闭多余特效"
      ],
      drops: ["泰拉棱镜", "星光", "万花筒鞭", "女皇之翼", "七彩染料"]
    },
    {
      id: "moon-lord",
      img: "Moon_Lord.png",
      name: "月亮领主",
      icon: "🌙",
      stage: 4,
      summon: "打败天界四柱后约 1 分钟自动降临；也可以用「天体印记」随时召唤。游戏最终 BOSS。",
      prepare: [
        "毕业级防具：耀斑套/星云套/星尘套/阴森套",
        "毕业武器：泰拉刃、幻象弓、终极棱镜等",
        "搭心形雕像 + 心形灯笼 + 篝火 + 蜂蜜的回血场",
        "带足超级治疗药水和魔力药水"
      ],
      tips: [
        "先打爆两只手上的眼球，再打额头眼球",
        "眼球闭眼时无法造成伤害，趁机走位",
        "它会施加「真视界」debuff，期间无法用吸血回血，提前喝药",
        "三个眼球都爆后胸口心脏打开，全力输出心脏",
        "手机端死了不用怕，用天体印记可以反复再战，装备会越打越熟"
      ],
      drops: ["夜明矿（做毕业套）", "彩虹猫之刃", "狂星之怒", "泰拉悠悠球", "S.D.M.G.", "最终棱镜等毕业武器（随机掉落）"]
    }
  ],

  /* ==========================================================
     物品数据库
     categories 和 rarityList 是筛选用的，
     新增物品时 cat 与 rarity 照着这两份名单里的文字写即可。
     ========================================================== */
  categories: ["武器", "盔甲", "饰品", "药水", "材料"],
  rarityList: ["灰色", "白色", "蓝色", "绿色", "橙色", "粉色", "黄色", "红色", "紫色", "彩色", "灾厄"],

  /* 复制下面任意一整段 { ... } 就能加一件新物品：
  {
    name: "物品名字",
    img: "English_Name.png",   // 官方Wiki图片文件名，不知道就填 ""
    cat: "武器",               // 必须是上面 categories 里的词
    origin: "vanilla",         // vanilla=原版 calamity=灾厄（不填默认原版）
    rarity: "橙色",             // 必须是上面 rarityList 里的词
    damage: "42 近战伤害",      // 没有伤害的物品写 "" 即可
    source: "获取方式",
    desc: "一句话介绍"
  }
  */
  items: [
    /* ---------- 武器（近战/魔法） ---------- */
    { name: "铜短剑", img: "Copper_Shortsword.png", cat: "武器", rarity: "白色", damage: "5 近战伤害", source: "新建角色自带，或用 3 个铜锭合成", desc: "最初的伙伴，挥砍距离短，挖到铁就换掉。" },
    { name: "附魔回旋镖", img: "Enchanted_Boomerang.png", cat: "武器", rarity: "蓝色", damage: "13 近战伤害", source: "地下宝箱、金匣中开出", desc: "扔出后自动飞回，可穿墙回收，肉前风筝神器。" },
    { name: "村正", img: "Muramasa.png", cat: "武器", rarity: "蓝色", damage: "19 近战伤害", source: "地牢金锁盒内获得", desc: "攻速极快且自动挥动，是合成永夜刃的四把剑之一。" },
    { name: "永夜刃", img: "Night's_Edge.png", cat: "武器", rarity: "橙色", damage: "42 近战伤害", source: "村正 + 草薙 + 炽焰巨剑 + 魔光剑（或血腥屠刀），在恶魔祭坛合成", desc: "困难模式前最强宽刃剑，肉后可升级为「原版永夜刃」。" },
    { name: "断钢剑", img: "Excalibur.png", cat: "武器", rarity: "粉色", damage: "57 近战伤害", source: "12 个神圣锭在秘银/山铜砧合成", desc: "机械三王后的主力剑，合成泰拉刃的必备材料。" },
    { name: "泰拉刃", img: "Terra_Blade.png", cat: "武器", rarity: "黄色", damage: "95 近战伤害", source: "原版断钢剑 + 原版永夜刃在秘银/山铜砧合成", desc: "挥砍同时发射绿色剑气，手机版横扫+剑气双模式，准毕业武器。" },
    { name: "天顶剑", img: "Zenith.png", cat: "武器", rarity: "彩色", damage: "190 近战伤害", source: "用泰拉刃、狂星之怒、彩虹猫之刃等共 10 把剑在秘银砧合成", desc: "全游戏最强武器之一，剑尖在全屏自动飞舞，终极收集目标。" },

    /* ---------- 武器（远程） ---------- */
    { name: "迷你鲨", img: "Minishark.png", cat: "武器", rarity: "蓝色", damage: "6 远程伤害", source: "军火商 NPC 处花 35 金币购买", desc: "三分之一概率不消耗子弹，是合成巨兽鲨的前置武器。" },
    { name: "巨兽鲨", img: "Megashark.png", cat: "武器", rarity: "粉色", damage: "25 远程伤害", source: "迷你鲨 + 非法枪械部件 + 鲨鱼鳍 + 力量之魂合成", desc: "射速快、后坐力低，困难模式枪械流的绝对主力。" },
    { name: "海啸", img: "Tsunami.png", cat: "武器", rarity: "黄色", damage: "50 远程伤害", source: "猪龙鱼公爵掉落", desc: "一次射出 5 支箭却只消耗 1 支，搭配神圣箭伤害爆炸。" },

    /* ---------- 武器（魔法/召唤） ---------- */
    { name: "水箭魔法书", img: "Water_Bolt.png", cat: "武器", rarity: "蓝色", damage: "19 魔法伤害", source: "地牢里的水箭书架（摆着蓝球的台子）", desc: "水球可反弹多次，隔着门卡 BOSS 的经典逃课武器。" },
    { name: "恶魔锄刀", img: "Demon_Scythe.png", cat: "武器", rarity: "绿色", damage: "35 魔法伤害", source: "地狱的恶魔掉落", desc: "发射旋转镰刀弹幕并可穿透，打长虫类 BOSS 特别好用。" },
    { name: "剃刀松", img: "Razorpine.png", cat: "武器", rarity: "黄色", damage: "48 魔法伤害", source: "霜月事件中常青尖叫树掉落", desc: "超高频率发射松针，单体输出天花板级别。" },
    { name: "最终棱镜", img: "Last_Prism.png", cat: "武器", rarity: "红色", damage: "100 魔法伤害", source: "月亮领主掉落", desc: "六道光束汇成一道致命光柱，站桩爆发之王，注意备好魔力药水和魔力花。" },

    /* ---------- 武器（召唤） ---------- */
    { name: "雀杖", img: "Finch_Staff.png", cat: "武器", rarity: "白色", damage: "7 召唤伤害", source: "世界树顶部生命木箱中获得", desc: "1.4 版本新手福利，开局就能找到的第一把召唤杖。" },
    { name: "小鬼法杖", img: "Imp_Staff.png", cat: "武器", rarity: "绿色", damage: "17 召唤伤害", source: "17 个狱石锭在铁砧合成", desc: "火焰小鬼远程攻击还能给敌人上点燃，肉前召唤师主力。" },
    { name: "矮人法杖", img: "Pygmy_Staff.png", cat: "武器", rarity: "黄色", damage: "34 召唤伤害", source: "世纪之花掉落", desc: "召唤矮人战士投矛作战，花后召唤师体系的核心武器。" },
    { name: "七彩水晶法杖", img: "Rainbow_Crystal_Staff.png", cat: "武器", rarity: "紫色", damage: "158 召唤伤害", source: "月亮领主掉落", desc: "放置水晶持续扫射彩色光束，清怪和打天界柱都非常强。" },

    /* ---------- 武器（近战 · 矿石剑与肉前名剑） ---------- */
    { name: "仙人掌剑", img: "Cactus_Sword.png", cat: "武器", rarity: "白色", damage: "9 近战伤害", source: "10 个仙人掌在工作台合成", desc: "进沙漠随手做的第一把剑，比铜短剑略长。" },
    { name: "铜宽刃剑", img: "Copper_Broadsword.png", cat: "武器", rarity: "白色", damage: "8 近战伤害", source: "8 个铜锭在铁砧合成", desc: "横向挥砍，比短剑好用，铜多就换。" },
    { name: "锡宽刃剑", img: "Tin_Broadsword.png", cat: "武器", rarity: "白色", damage: "9 近战伤害", source: "8 个锡锭在铁砧合成", desc: "铜宽刃剑的锡矿替代版。" },
    { name: "铁宽刃剑", img: "Iron_Broadsword.png", cat: "武器", rarity: "白色", damage: "10 近战伤害", source: "8 个铁锭在铁砧合成", desc: "前期性价比之选，挖铁后优先做一把。" },
    { name: "铅宽刃剑", img: "Lead_Broadsword.png", cat: "武器", rarity: "白色", damage: "11 近战伤害", source: "8 个铅锭在铁砧合成", desc: "铁宽刃剑的铅矿替代版，伤害略高。" },
    { name: "银宽刃剑", img: "Silver_Broadsword.png", cat: "武器", rarity: "白色", damage: "11 近战伤害", source: "8 个银锭在铁砧合成", desc: "中层矿石剑，过渡用。" },
    { name: "钨宽刃剑", img: "Tungsten_Broadsword.png", cat: "武器", rarity: "蓝色", damage: "12 近战伤害", source: "8 个钨锭在铁砧合成", desc: "银宽刃剑的钨矿版，打克眼前够用。" },
    { name: "金宽刃剑", img: "Gold_Broadsword.png", cat: "武器", rarity: "白色", damage: "13 近战伤害", source: "8 个金锭在铁砧合成", desc: "肉前高级矿剑之一。" },
    { name: "铂金宽刃剑", img: "Platinum_Broadsword.png", cat: "武器", rarity: "蓝色", damage: "15 近战伤害", source: "8 个铂金锭在铁砧合成", desc: "肉前矿剑天花板，开荒能用到骷髅王。" },
    { name: "魔光剑", img: "Light's_Bane.png", cat: "武器", rarity: "蓝色", damage: "17 近战伤害", source: "10 个魔金锭在恶魔祭坛合成（腐化世界）", desc: "攻速快，是合成永夜刃的四把剑之一。" },
    { name: "血腥屠刀", img: "Blood_Butcherer.png", cat: "武器", rarity: "蓝色", damage: "18 近战伤害", source: "10 个猩红锭在猩红祭坛合成（猩红世界）", desc: "魔光剑的猩红对应版，永夜刃材料之一。" },
    { name: "草薙", img: "Blade_of_Grass.png", cat: "武器", rarity: "绿色", damage: "28 近战伤害", source: "丛林孢子 + 毒刺 + 藤蔓在恶魔祭坛合成", desc: "击中概率中毒，挥砍范围大，永夜刃四剑之一。" },
    { name: "炽焰巨剑", img: "Fiery_Greatsword.png", cat: "武器", rarity: "橙色", damage: "36 近战伤害", source: "20 个狱石锭在铁砧合成", desc: "自带点燃，肉前伤害最高的宽刃剑，永夜刃四剑之一。" },
    { name: "星怒", img: "Starfury.png", cat: "武器", rarity: "蓝色", damage: "22 近战伤害", source: "空岛（浮空岛）宝箱中获得", desc: "挥砍召唤落星，站在平台上能隔空打怪，肉前神器。" },
    { name: "养蜂人", img: "Bee_Keeper.png", cat: "武器", rarity: "绿色", damage: "26 近战伤害", source: "蜂后掉落", desc: "击中放出蜜蜂群并造成困惑，贴脸输出很猛。" },
    { name: "附魔剑", img: "Enchanted_Sword.png", cat: "武器", rarity: "蓝色", damage: "24 近战伤害", source: "地下「附魔剑冢」地形中拔出（1/3 概率为假剑）", desc: "发射剑气，是合成泰拉刃路线的前置材料之一。" },
    { name: "相位军刀", img: "Red_Phasesaber.png", cat: "武器", rarity: "橙色", damage: "42 近战伤害", source: "相位之刃 + 水晶碎块在秘银/山铜砧合成", desc: "六种颜色属性相同，肉后初期不错的过渡剑。" },

    /* ---------- 武器（近战 · 肉后名剑） ---------- */
    { name: "冰雪镰刀", img: "Ice_Sickle.png", cat: "武器", rarity: "蓝色", damage: "42 近战伤害", source: "肉后雪地的装甲维京骷髅等怪物掉落", desc: "挥出旋转冰镰穿墙攻击，三王前刷怪利器。" },
    { name: "臭虎爪", img: "Fetid_Baghnakhs.png", cat: "武器", rarity: "粉色", damage: "50 近战伤害", source: "肉后猩红/腐化之地的猩红拳击手等怪物稀有掉落", desc: "全游戏最快攻速武器之一，站桩贴脸伤害爆炸。" },
    { name: "死神镰刀", img: "Death_Sickle.png", cat: "武器", rarity: "黄色", damage: "78 近战伤害", source: "日食事件中的死神掉落", desc: "放出穿墙镰刀，花前后万金油武器。" },
    { name: "种子弯刀", img: "Seedler.png", cat: "武器", rarity: "绿色", damage: "65 近战伤害", source: "世纪之花掉落", desc: "剑气分裂追踪，丛林地形里尤其好用。" },
    { name: "钥匙剑", img: "Keybrand.png", cat: "武器", rarity: "黄色", damage: "63 近战伤害", source: "花后地牢的暗影铠甲、地狱骷髅等稀有掉落", desc: "敌人血越少伤害越高，补刀神器。" },
    { name: "变态人的刀", img: "Psycho_Knife.png", cat: "武器", rarity: "黄色", damage: "70 近战伤害", source: "花后地牢的变态人稀有掉落", desc: "潜行时伤害与攻速翻倍，适合偷袭击杀。" },
    { name: "无头骑士剑", img: "The_Horseman's_Blade.png", cat: "武器", rarity: "黄色", damage: "75 近战伤害", source: "南瓜月事件的无头骑士掉落", desc: "剑气召唤南瓜头自动追击，清群怪一流。" },
    { name: "圣诞树剑", img: "Christmas_Tree_Sword.png", cat: "武器", rarity: "黄色", damage: "73 近战伤害", source: "霜月事件的常绿尖叫树掉落", desc: "射出挂饰弹幕，不同颜色效果不同，花后娱乐神器。" },
    { name: "波涌之刃", img: "Influx_Waver.png", cat: "武器", rarity: "黄色", damage: "90 近战伤害", source: "火星暴乱事件的火星飞船掉落", desc: "剑气在敌人之间来回弹射，单体持续输出强。" },
    { name: "星光", img: "Starlight.png", cat: "武器", rarity: "黄色", damage: "70 近战伤害", source: "光之女皇掉落", desc: "攻速极快、命中治疗少量生命，花后近战神器。" },
    { name: "彩虹猫之刃", img: "Meowmere.png", cat: "武器", rarity: "红色", damage: "200 近战伤害", source: "月亮领主掉落", desc: "射出弹跳彩虹猫头弹幕，毕业武器之一，也是天顶剑材料。" },
    { name: "狂星之怒", img: "Star_Wrath.png", cat: "武器", rarity: "红色", damage: "110 近战伤害", source: "月亮领主掉落", desc: "星怒的终极版，落星如雨，天顶剑材料之一。" },

    /* ---------- 武器（近战 · 回旋镖/链枷/长矛/悠悠球） ---------- */
    { name: "木质回旋镖", img: "Wooden_Boomerang.png", cat: "武器", rarity: "白色", damage: "8 近战伤害", source: "地表木箱、罐子中获得", desc: "开局远程牵制武器，没有附魔回旋镖前凑合用。" },
    { name: "烈焰回旋镖", img: "Flamarang.png", cat: "武器", rarity: "橙色", damage: "32 近战伤害", source: "附魔回旋镖 + 10 个狱石锭在恶魔祭坛合成", desc: "火焰附魔版回旋镖，命中点燃，肉前风筝神器。" },
    { name: "荆棘旋刃", img: "Thorn_Chakram.png", cat: "武器", rarity: "绿色", damage: "25 近战伤害", source: "丛林孢子 + 毒刺在恶魔祭坛合成", desc: "可连续投掷且能弹跳，毒伤磨血很稳。" },
    { name: "香蕉回旋镖", img: "Bananarang.png", cat: "武器", rarity: "黄色", damage: "40 近战伤害", source: "血月事件的小丑掉落（最多叠 10 个）", desc: "持有越多可同时扔出越多，弹幕覆盖全场。" },
    { name: "光辉飞盘", img: "Light_Disc.png", cat: "武器", rarity: "黄色", damage: "55 近战伤害", source: "神圣锭 + 光明/暗影/力量之魂合成（最多 5 个）", desc: "撞到墙反弹、穿墙回收，可连发多个。" },
    { name: "圣骑士锤", img: "Paladin's_Hammer.png", cat: "武器", rarity: "黄色", damage: "90 近战伤害", source: "花后地牢圣骑士稀有掉落", desc: "高速回旋锤自动飞回，直线伤害极高。" },
    { name: "链刀", img: "Chain_Knife.png", cat: "武器", rarity: "粉色", damage: "37 近战伤害", source: "洞穴层普通怪物稀有掉落", desc: "射程固定但攻速极快，三王前意外地好用。" },
    { name: "蓝月", img: "Blue_Moon.png", cat: "武器", rarity: "蓝色", damage: "27 近战伤害", source: "地牢金锁盒内获得", desc: "链枷类武器，转圈时能挡弹幕、清贴身小怪。" },
    { name: "阳炎之怒", img: "Sunfury.png", cat: "武器", rarity: "橙色", damage: "40 近战伤害", source: "地狱暗影箱、地牢金锁盒", desc: "肉前最强链枷，命中点燃并带光效，打肉山顺手。" },
    { name: "鱼叉枪", img: "Harpoon.png", cat: "武器", rarity: "橙色", damage: "25 近战伤害", source: "击败血肉墙后，地牢水中的怪物或锁盒获得", desc: "鱼叉自动收回，攻击距离远，肉后初期过渡。" },
    { name: "长矛", img: "Spear.png", cat: "武器", rarity: "白色", damage: "10 近战伤害", source: "铁锭在铁砧合成", desc: "基础戳刺武器，打世吞这类长虫有距离优势。" },
    { name: "三叉戟", img: "Trident.png", cat: "武器", rarity: "白色", damage: "10 近战伤害", source: "海洋/水中宝箱开出", desc: "长矛同款手感，海边探索时顺手捡。" },
    { name: "风暴长矛", img: "Storm_Spear.png", cat: "武器", rarity: "蓝色", damage: "17 近战伤害", source: "地下宝箱、金锁盒中获得", desc: "戳刺时射出闪电弹，远近结合。" },
    { name: "暗黑长戟", img: "Dark_Lance.png", cat: "武器", rarity: "橙色", damage: "29 近战伤害", source: "地狱暗影箱中获得", desc: "肉前最强长矛，长度和攻速都好。" },
    { name: "永恒之枪", img: "Gungnir.png", cat: "武器", rarity: "粉色", damage: "61 近战伤害", source: "12 个神圣锭在秘银/山铜砧合成", desc: "三王后的长柄武器，射程远、攻速快。" },
    { name: "叶绿戟", img: "Chlorophyte_Partisan.png", cat: "武器", rarity: "绿色", damage: "44 近战伤害", source: "叶绿锭在秘银/山铜砧合成", desc: "戳刺附带叶绿孢子云，花前过渡不错。" },
    { name: "蘑菇矛", img: "Mushroom_Spear.png", cat: "武器", rarity: "粉色", damage: "60 近战伤害", source: "花后向蘑菇人购买", desc: "戳击处喷出蘑菇孢子持续伤害，打大体型 BOSS 强。" },
    { name: "北极", img: "North_Pole.png", cat: "武器", rarity: "黄色", damage: "73 近战伤害", source: "霜月事件的冰雪女王掉落", desc: "矛尖撒落雪花弹幕，清怪与打 BOSS 双修。" },
    { name: "木悠悠球", img: "Wood_Yoyo.png", cat: "武器", rarity: "白色", damage: "7 近战伤害", source: "木材 + 蛛网在工作台合成", desc: "悠悠球入门玩具，丝线能延长停留时间。" },
    { name: "林境", img: "Amazon.png", cat: "武器", rarity: "绿色", damage: "20 近战伤害", source: "红木 + 毒刺 + 丛林孢子 + 藤蔓在铁砧合成", desc: "肉前就能做的强力悠悠球，丛林一霸。" },
    { name: "克拉肯悠悠球", img: "Kraken.png", cat: "武器", rarity: "黄色", damage: "95 近战伤害", source: "花后地牢的骷髅怪物稀有掉落", desc: "花后高伤悠悠球，手感扎实。" },
    { name: "泰拉悠悠球", img: "Terrarian.png", cat: "武器", rarity: "红色", damage: "190 近战伤害", source: "月亮领主掉落", desc: "悠悠球终极形态，放出追踪残影，毕业近战武器。" },

    /* ---------- 武器（远程 · 弓与枪） ---------- */
    { name: "铜弓", img: "Copper_Bow.png", cat: "武器", rarity: "白色", damage: "6 远程伤害", source: "铜锭在铁砧合成", desc: "最基础的弓，捡到火焰箭前先凑合用。" },
    { name: "铁弓", img: "Iron_Bow.png", cat: "武器", rarity: "白色", damage: "10 远程伤害", source: "铁锭在铁砧合成", desc: "前期最容易量产的远程武器。" },
    { name: "金弓", img: "Gold_Bow.png", cat: "武器", rarity: "白色", damage: "14 远程伤害", source: "金锭在铁砧合成", desc: "肉前高级矿弓，打克眼/世吞走位输出。" },
    { name: "熔火之怒", img: "Molten_Fury.png", cat: "武器", rarity: "橙色", damage: "27 远程伤害", source: "狱石锭在铁砧合成", desc: "把木箭自动转成火箭，肉前最强弓，打肉山标配。" },
    { name: "地狱之翼弓", img: "Hellwing_Bow.png", cat: "武器", rarity: "橙色", damage: "22 远程伤害", source: "地狱暗影箱中获得", desc: "木箭变可穿透的地狱蝙蝠箭，长廊道作战极强。" },
    { name: "蜜蜂膝弓", img: "The_Bee's_Knees.png", cat: "武器", rarity: "绿色", damage: "26 远程伤害", source: "蜂后掉落", desc: "一箭炸出蜂群箭矢，群伤和打长虫都好用。" },
    { name: "代达罗斯风暴弓", img: "Daedalus_Stormbow.png", cat: "武器", rarity: "粉色", damage: "32 远程伤害", source: "神圣宝箱怪（光明之魂召唤）掉落", desc: "从天上连射箭雨，三王逃课神器，配神圣箭毁天灭地。" },
    { name: "暗影焰弓", img: "Shadowflame_Bow.png", cat: "武器", rarity: "粉色", damage: "36 远程伤害", source: "哥布林军队的哥布林召唤师掉落", desc: "射出暗影焰箭，灼烧持续掉血。" },
    { name: "叶绿连弩", img: "Chlorophyte_Shotbow.png", cat: "武器", rarity: "绿色", damage: "34 远程伤害", source: "叶绿锭在秘银/山铜砧合成", desc: "一次射 4 支箭，花前花后都能担当主力。" },
    { name: "脉冲弓", img: "Pulse_Bow.png", cat: "武器", rarity: "黄色", damage: "65 远程伤害", source: "花后向旅行商人购买（45 金币）", desc: "激光箭在墙间反弹，走廊和封闭空间之王。" },
    { name: "空中灾祸", img: "Aerial_Bane.png", cat: "武器", rarity: "黄色", damage: "50 远程伤害", source: "撒旦军队事件的双足翼龙掉落", desc: "箭对飞行敌人造成额外伤害，打龙类 BOSS 特化。" },
    { name: "幻象弓", img: "Phantasm.png", cat: "武器", rarity: "红色", damage: "50 远程伤害", source: "星旋柱碎片 + 夜明锭合成", desc: "越射越快的连射弓，射手毕业武器之一。" },
    { name: "燧发枪", img: "Flintlock_Pistol.png", cat: "武器", rarity: "白色", damage: "10 远程伤害", source: "军火商 NPC 处购买", desc: "早期就能买到的枪，子弹够用就行。" },
    { name: "滑膛枪", img: "Musket.png", cat: "武器", rarity: "蓝色", damage: "22 远程伤害", source: "砸毁暗影珠获得（腐化世界），猩红世界对应为夺命枪", desc: "拿到后军火商入住，肉前单发伤害可观。" },
    { name: "夺命枪", img: "The_Undertaker.png", cat: "武器", rarity: "蓝色", damage: "15 远程伤害", source: "砸毁猩红之心获得（猩红世界）", desc: "滑膛枪的猩红对应版，射速更快。" },
    { name: "三发猎枪", img: "Boomstick.png", cat: "武器", rarity: "蓝色", damage: "15 远程伤害", source: "丛林常春藤箱中获得", desc: "一次射出多发霰弹，贴脸伤害高，是玛瑙爆破枪材料。" },
    { name: "手枪", img: "Handgun.png", cat: "武器", rarity: "蓝色", damage: "17 远程伤害", source: "地牢金锁盒中获得", desc: "可升级为凤凰爆破枪，前期别卖。" },
    { name: "凤凰爆破枪", img: "Phoenix_Blaster.png", cat: "武器", rarity: "橙色", damage: "31 远程伤害", source: "手枪 + 狱石锭在铁砧合成", desc: "肉前最强手枪，射速快，打肉山好用。" },
    { name: "鳄鱼机关枪", img: "Gatligator.png", cat: "武器", rarity: "橙色", damage: "9 远程伤害", source: "困难模式后向旅行商人购买（35 金币）", desc: "迷你鲨的兄弟，弹道略散，是巨兽鲨材料之一。" },
    { name: "时钟式突击步枪", img: "Clockwork_Assault_Rifle.png", cat: "武器", rarity: "粉色", damage: "19 远程伤害", source: "血肉墙掉落（专家宝藏袋也开）", desc: "三连发点射，三发只耗一颗子弹，肉后初期神枪。" },
    { name: "霰弹枪", img: "Shotgun.png", cat: "武器", rarity: "粉色", damage: "24 远程伤害", source: "世纪之花后向军火商购买（25 金币）", desc: "贴脸爆发高，可升级玛瑙爆破枪。" },
    { name: "玛瑙爆破枪", img: "Onyx_Blaster.png", cat: "武器", rarity: "粉色", damage: "24 远程伤害", source: "霰弹枪 + 暗黑碎片 + 暗影之魂在秘银/山铜砧合成", desc: "主弹命中后爆炸黑玛瑙，花前花后主力枪。" },
    { name: "乌兹冲锋枪", img: "Uzi.png", cat: "武器", rarity: "黄色", damage: "30 远程伤害", source: "丛林的愤怒捕手稀有掉落", desc: "高速连射，子弹转为高速高伤弹，花后强力枪械。" },
    { name: "战术霰弹枪", img: "Tactical_Shotgun.png", cat: "武器", rarity: "黄色", damage: "29 远程伤害", source: "花后地牢特种骷髅掉落", desc: "一次 6 发霰弹，贴脸爆发顶级。" },
    { name: "狙击步枪", img: "Sniper_Rifle.png", cat: "武器", rarity: "黄色", damage: "185 远程伤害", source: "花后地牢狙击骷髅稀有掉落", desc: "单发伤害全枪械最高，开镜增伤，潜行流绝配。" },
    { name: "金星马格南", img: "Venus_Magnum.png", cat: "武器", rarity: "黄色", damage: "36 远程伤害", source: "世纪之花掉落", desc: "高射速高伤手枪，手感顺滑，花后常用副武器。" },
    { name: "链式机枪", img: "Chain_Gun.png", cat: "武器", rarity: "黄色", damage: "31 远程伤害", source: "霜月事件圣诞坦克掉落", desc: "全游戏最快射速之一，按住不松手就是火力网。" },
    { name: "外星霰弹枪", img: "Xenopopper.png", cat: "武器", rarity: "黄色", damage: "16 远程伤害", source: "火星暴乱事件掉落", desc: "水泡先散开再聚合，聚合点伤害极高。" },
    { name: "硬币枪", img: "Coin_Gun.png", cat: "武器", rarity: "红色", damage: "随硬币变化", source: "海盗入侵敌人极稀有掉落，掉率仅 0.025%", desc: "用铜币/银币/金币/铂金币当弹药，铂金币伤害毁天灭地。" },
    { name: "S.D.M.G.", img: "S.D.M.G..png", cat: "武器", rarity: "红色", damage: "85 远程伤害", source: "月亮领主掉落", desc: "空间海豚机枪，50% 概率不耗弹药，射手毕业枪。" },
    { name: "飞镖步枪", img: "Dart_Rifle.png", cat: "武器", rarity: "橙色", damage: "28 远程伤害", source: "腐化宝箱怪（腐香囊召唤）掉落", desc: "发射诅咒/灵液飞镖，远程上 debuff 的利器。" },
    { name: "飞镖手枪", img: "Dart_Pistol.png", cat: "武器", rarity: "橙色", damage: "21 远程伤害", source: "猩红宝箱怪掉落", desc: "飞镖步枪的猩红版，攻速更快。" },
    { name: "钉头枪", img: "Stynger.png", cat: "武器", rarity: "黄色", damage: "33 远程伤害", source: "石巨人掉落", desc: "射出钉刺爆成持续伤害的碎片，打大体型 BOSS 强。" },
    { name: "榴弹发射器", img: "Grenade_Launcher.png", cat: "武器", rarity: "粉色", damage: "60 远程伤害", source: "血肉墙掉落", desc: "发射榴弹，肉后初期轰群怪很爽，注意别炸到自己。" },
    { name: "火箭发射器", img: "Rocket_Launcher.png", cat: "武器", rarity: "黄色", damage: "50 远程伤害", source: "世纪之花后向骷髅商人购买", desc: "标准重火力，4 号火箭能破坏物块，挖矿也能客串。" },
    { name: "感应雷发射器", img: "Proximity_Mine_Launcher.png", cat: "武器", rarity: "黄色", damage: "90 远程伤害", source: "世纪之花后向骷髅商人购买", desc: "地雷附着在地面，BOSS 踩上去瞬间爆炸。" },
    { name: "雪人炮", img: "Snowman_Cannon.png", cat: "武器", rarity: "黄色", damage: "67 远程伤害", source: "霜月事件雪人怪掉落", desc: "射出会自己跑的雪人，追踪爆炸，萌且强。" },
    { name: "南瓜灯发射器", img: "Jack_'O_Lantern_Launcher.png", cat: "武器", rarity: "黄色", damage: "90 远程伤害", source: "南瓜月事件的南瓜王掉落", desc: "发射追踪南瓜头，命中率高。" },
    { name: "糖豆机枪", img: "Candy_Corn_Rifle.png", cat: "武器", rarity: "黄色", damage: "14 远程伤害", source: "南瓜月事件掉落", desc: "糖豆会穿透并在敌人间反弹，清群怪效率极高。" },
    { name: "庆典 Mk2", img: "Celebration_Mk2.png", cat: "武器", rarity: "红色", damage: "65 远程伤害", source: "月亮领主掉落", desc: "双管烟花火箭炮，不同烟花附带不同效果，毕业重火力。" },
    { name: "吹管", img: "Blowpipe.png", cat: "武器", rarity: "白色", damage: "9 远程伤害", source: "地表宝箱中获得", desc: "种子当弹药，还能自动收集种子，新手零成本远程。" },
    { name: "吹箭筒", img: "Blowgun.png", cat: "武器", rarity: "绿色", damage: "20 远程伤害", source: "常春藤箱中获得", desc: "射程极远，配毒镖/诅咒镖上 debuff 很好用。" },

    /* ---------- 武器（魔法） ---------- */
    { name: "火花魔棒", img: "Wand_of_Sparking.png", cat: "武器", rarity: "白色", damage: "5 魔法伤害", source: "出生点附近宝箱、罐子获得", desc: "无消耗发射小火花，每个法师的第一把武器。" },
    { name: "太空枪", img: "Space_Gun.png", cat: "武器", rarity: "绿色", damage: "17 魔法伤害", source: "陨石锭在铁砧合成", desc: "穿陨石套时不耗魔力，肉前法师站桩神枪。" },
    { name: "魔刺", img: "Vilethorn.png", cat: "武器", rarity: "蓝色", damage: "10 魔法伤害", source: "砸毁暗影珠获得（腐化世界）", desc: "荆棘柱持续穿透攻击，打长虫类 BOSS 神教武器。" },
    { name: "猩红魔杖", img: "Crimson_Rod.png", cat: "武器", rarity: "蓝色", damage: "12 魔法伤害", source: "砸毁猩红之心获得（猩红世界）", desc: "放一朵雨云持续下雨，挂机磨血神器。" },
    { name: "蜂枪", img: "Bee_Gun.png", cat: "武器", rarity: "绿色", damage: "9 魔法伤害", source: "蜂后掉落", desc: "放出追踪蜜蜂，狭小空间和打蜂后自己都很好用。" },
    { name: "烈焰火鞭", img: "Flower_of_Fire.png", cat: "武器", rarity: "蓝色", damage: "28 魔法伤害", source: "地狱暗影箱中获得", desc: "弹跳火球可连发，黑暗中还能照明。" },
    { name: "魔法导弹", img: "Magic_Missile.png", cat: "武器", rarity: "蓝色", damage: "27 魔法伤害", source: "地牢金锁盒、地下金箱中获得", desc: "导弹可用光标操控轨迹，是合成魔晶风暴的材料之一。" },
    { name: "魔晶风暴", img: "Crystal_Storm.png", cat: "武器", rarity: "粉色", damage: "29 魔法伤害", source: "水晶碎块 + 光明之魂 + 魔法书在秘银/山铜砧合成", desc: "高速倾泻水晶碎片，贴脸和打长虫都强。" },
    { name: "诅咒焰", img: "Cursed_Flames.png", cat: "武器", rarity: "粉色", damage: "24 魔法伤害", source: "诅咒火焰 + 暗影之魂 + 魔法书合成（腐化世界）", desc: "绿色火球反弹并持续灼烧，三王前法师主力。" },
    { name: "黄金雨", img: "Golden_Shower.png", cat: "武器", rarity: "粉色", damage: "21 魔法伤害", source: "灵液 + 暗影之魂 + 魔法书合成（猩红世界）", desc: "给敌人上灵液减防 20 点，团队增伤神技。" },
    { name: "裂天剑", img: "Sky_Fracture.png", cat: "武器", rarity: "粉色", damage: "42 魔法伤害", source: "魔光剑/血腥屠刀 + 水晶碎块 + 光明之魂合成", desc: "名字带剑其实是魔导具，连落三把飞剑，简单粗暴。" },
    { name: "流星法杖", img: "Meteor_Staff.png", cat: "武器", rarity: "粉色", damage: "28 魔法伤害", source: "陨石锭 + 光明之魂在秘银/山铜砧合成", desc: "砸下爆炸陨石，范围伤害不错。" },
    { name: "彩虹魔杖", img: "Rainbow_Rod.png", cat: "武器", rarity: "粉色", damage: "40 魔法伤害", source: "水晶碎块 + 光明之魂 + 独角兽角等合成", desc: "光标操控彩虹轨迹，探图和输出兼顾。" },
    { name: "魔法竖琴", img: "Magical_Harp.png", cat: "武器", rarity: "粉色", damage: "32 魔法伤害", source: "魔法书 + 水晶碎块 + 视域/力量/恐惧之魂合成", desc: "音波可穿透弹射，三王后持续输出稳定。" },
    { name: "雨云魔杖", img: "Nimbus_Rod.png", cat: "武器", rarity: "粉色", damage: "29 魔法伤害", source: "雨天的愤怒雨云掉落", desc: "放两朵雨云挂机下雨，打站桩 BOSS 白嫖伤害。" },
    { name: "暗影焰妖娃", img: "Shadowflame_Hex_Doll.png", cat: "武器", rarity: "粉色", damage: "32 魔法伤害", source: "哥布林召唤师掉落", desc: "丢出暗影焰球，灼烧 + 穿透，三王前很实用。" },
    { name: "彩虹枪", img: "Rainbow_Gun.png", cat: "武器", rarity: "黄色", damage: "36 魔法伤害", source: "花后地牢神圣宝箱开出（需神圣钥匙）", desc: "架一道彩虹持续伤害经过的敌人，守点神技。" },
    { name: "爆裂荆棘", img: "Nettle_Burst.png", cat: "武器", rarity: "黄色", damage: "52 魔法伤害", source: "世纪之花掉落（约 1/7）", desc: "长荆棘多次穿透，长廊道清怪之王。" },
    { name: "毒液法杖", img: "Venom_Staff.png", cat: "武器", rarity: "黄色", damage: "47 魔法伤害", source: "剧毒法杖（蜘蛛洞黑隐士掉落）+ 叶绿锭在秘银/山铜砧合成", desc: "剧毒法杖的升级版，命中上毒液 debuff，持续输出兼辅助。" },
    { name: "毒液烧瓶", img: "Toxic_Flask.png", cat: "武器", rarity: "黄色", damage: "40 魔法伤害", source: "世纪之花后，地下丛林的苍蝇人博士稀有掉落", desc: "投掷毒瓶造成范围毒云，群战利器。" },
    { name: "魔法匕首", img: "Magic_Dagger.png", cat: "武器", rarity: "粉色", damage: "24 魔法伤害", source: "魔法导弹 + 水晶碎块 + 光明之魂在秘银/山铜砧合成", desc: "高速可控的魔法匕首，射速快、耗蓝低。" },
    { name: "蝙蝠法杖", img: "Bat_Scepter.png", cat: "武器", rarity: "黄色", damage: "42 魔法伤害", source: "日食事件的吸血鬼稀有掉落", desc: "召唤追踪蝙蝠，会回弹二次命中，贴脸伤害翻倍。" },
    { name: "暴雪法杖", img: "Blizzard_Staff.png", cat: "武器", rarity: "黄色", damage: "58 魔法伤害", source: "霜月事件的冰雪女王掉落", desc: "头顶连降冰锥，站桩清屏一流。" },
    { name: "泡泡枪", img: "Bubble_Gun.png", cat: "武器", rarity: "黄色", damage: "28 魔法伤害", source: "猪龙鱼公爵掉落", desc: "短程高速泡泡，贴脸秒伤全法系顶级。" },
    { name: "利刃台风", img: "Razorblade_Typhoon.png", cat: "武器", rarity: "黄色", damage: "50 魔法伤害", source: "猪龙鱼公爵掉落", desc: "水刃自动追踪并穿透多敌，花后法师挂机神器。" },
    { name: "热射线枪", img: "Heat_Ray.png", cat: "武器", rarity: "黄色", damage: "46 魔法伤害", source: "石巨人掉落", desc: "持续聚焦光束，打大体型 BOSS 伤害拉满。" },
    { name: "充能爆破炮", img: "Charged_Blaster_Cannon.png", cat: "武器", rarity: "黄色", damage: "66 魔法伤害", source: "石巨人掉落", desc: "蓄满后一发大范围电球，蓄力越久伤害越高。" },
    { name: "大地法杖", img: "Staff_of_Earth.png", cat: "武器", rarity: "黄色", damage: "80 魔法伤害", source: "石巨人掉落", desc: "操控巨石砸向敌人，伤害高但弹道慢。" },
    { name: "激光机枪", img: "Laser_Machinegun.png", cat: "武器", rarity: "黄色", damage: "37 魔法伤害", source: "火星暴乱事件掉落", desc: "预热后激光连射，火力持续且精准。" },
    { name: "月亮传送门法杖", img: "Lunar_Portal_Staff.png", cat: "武器", rarity: "紫色", damage: "50 魔法伤害", source: "月亮事件击杀天界柱后获得", desc: "放置传送门自动扫射，打月总前的强力炮台。" },
    { name: "星云烈焰", img: "Nebula_Blaze.png", cat: "武器", rarity: "红色", damage: "130 魔法伤害", source: "星云柱碎片 + 夜明锭合成", desc: "橙火 + 追踪蓝火双模式，法师毕业武器之一。" },
    { name: "星云奥秘", img: "Nebula_Arcanum.png", cat: "武器", rarity: "红色", damage: "70 魔法伤害", source: "星云柱碎片 + 夜明锭合成", desc: "越变越大的追踪法球，爆炸清屏，毕业法系武器。" },

    /* ---------- 武器（召唤与鞭子） ---------- */
    { name: "史莱姆法杖", img: "Slime_Staff.png", cat: "武器", rarity: "蓝色", damage: "8 召唤伤害", source: "绝大多数史莱姆极稀有掉落（约 1/10000）", desc: "召唤宝宝史莱姆，欧皇证明，也是宠物收藏家的怨念。" },
    { name: "阿比盖尔之花", img: "Abigail's_Flower.png", cat: "武器", rarity: "蓝色", damage: "10 召唤伤害", source: "墓地生态（墓碑聚集处）自然生长", desc: "1.4 新手召唤利器，墓碑越多伤害越高。" },
    { name: "黄蜂法杖", img: "Hornet_Staff.png", cat: "武器", rarity: "绿色", damage: "12 召唤伤害", source: "14 个蜂蜡在铁砧合成", desc: "黄蜂远程射击还带中毒，召唤师肉前过渡主力。" },
    { name: "吸血鬼青蛙法杖", img: "Vampire_Frog_Staff.png", cat: "武器", rarity: "绿色", damage: "11 召唤伤害", source: "钓鱼怪物僵尸人鱼、血腥食人鱼掉落", desc: "青蛙吐舌头舔击，攻速快，肉前伤害不低。" },
    { name: "魔眼法杖", img: "Optic_Staff.png", cat: "武器", rarity: "粉色", damage: "30 召唤伤害", source: "黑色晶状体 + 晶状体 + 神圣锭 + 视域/恐惧/力量之魂合成", desc: "召唤小双子魔眼一远一近，三王后召唤师牌面。" },
    { name: "蜘蛛女王法杖", img: "Spider_Staff.png", cat: "武器", rarity: "黄色", damage: "26 召唤伤害", source: "蜘蛛牙在秘银/山铜砧合成", desc: "蜘蛛女王吐小蜘蛛，攻防一体，花前召唤主力。" },
    { name: "海盗法杖", img: "Pirate_Staff.png", cat: "武器", rarity: "黄色", damage: "40 召唤伤害", source: "海盗入侵的海盗船长、荷兰飞船掉落", desc: "召唤海盗近战砍杀，单体伤害不错。" },
    { name: "致命球法杖", img: "Deadly_Sphere_Staff.png", cat: "武器", rarity: "黄色", damage: "50 召唤伤害", source: "日食事件的致命球掉落", desc: "高速冲撞敌人，攻速极快，花后召唤师标配。" },
    { name: "乌鸦法杖", img: "Raven_Staff.png", cat: "武器", rarity: "黄色", damage: "55 召唤伤害", source: "南瓜月事件南瓜王掉落", desc: "乌鸦群俯冲，贴脸集中伤害很高。" },
    { name: "暴风雨法杖", img: "Tempest_Staff.png", cat: "武器", rarity: "黄色", damage: "38 召唤伤害", source: "猪龙鱼公爵掉落", desc: "召唤小鲨鱼龙卷风远程攻击，自动追踪。" },
    { name: "外星法杖", img: "Xeno_Staff.png", cat: "武器", rarity: "黄色", damage: "36 召唤伤害", source: "火星暴乱事件掉落", desc: "UFO 瞬间传送至敌人脸上输出，命中率第一。" },
    { name: "星尘之龙法杖", img: "Stardust_Dragon_Staff.png", cat: "武器", rarity: "红色", damage: "50 召唤伤害", source: "星尘柱碎片 + 夜明锭合成", desc: "减少仆从数量换一条贯穿全屏的长龙，单体毕业召唤。" },
    { name: "星尘细胞法杖", img: "Stardust_Cell_Staff.png", cat: "武器", rarity: "红色", damage: "60 召唤伤害", source: "星尘柱碎片 + 夜明锭合成", desc: "细胞仆从贴脸持续输出还留细胞 debuff，群战毕业。" },
    { name: "皮革鞭", img: "Leather_Whip.png", cat: "武器", rarity: "白色", damage: "8 召唤伤害", source: "动物学家 NPC 处购买（需填好 15% 图鉴）", desc: "新手第一把鞭，被标记的敌人受仆从集火增伤。" },
    { name: "火鞭", img: "Firecracker.png", cat: "武器", rarity: "粉色", damage: "40 召唤伤害", source: "血肉墙掉落", desc: "仆从攻击被鞭中的敌人会爆炸，群伤召唤流核心。" },
    { name: "冷鞭", img: "Cool_Whip.png", cat: "武器", rarity: "粉色", damage: "50 召唤伤害", source: "光明之魂 + 暗影之魂 + 冰火把在秘银/山铜砧合成", desc: "命中产生雪花追击，三王后召唤师顺手武器。" },
    { name: "杜兰达尔", img: "Durendal.png", cat: "武器", rarity: "绿色", damage: "55 召唤伤害", source: "12 个神圣锭在秘银/山铜砧合成", desc: "挥鞭给全队加攻速，召唤流增益鞭。" },
    { name: "暗黑收割", img: "Dark_Harvest.png", cat: "武器", rarity: "黄色", damage: "80 召唤伤害", source: "南瓜月事件南瓜王掉落", desc: "命中释放暗黑能量，仆从集火爆发极强。" },
    { name: "晨星", img: "Morning_Star.png", cat: "武器", rarity: "黄色", damage: "180 召唤伤害", source: "花后地牢的蓝装甲骷髅掉落", desc: "单发标记增伤最高的鞭，BOSS 战一鞭定音。" },
    { name: "万花筒", img: "Kaleidoscope.png", cat: "武器", rarity: "黄色", damage: "165 召唤伤害", source: "光之女皇掉落", desc: "晨星的高攻速版，召唤师毕业鞭。" },
    { name: "闪电光环法杖", img: "Lightning_Aura_Staff.png", cat: "武器", rarity: "黄色", damage: "115 召唤伤害", source: "酒馆老板处用护卫奖章兑换（最高级）", desc: "放置固定闪电圈，塔防流/召唤师打 BOSS 炮台。" },
    { name: "弩车法杖", img: "Ballista_Staff.png", cat: "武器", rarity: "黄色", damage: "130 召唤伤害", source: "酒馆老板处用护卫奖章兑换（最高级）", desc: "放置巨型弩车哨兵，单发高伤，适合守点。" },

    /* ---------- 盔甲（困难模式前） ---------- */
    { name: "仙人掌套", img: "Cactus_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "沙漠采集仙人掌在工作台合成", desc: "开局过渡套，凑齐三件还能略微击退怪物，挖沙时顺手做。" },
    { name: "铜套", img: "Copper_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "铜矿熔炼铜锭后合成", desc: "最低门槛金属套，纯新手期使用，挖到铁/锡就换。" },
    { name: "锡套", img: "Tin_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "锡矿合成（铜的世界替代矿）", desc: "属性略高于铜套，属于开局过渡选择。" },
    { name: "铁套", img: "Iron_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "铁矿合成", desc: "前期最实用的基础金属套，打克苏鲁之眼前推荐凑齐。" },
    { name: "铅套", img: "Lead_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "铅矿合成（铁的世界替代矿）", desc: "铁套的平替，防御相同但套装加成略有差异。" },
    { name: "银套", img: "Silver_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "银矿合成", desc: "中层矿石套，挖矿路过顺手收集即可，不必强求。" },
    { name: "钨套", img: "Tungsten_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "钨矿合成（银的世界替代矿）", desc: "比银套稍硬，是肉前早期相当稳的一套防具。" },
    { name: "金套", img: "Gold_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "金矿合成", desc: "困难模式前顶级矿套之一，外观亮眼，打世界吞噬怪/克脑很稳。" },
    { name: "铂金套", img: "Platinum_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "铂金矿合成（金的世界替代矿）", desc: "与金套同级，部分世界里它就是肉前最硬的基础防具。" },
    { name: "丛林套", img: "Jungle_Hat.png", cat: "盔甲", rarity: "绿色", damage: "", source: "丛林孢子 + 毒刺 + 藤蔓合成", desc: "法师肉前神装，大幅减少魔力消耗、提升魔法暴击，太空枪配它近乎无限开火。" },
    { name: "化石套", img: "Fossil_Helmet.png", cat: "盔甲", rarity: "蓝色", damage: "", source: "沙漠化石经提炼机产出", desc: "远程向套装，提升投掷与远程暴击，搭配飞刀/骨头标枪开荒很舒服。" },
    { name: "陨石套", img: "Meteor_Helmet.png", cat: "盔甲", rarity: "蓝色", damage: "", source: "击碎暗影珠/猩红之心后陨石坠落，陨石锭合成", desc: "套装效果让太空枪不耗魔力，肉前法师站桩输出组合。" },
    { name: "暗影套", img: "Shadow_Helmet.png", cat: "盔甲", rarity: "蓝色", damage: "", source: "魔金锭 + 暗影鳞片合成（腐化世界）", desc: "近战速度与移动速度加成，穿着跑图打长虫都很灵活。" },
    { name: "猩红套", img: "Crimson_Helmet.png", cat: "盔甲", rarity: "蓝色", damage: "", source: "猩红锭 + 组织样本合成（猩红世界）", desc: "暗影套的猩红对应版，提供生命回复增益，生存能力更强。" },
    { name: "熔岩套", img: "Molten_Helmet.png", cat: "盔甲", rarity: "橙色", damage: "", source: "狱石锭 + 黑曜石在地狱熔炉合成", desc: "肉前防御天花板（整套 25 防御），近战伤害加成，打完肉山前必做。" },
    { name: "死灵套", img: "Necro_Helmet.png", cat: "盔甲", rarity: "粉色", damage: "", source: "蛛网 + 骨头在工作台合成", desc: "射手肉前神装，20% 概率不消耗弹药，刷骨头时顺便凑齐。" },
    { name: "蜜蜂套", img: "Bee_Headgear.png", cat: "盔甲", rarity: "绿色", damage: "", source: "蜂后掉落的蜂蜡合成", desc: "召唤师肉前核心套，增加召唤栏位并强化仆从，打肉山全靠小蜜蜂。" },

    /* ---------- 盔甲（困难模式） ---------- */
    { name: "钴蓝套", img: "Cobalt_Helmet.png", cat: "盔甲", rarity: "蓝色", damage: "", source: "肉后砸祭坛出新矿，钴蓝锭合成", desc: "困难模式入门套，三种头盔分别对应近战/远程/法师定位。" },
    { name: "钯金套", img: "Palladium_Helmet.png", cat: "盔甲", rarity: "橙色", damage: "", source: "钯金锭合成（钴蓝的替代矿）", desc: "击中敌人后快速回血，站撸恢复能力极强，容错率超高。" },
    { name: "秘银套", img: "Mythril_Helmet.png", cat: "盔甲", rarity: "绿色", damage: "", source: "秘银锭合成", desc: "第二档困难矿套，属性均衡，秘银砧本身就是大量合成的必备站。" },
    { name: "山铜套", img: "Orichalcum_Helmet.png", cat: "盔甲", rarity: "粉色", damage: "", source: "山铜锭合成（秘银的替代矿）", desc: "攻击会召唤花瓣爆发，清怪效率高，花前过渡很舒服。" },
    { name: "精金套", img: "Adamantite_Helmet.png", cat: "盔甲", rarity: "粉色", damage: "", source: "精金锭在精金熔炉旁合成", desc: "三矿最高档之一，套装加成按头盔定位全面强化输出。" },
    { name: "钛金套", img: "Titanium_Helmet.png", cat: "盔甲", rarity: "粉色", damage: "", source: "钛金锭在钛金熔炉旁合成（精金的替代矿）", desc: "攻击后获得影分身闪避，等于周期性无敌帧，打机械王容错神装。" },
    { name: "神圣套", img: "Hallowed_Helmet.png", cat: "盔甲", rarity: "黄色", damage: "", source: "机械三王掉落的神圣锭合成", desc: "三王后通用毕业过渡套，冲刺无敌帧 + 全职业加成，强烈推荐人手一套。" },
    { name: "禁戒套", img: "Forbidden_Mask.png", cat: "盔甲", rarity: "粉色", damage: "", source: "沙尘暴事件掉落的禁戒碎片 + 精金/钛金锭合成", desc: "法师/召唤双修套装，可召唤沙漠精魂助战，花前稀有但好用。" },
    { name: "冰霜套", img: "Frost_Helmet.png", cat: "盔甲", rarity: "粉色", damage: "", source: "神圣锭 + 冰霜核（冰雪雨事件）合成", desc: "近战/远程双修，攻击附带霜焰灼烧，混合流派首选。" },
    { name: "蜘蛛套", img: "Spider_Mask.png", cat: "盔甲", rarity: "粉色", damage: "", source: "蛛丝 + 蜘蛛牙（肉后蜘蛛洞）合成", desc: "召唤师花前核心套，黑寡妇蜘蛛又肉又疼，召唤流开荒利器。" },
    { name: "叶绿套", img: "Chlorophyte_Helmet.png", cat: "盔甲", rarity: "绿色", damage: "", source: "叶绿锭合成（头盔分四种定位）", desc: "丛林中期万能套，射手头会召唤水晶自动助战，泛用性极高。" },
    { name: "幽灵套", img: "Spectre_Hood.png", cat: "盔甲", rarity: "黄色", damage: "", source: "叶绿锭 + 幽灵锭合成（地牢后）", desc: "法师套装二选一：幽灵兜帽吸血保命，幽灵面具爆发输出，地牢刷幽魂必备。" },
    { name: "蘑菇套", img: "Shroomite_Headgear.png", cat: "盔甲", rarity: "黄色", damage: "", source: "叶绿锭 + 发光蘑菇在蘑菇熔炼机合成", desc: "射手神装，站立不动进入隐身状态并大幅增伤，狙击流站桩首选。" },
    { name: "海龟套", img: "Turtle_Helmet.png", cat: "盔甲", rarity: "黄色", damage: "", source: "叶绿锭 + 海龟壳（丛林大海龟掉落）合成", desc: "高防且按比例反弹近战伤害，肉盾流打石巨人前的经典防具。" },
    { name: "甲虫套", img: "Beetle_Helmet.png", cat: "盔甲", rarity: "黄色", damage: "", source: "海龟套 + 石巨人掉落的甲虫鞘翅升级", desc: "近战毕业前最后一级，甲虫加攻/甲虫加防两种胸甲按需切换。" },
    { name: "阴森套", img: "Spooky_Helmet.png", cat: "盔甲", rarity: "黄色", damage: "", source: "南瓜月事件阴森木合成", desc: "召唤师输出套，大幅强化仆从伤害，召唤栏位充足时伤害爆炸。" },
    { name: "耀斑套", img: "Solar_Flare_Helmet.png", cat: "盔甲", rarity: "红色", damage: "", source: "日耀柱碎片 + 夜明锭合成", desc: "战士毕业套，冲刺带日耀爆炸，护盾抵消伤害，近战终极防具。" },
    { name: "星旋套", img: "Vortex_Helmet.png", cat: "盔甲", rarity: "黄色", damage: "", source: "星旋柱碎片 + 夜明锭合成", desc: "射手毕业套，隐身状态远程伤害拉满，搭配巨兽鲨/幻象弓横扫一切。" },
    { name: "星云套", img: "Nebula_Helmet.png", cat: "盔甲", rarity: "紫色", damage: "", source: "星云柱碎片 + 夜明锭合成", desc: "法师毕业套，击杀掉落星云增益球，回蓝增伤越打越强。" },
    { name: "星尘套", img: "Stardust_Helmet.png", cat: "盔甲", rarity: "蓝色", damage: "", source: "星尘柱碎片 + 夜明锭合成", desc: "召唤师毕业套，自带星尘守卫贴身保护，仆从数量与伤害双封顶。" },
    { name: "爱斯基摩套", img: "Eskimo_Hood.png", cat: "盔甲", rarity: "白色", damage: "", source: "雪地的僵尸稀有掉落各部件", desc: "纯外观向早期防具，防御一般，收集党顺手套装。" },
    { name: "矿工套", img: "Mining_Helmet.png", cat: "盔甲", rarity: "白色", damage: "", source: "矿工头盔向商人购买，上衣/裤子由骷髅商人出售", desc: "头盔自带照明，挖矿三件套，实用度高于防御力。" },
    { name: "忍者套", img: "Ninja_Hood.png", cat: "盔甲", rarity: "蓝色", damage: "", source: "史莱姆王掉落部件", desc: "提升投掷速度与暴击，远程/投掷流肉前可用，外观还帅。" },
    { name: "角斗士套", img: "Gladiator_Helmet.png", cat: "盔甲", rarity: "蓝色", damage: "", source: "大理石洞穴的重甲步兵、美杜莎等掉落", desc: "肉前近战向防具，整套防御不错，探索大理石洞时凑齐。" },
    { name: "黑曜石套", img: "Obsidian_Hat.png", cat: "盔甲", rarity: "橙色", damage: "", source: "黑曜石 + 丝绸在地狱熔炉合成", desc: "1.4 重做后成为召唤师肉前神装，大幅增强鞭子伤害与范围。" },
    { name: "南瓜套", img: "Pumpkin_Helmet.png", cat: "盔甲", rarity: "橙色", damage: "", source: "南瓜 + 木材在工作台合成", desc: "召唤师肉前过渡套，增加仆从伤害，材料遍地都是。" },
    { name: "提基套", img: "Tiki_Mask.png", cat: "盔甲", rarity: "黄色", damage: "", source: "世纪之花后，携带矮人法杖时向巫医购买", desc: "传统召唤师套装，大幅增加仆从数量与伤害。" },
    { name: "武僧套", img: "Monk's_Belt_Shirt.png", cat: "盔甲", rarity: "紫色", damage: "", source: "撒旦军队事件后用护卫奖章向酒馆老板兑换（T3）", desc: "塔防兑换的毕业级近战/召唤混合套，配哨兵杖很强。" },
    { name: "侍卫套", img: "Squire's_Great_Helm.png", cat: "盔甲", rarity: "紫色", damage: "", source: "撒旦军队事件后用护卫奖章向酒馆老板兑换（T3）", desc: "高防御的近战/哨兵团，爆炸机关哨兵伤害加成。" },

    /* ---------- 饰品 ---------- */
    { name: "云朵瓶", img: "Cloud_in_a_Bottle.png", cat: "饰品", rarity: "蓝色", damage: "", source: "地下金宝箱、钓鱼板条箱", desc: "获得二段跳能力，前期最直接的机动性提升。" },
    { name: "闪电靴", img: "Lightning_Boots.png", cat: "饰品", rarity: "橙色", damage: "", source: "赫尔墨斯靴（或航鱼靴）+ 疾风脚镯 + 敏捷扣链合成", desc: "跑得飞快还能飞行一小段，后期合成泰拉闪耀靴的材料。" },
    { name: "克苏鲁之盾", img: "Shield_of_Cthulhu.png", cat: "饰品", rarity: "绿色", damage: "", source: "专家（或大师）模式击败克苏鲁之眼，开启宝藏袋获得", desc: "可向前冲撞造成伤害并有短暂无敌帧，手机版走位神装。" },
    { name: "蠕虫围巾", img: "Worm_Scarf.png", cat: "饰品", rarity: "绿色", damage: "", source: "专家模式击败世界吞噬怪，开启宝藏袋获得（猩红世界为混乱之脑）", desc: "受到的所有伤害减少 17%，从前期强到毕业的硬减伤。" },
    { name: "十字章护盾", img: "Ankh_Shield.png", cat: "饰品", rarity: "黄色", damage: "", source: "黑曜石护盾 + 十字章护身符（十几种抗负面饰品逐级合成）", desc: "免疫击退与十几种负面状态，合成过程是一场硬核收集。" },
    { name: "天界壳", img: "Celestial_Shell.png", cat: "饰品", rarity: "紫色", damage: "", source: "天界石 + 月亮贝壳合成", desc: "全属性综合加成，夜晚和水中还会变身狼人/鱼人，一格顶五格。" },
    { name: "赫尔墨斯靴", img: "Hermes_Boots.png", cat: "饰品", rarity: "白色", damage: "", source: "地下金宝箱、常春藤箱中获得", desc: "持续跑动后加速，闪电靴与泰拉闪耀靴的基础材料。" },
    { name: "霜花靴", img: "Frostspark_Boots.png", cat: "饰品", rarity: "粉色", damage: "", source: "闪电靴 + 滑冰鞋在工匠作坊合成", desc: "跑得更快、冰面不打滑，花前跑图神装，继续可升泰拉闪耀靴。" },
    { name: "蛙腿", img: "Frog_Leg.png", cat: "饰品", rarity: "绿色", damage: "", source: "钓鱼随机钓起，或绿洲/丛林渔匣开出", desc: "跳跃高度与起飞速度大增，是合成多种终极机动饰品的核心。" },
    { name: "复仇者徽章", img: "Avenger_Emblem.png", cat: "饰品", rarity: "粉色", damage: "", source: "任意职业徽章 + 新三王的三种魂在工匠作坊合成", desc: "全伤害 +10%，所有职业都能用的通用增伤件。" },
    { name: "毁灭者徽章", img: "Destroyer_Emblem.png", cat: "饰品", rarity: "黄色", damage: "", source: "复仇者徽章 + 石巨人之眼在工匠作坊合成", desc: "全伤害 +10% 且暴击 +8%，全职业毕业增伤徽章。" },
    { name: "烈火手套", img: "Fire_Gauntlet.png", cat: "饰品", rarity: "黄色", damage: "", source: "强力手套 + 泰坦手套 + 岩浆石逐级合成", desc: "近战攻速/伤害/击退全加，攻击点燃敌人，战士毕业饰品。" },
    { name: "天界石", img: "Celestial_Stone.png", cat: "饰品", rarity: "紫色", damage: "", source: "太阳石 + 月亮石在工匠作坊合成", desc: "白天黑夜都获得全面属性加成，可继续合成天界壳。" },
    { name: "月亮贝壳", img: "Moon_Shell.png", cat: "饰品", rarity: "紫色", damage: "", source: "海神贝壳 + 月光符咒合成", desc: "夜晚变狼人、水中变鱼人，合成天界壳的材料。" },
    { name: "魔力花", img: "Mana_Flower.png", cat: "饰品", rarity: "橙色", damage: "", source: "天然魔棒（丛林中拾取）+ 魔力药水在工匠作坊合成", desc: "魔力耗尽时自动喝药，还能降低 8% 魔力消耗，法师必带。" },

    /* ---------- 药水 ---------- */
    { name: "弱效治疗药水", img: "Lesser_Healing_Potion.png", cat: "药水", rarity: "白色", damage: "", source: "罐子、宝箱掉落，或用凝胶 + 蘑菇 + 瓶子合成", desc: "回复 50 点生命值，使用后有短暂药水疾病冷却。" },
    { name: "铁皮药水", img: "Ironskin_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 太阳花 + 铁矿/铅矿 在放置的瓶子处合成", desc: "持续 5 分钟增加 8 点防御，打任何 BOSS 前都该喝一瓶。" },
    { name: "再生药水", img: "Regeneration_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 太阳花 + 蘑菇合成", desc: "持续恢复生命值，可以和铁皮药水等增益同时存在。" },
    { name: "怒气药水", img: "Wrath_Potion.png", cat: "药水", rarity: "橙色", damage: "", source: "水瓶 + 死亡草 + 血腥虎鱼（猩红世界钓鱼获得）", desc: "暴击率提升 10%，持续 4 分钟，BOSS 战爆发必备。" },
    { name: "治疗药水", img: "Healing_Potion.png", cat: "药水", rarity: "白色", damage: "", source: "弱效治疗药水 + 荧光蘑菇合成", desc: "回复 100 点生命，肉前到肉后初期的主力血药。" },
    { name: "强效治疗药水", img: "Greater_Healing_Potion.png", cat: "药水", rarity: "白色", damage: "", source: "治疗药水 + 水晶碎块 + 精灵尘 + 恐惧之魂等合成", desc: "回复 150 点生命，花后打 BOSS 必备。" },
    { name: "超级治疗药水", img: "Super_Healing_Potion.png", cat: "药水", rarity: "黄色", damage: "", source: "强效治疗药水 + 星云碎片 + 日耀碎片等合成", desc: "回复 200 点生命，终极血药，打月总前备满。" },
    { name: "魔力药水", img: "Mana_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "弱效魔力药水 + 月光草合成", desc: "回复 100 点魔力，也是合成魔力花的材料。" },
    { name: "黑曜石皮药水", img: "Obsidian_Skin_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 火焰花 + 幌菊 + 黑曜石合成", desc: "4 分钟免疫岩浆，挖狱石和肉山铺桥必喝。" },
    { name: "羽落药水", img: "Featherfall_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 太阳花 + 寒颤棘 + 羽毛合成", desc: "减缓下落速度，高空作业和打蜂后都用得上。" },
    { name: "敏捷药水", img: "Swiftness_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 太阳花 + 仙人掌合成", desc: "移动速度提升 25%，持续 6 分钟，开荒常喝。" },
    { name: "光芒药水", img: "Shine_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 太阳花 + 发光蘑菇合成", desc: "全身发光 10 分钟，下矿探洞省火把。" },
    { name: "夜猫子药水", img: "Night_Owl_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 太阳花 + 闪耀根合成", desc: "提升夜间与洞穴视野，挖矿常备。" },
    { name: "洞穴探险药水", img: "Spelunker_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 闪耀根 + 月光草 + 金矿/铂金矿合成", desc: "5 分钟内高亮附近矿石和宝藏，找矿神药。" },
    { name: "挖矿药水", img: "Mining_Potion.png", cat: "药水", rarity: "蓝色", damage: "", source: "水瓶 + 闪耀根 + 蚂蚁狮上颚合成", desc: "镐速提升 25%，持续 10 分钟，大工程必备。" },
    { name: "魔能药水", img: "Magic_Power_Potion.png", cat: "药水", rarity: "橙色", damage: "", source: "水瓶 + 月光草 + 死亡草 + 流星合成", desc: "魔法伤害提升 20%，法师 BOSS 战爆发药。" },
    { name: "召唤药水", img: "Summoning_Potion.png", cat: "药水", rarity: "橙色", damage: "", source: "水瓶 + 月光草 + 斑斓脂鱼（丛林钓鱼）合成", desc: "召唤栏位 +1 持续 8 分钟，召唤师打 BOSS 必喝。" },
    { name: "弹药储备药水", img: "Ammo_Reservation_Potion.png", cat: "药水", rarity: "橙色", damage: "", source: "水瓶 + 月光草 + 双鳍鳕鱼（雪地钓鱼）合成", desc: "20% 概率不消耗弹药，持续 8 分钟，射手省弹神器。" },
    { name: "拾心药水", img: "Lifeforce_Potion.png", cat: "药水", rarity: "橙色", damage: "", source: "水瓶 + 寒颤棘 + 月光草 + 七彩矿鱼（神圣之地钓鱼）合成", desc: "最大生命值提升 20%，BOSS 战前喝等于多一层血。" },

    /* ---------- 材料（矿石与关键合成材料） ---------- */
    { name: "铜矿", img: "Copper_Ore.png", cat: "材料", rarity: "白色", damage: "", source: "地表与地下浅层大量分布，砸陶罐也常掉落", desc: "游戏里最常见的矿石，开局做铜工具和铜锭的原料。" },
    { name: "铁矿", img: "Iron_Ore.png", cat: "材料", rarity: "白色", damage: "", source: "地下中层分布（部分世界生成铅矿代替）", desc: "肉前工具与护甲的主力矿，还能做链条合成表。" },
    { name: "金矿", img: "Gold_Ore.png", cat: "材料", rarity: "蓝色", damage: "", source: "地下深层与洞穴分布（部分世界为铂金矿）", desc: "肉前毕业级矿石，金冠召唤史莱姆王也离不开它。" },
    { name: "魔金矿", img: "Demonite_Ore.png", cat: "材料", rarity: "蓝色", damage: "", source: "腐化世界：世界吞噬怪/克眼掉落，或腐化之地少量开采", desc: "合成暗影锭、噩梦镐与腐化系武器的重要矿。" },
    { name: "猩红矿", img: "Crimtane_Ore.png", cat: "材料", rarity: "蓝色", damage: "", source: "猩红世界：克苏鲁之脑/克眼掉落", desc: "猩红世界的对应矿，做猩红锭与血腥系装备。" },
    { name: "狱石", img: "Hellstone.png", cat: "材料", rarity: "橙色", damage: "", source: "地狱岩层中开采（需要黑曜石皮肤药水或黑曜石骷髅头防烫）", desc: "发光的狱石矿，合成熔岩套、熔岩镐与肉前毕业装备。" },
    { name: "钴蓝矿", img: "Cobalt_Ore.png", cat: "材料", rarity: "绿色", damage: "", source: "肉后砸祭坛刷新（需熔岩镐以上开采）", desc: "困难模式三矿的第一档，做钴蓝镐开启下一档。" },
    { name: "秘银矿", img: "Mythril_Ore.png", cat: "材料", rarity: "绿色", damage: "", source: "肉后砸第二次祭坛刷新（需钴蓝镐以上开采）", desc: "三矿第二档，秘银砧是合成大量高级装备的必需品。" },
    { name: "精金矿", img: "Adamantite_Ore.png", cat: "材料", rarity: "紫色", damage: "", source: "肉后砸第三次祭坛刷新（需秘银镐以上开采）", desc: "三矿最高档，做精金套装与精金熔炉。" },
    { name: "叶绿矿", img: "Chlorophyte_Ore.png", cat: "材料", rarity: "绿色", damage: "", source: "肉后地下丛林缓慢生长（镐采，无法爆破）", desc: "会向周围泥块蔓延的神奇矿，合成叶绿套与叶绿弹。" },
    { name: "神圣锭", img: "Hallowed_Bar.png", cat: "材料", rarity: "粉色", damage: "", source: "机械三王掉落", desc: "合成断钢剑、神圣套装等的核心材料，三王后的重要资源。" },
    { name: "夜明矿", img: "Luminite.png", cat: "材料", rarity: "红色", damage: "", source: "月亮领主掉落", desc: "全游戏最高级材料，用于合成毕业套装与毕业武器。" },

    /* ---------- 材料（矿石锭） ---------- */
    { name: "铜锭", img: "Copper_Bar.png", cat: "材料", rarity: "白色", damage: "", source: "3 个铜矿在熔炉烧成", desc: "基础锭，做铜工具、铜装和铜宽刃剑。" },
    { name: "锡锭", img: "Tin_Bar.png", cat: "材料", rarity: "白色", damage: "", source: "3 个锡矿在熔炉烧成", desc: "铜锭的锡矿替代版。" },
    { name: "铁锭", img: "Iron_Bar.png", cat: "材料", rarity: "白色", damage: "", source: "3 个铁矿在熔炉烧成", desc: "用途最广的基础锭，链条、铁砧、大量合成都要它。" },
    { name: "铅锭", img: "Lead_Bar.png", cat: "材料", rarity: "白色", damage: "", source: "3 个铅矿在熔炉烧成", desc: "铁锭的铅矿替代版，配方通用。" },
    { name: "银锭", img: "Silver_Bar.png", cat: "材料", rarity: "白色", damage: "", source: "3 个银矿在熔炉烧成", desc: "中层锭，做银装备和部分饰品。" },
    { name: "钨锭", img: "Tungsten_Bar.png", cat: "材料", rarity: "白色", damage: "", source: "3 个钨矿在熔炉烧成", desc: "银锭的钨矿替代版。" },
    { name: "金锭", img: "Gold_Bar.png", cat: "材料", rarity: "白色", damage: "", source: "4 个金矿在熔炉烧成", desc: "做金冠召唤史莱姆王、金装备和皇冠类饰品。" },
    { name: "铂金锭", img: "Platinum_Bar.png", cat: "材料", rarity: "白色", damage: "", source: "4 个铂金矿在熔炉烧成", desc: "金锭的铂金替代版，可做铂金王冠。" },
    { name: "陨石锭", img: "Meteorite_Bar.png", cat: "材料", rarity: "蓝色", damage: "", source: "3 个陨石矿在熔炉烧成", desc: "做太空枪、陨石套和相位之刃。" },
    { name: "魔金锭", img: "Demonite_Bar.png", cat: "材料", rarity: "蓝色", damage: "", source: "3 个魔金矿在熔炉烧成", desc: "腐化世界核心锭，做噩梦镐、暗影套与魔光剑。" },
    { name: "猩红锭", img: "Crimtane_Bar.png", cat: "材料", rarity: "蓝色", damage: "", source: "3 个猩红矿在熔炉烧成", desc: "猩红世界核心锭，做血肉屠刀、猩红套与死亡使者镐。" },
    { name: "狱石锭", img: "Hellstone_Bar.png", cat: "材料", rarity: "橙色", damage: "", source: "3 个狱石 + 1 个黑曜石在地狱熔炉烧成", desc: "肉前最高级锭，熔岩套、炽焰巨剑、熔火之怒都要它。" },
    { name: "钴蓝锭", img: "Cobalt_Bar.png", cat: "材料", rarity: "绿色", damage: "", source: "3 个钴蓝矿在精金/钛金熔炉烧成", desc: "肉后入门锭，钴蓝钻/镐是开采下一档矿的钥匙。" },
    { name: "钯金锭", img: "Palladium_Bar.png", cat: "材料", rarity: "橙色", damage: "", source: "3 个钯金矿在精金/钛金熔炉烧成", desc: "钴蓝锭的替代版，钯金套自带回血。" },
    { name: "秘银锭", img: "Mythril_Bar.png", cat: "材料", rarity: "绿色", damage: "", source: "4 个秘银矿在精金/钛金熔炉烧成", desc: "10 个锭能做秘银砧，是肉后绝大多数合成的工作站。" },
    { name: "山铜锭", img: "Orichalcum_Bar.png", cat: "材料", rarity: "粉色", damage: "", source: "4 个山铜矿在精金/钛金熔炉烧成", desc: "秘银锭的替代版，12 个做山铜砧。" },
    { name: "精金锭", img: "Adamantite_Bar.png", cat: "材料", rarity: "粉色", damage: "", source: "5 个精金矿在精金熔炉烧成", desc: "三矿最高档，精金套与大量花前装备的材料。" },
    { name: "钛金锭", img: "Titanium_Bar.png", cat: "材料", rarity: "粉色", damage: "", source: "5 个钛金矿在钛金熔炉烧成", desc: "精金锭的替代版，钛金套的影分身容错极高。" },
    { name: "叶绿锭", img: "Chlorophyte_Bar.png", cat: "材料", rarity: "绿色", damage: "", source: "5 或 6 个叶绿矿在精金/钛金熔炉烧成", desc: "花后核心锭，叶绿套、幽灵锭、蘑菇锭都要它打底。" },
    { name: "幽灵锭", img: "Spectre_Bar.png", cat: "材料", rarity: "黄色", damage: "", source: "叶绿锭 + 灵气（地牢幽魂掉落）在精金/钛金熔炉烧成", desc: "幽灵套与幽灵系武器的专属材料。" },
    { name: "蘑菇锭", img: "Shroomite_Bar.png", cat: "材料", rarity: "黄色", damage: "", source: "叶绿锭 + 发光蘑菇在蘑菇熔炼机（由蘑菇人出售）合成", desc: "蘑菇套与锤斧等射手装备的材料。" },
    { name: "夜明锭", img: "Luminite_Bar.png", cat: "材料", rarity: "红色", damage: "", source: "4 个夜明矿在远古操纵机合成", desc: "配合四柱碎片合成全系列毕业套装与武器。" },

    /* ---------- 材料（魂与四柱碎片） ---------- */
    { name: "飞翔之魂", img: "Soul_of_Flight.png", cat: "材料", rarity: "白色", damage: "", source: "困难模式飞龙、虚空白龙掉落（太空层）", desc: "所有翅膀的必备材料，肉后多上天台刷龙。" },
    { name: "光明之魂", img: "Soul_of_Light.png", cat: "材料", rarity: "粉色", damage: "", source: "地下神圣之地的怪物掉落", desc: "魔晶风暴、代达罗斯弓召唤物等大量肉后合成需要。" },
    { name: "暗影之魂", img: "Soul_of_Night.png", cat: "材料", rarity: "紫色", damage: "", source: "地下腐化/猩红之地的怪物掉落", desc: "诅咒焰、黄金雨、玛瑙爆破枪等合成核心。" },
    { name: "力量之魂", img: "Soul_of_Might.png", cat: "材料", rarity: "粉色", damage: "", source: "击败机械蠕虫获得", desc: "巨兽鲨、光辉飞盘、魔眼法杖等的材料。" },
    { name: "视域之魂", img: "Soul_of_Sight.png", cat: "材料", rarity: "粉色", damage: "", source: "击败双子魔眼获得", desc: "魔法竖琴、魔眼法杖、召唤物等的材料。" },
    { name: "恐惧之魂", img: "Soul_of_Fright.png", cat: "材料", rarity: "粉色", damage: "", source: "击败机械骷髅王获得", desc: "火焰喷射器、强效治疗药水、召唤物等的材料。" },
    { name: "日耀碎片", img: "Solar_Fragment.png", cat: "材料", rarity: "红色", damage: "", source: "摧毁日耀柱获得", desc: "耀斑套、日耀喷发剑等战士毕业装备材料。" },
    { name: "星旋碎片", img: "Vortex_Fragment.png", cat: "材料", rarity: "黄色", damage: "", source: "摧毁星旋柱获得", desc: "星旋套、幻象弓等射手毕业装备材料。" },
    { name: "星云碎片", img: "Nebula_Fragment.png", cat: "材料", rarity: "紫色", damage: "", source: "摧毁星云柱获得", desc: "星云套、星云烈焰/奥秘等法师毕业装备材料。" },
    { name: "星尘碎片", img: "Stardust_Fragment.png", cat: "材料", rarity: "蓝色", damage: "", source: "摧毁星尘柱获得", desc: "星尘套、星尘龙/细胞法杖等召唤毕业装备材料。" },

    /* ---------- 材料（常用掉落与合成件） ---------- */
    { name: "木材", img: "Wood.png", cat: "材料", rarity: "白色", damage: "", source: "砍树获得，各种树出对应木材", desc: "万事万物的起点，工作台、房子、弓箭都从它开始。" },
    { name: "凝胶", img: "Gel.png", cat: "材料", rarity: "白色", damage: "", source: "几乎所有史莱姆掉落", desc: "做火把、弱效治疗药水和史莱姆王冠召唤物。" },
    { name: "黑曜石", img: "Obsidian.png", cat: "材料", rarity: "白色", damage: "", source: "水遇岩浆生成，需噩梦镐/以上开采", desc: "狱石锭、黑曜石皮肤药水、黑曜石骷髅头都要它。" },
    { name: "坠落之星", img: "Fallen_Star.png", cat: "材料", rarity: "蓝色", damage: "", source: "夜晚落地，白天消失，天亮前捡", desc: "合成魔力水晶、各类星星武器与附魔。" },
    { name: "晶状体", img: "Lens.png", cat: "材料", rarity: "白色", damage: "", source: "恶魔眼、飞眼怪等夜间怪物掉落", desc: "可疑眼球召唤物、魔眼法杖的材料。" },
    { name: "黑色晶状体", img: "Black_Lens.png", cat: "材料", rarity: "灰色", damage: "", source: "恶魔眼极稀有掉落（1%）", desc: "魔眼法杖、墨镜的材料，刷到就是赚到。" },
    { name: "丛林孢子", img: "Jungle_Spore.png", cat: "材料", rarity: "绿色", damage: "", source: "地下丛林发绿光的球形植物", desc: "草薙、丛林套、荆棘旋刃等肉前丛林系装备材料。" },
    { name: "毒刺", img: "Stinger.png", cat: "材料", rarity: "橙色", damage: "", source: "地下丛林的黄蜂、食人怪掉落", desc: "草薙、黄蜂法杖、荆棘旋刃与丛林药水的材料。" },
    { name: "藤蔓", img: "Vine.png", cat: "材料", rarity: "绿色", damage: "", source: "地下丛林食人怪掉落", desc: "丛林套、草薙和常春藤鞭等的材料。" },
    { name: "蜂蜡", img: "Bee_Wax.png", cat: "材料", rarity: "绿色", damage: "", source: "蜂后大量掉落", desc: "蜜蜂套、黄蜂法杖、蜜蜂手榴弹等蜂系装备材料。" },
    { name: "暗影鳞片", img: "Shadow_Scale.png", cat: "材料", rarity: "蓝色", damage: "", source: "世界吞噬怪掉落（腐化世界）", desc: "配合魔金锭做暗影套与噩梦镐。" },
    { name: "组织样本", img: "Tissue_Sample.png", cat: "材料", rarity: "蓝色", damage: "", source: "克苏鲁之脑掉落（猩红世界）", desc: "配合猩红锭做猩红套与死亡使者镐。" },
    { name: "鲨鱼鳍", img: "Shark_Fin.png", cat: "材料", rarity: "白色", damage: "", source: "海洋中的鲨鱼掉落", desc: "巨兽鲨、海王贝等的材料，海边刷一刷就有。" },
    { name: "海龟壳", img: "Turtle_Shell.png", cat: "材料", rarity: "黄色", damage: "", source: "肉后丛林的巨型陆龟稀有掉落", desc: "海龟套的核心材料，掉率不高需要耐心。" },
    { name: "甲虫鞘翅", img: "Beetle_Husk.png", cat: "材料", rarity: "黄色", damage: "", source: "石巨人掉落", desc: "海龟套升级为甲虫套的唯一材料。" },
    { name: "精灵尘", img: "Pixie_Dust.png", cat: "材料", rarity: "白色", damage: "", source: "神圣之地的小精灵掉落", desc: "翅膀、强效治疗药水与彩虹系合成的常用材料。" },
    { name: "独角兽角", img: "Unicorn_Horn.png", cat: "材料", rarity: "粉色", damage: "", source: "神圣之地的独角兽掉落", desc: "彩虹魔杖、神圣箭矢、箭矢盒等的材料。" },
    { name: "诅咒火焰", img: "Cursed_Flame.png", cat: "材料", rarity: "绿色", damage: "", source: "腐化之地的腐化者、世界吞噬者部位等掉落", desc: "做诅咒焰武器、诅咒箭矢和大魔法书，腐化世界专属材料。" },
    { name: "灵液", img: "Ichor.png", cat: "材料", rarity: "橙色", damage: "", source: "猩红之地的恶心游魂、灵液黏黏怪掉落", desc: "灵液武器/子弹上减防 debuff（猩红世界）。" },
    { name: "水晶碎块", img: "Crystal_Shard.png", cat: "材料", rarity: "粉色", damage: "", source: "地下神圣之地的珍珠石/黑檀石上生长", desc: "魔晶风暴、大治疗药、相位军刀等大量合成的基础件。" },
    { name: "光明碎片", img: "Light_Shard.png", cat: "材料", rarity: "黄色", damage: "", source: "神圣木乃伊（沙漠神圣化）掉落", desc: "合成光明钥匙（召唤神圣宝箱怪）与玛瑙相关装备。" },
    { name: "暗黑碎片", img: "Dark_Shard.png", cat: "材料", rarity: "紫色", damage: "", source: "暗影木乃伊（沙漠腐化/猩红化）掉落", desc: "合成腐香囊与玛瑙爆破枪等的材料。" },
    { name: "灵气", img: "Ectoplasm.png", cat: "材料", rarity: "黄色", damage: "", source: "困难模式地牢中的地牢幽魂掉落", desc: "幽灵锭、幽灵套与死灵卷轴等召唤师饰品的材料。" },
    { name: "骨头", img: "Bone.png", cat: "材料", rarity: "白色", damage: "", source: "地牢的各类骷髅掉落", desc: "死灵套、骨制家具、机械骷髅头召唤物都要它。" },
    { name: "蛛网", img: "Cobweb.png", cat: "材料", rarity: "白色", damage: "", source: "地下洞穴大量分布", desc: "在织布机处做成丝绸，用于做床和死灵套。" },
    { name: "链条", img: "Chain.png", cat: "材料", rarity: "白色", damage: "", source: "铁锭在铁砧合成", desc: "做锯木机、怀表、链条灯等家具的基础件。" },
    { name: "松露虫", img: "Truffle_Worm.png", cat: "材料", rarity: "橙色", damage: "", source: "肉后地下发光蘑菇生物群落捕获", desc: "在海边用它钓鱼召唤猪龙鱼公爵，召唤师/法师必刷。" },

    /* ---------- 材料（永久强化与工作站） ---------- */
    { name: "生命水晶", img: "Life_Crystal.png", cat: "材料", rarity: "绿色", damage: "", source: "地下洞穴中的水晶之心，镐子敲下", desc: "使用后永久 +20 生命上限（最多到 400），下矿见到必捡。" },
    { name: "魔力水晶", img: "Mana_Crystal.png", cat: "材料", rarity: "蓝色", damage: "", source: "5 个坠落之星徒手合成", desc: "使用后永久 +20 魔力上限（最多到 200），法师开局先攒。" },
    { name: "生命果", img: "Life_Fruit.png", cat: "材料", rarity: "黄色", damage: "", source: "世纪之花后，地下丛林随机生长（金色心形果实）", desc: "使用后永久 +5 生命上限（最多到 500），花后慢慢收集。" },
    { name: "秘银砧/山铜砧", img: "Mythril_Anvil.png", cat: "材料", rarity: "绿色", damage: "", source: "10 个秘银锭（或 12 个山铜锭）合成", desc: "困难模式所有高级装备的核心工作站，肉后第一件做它。" },
    { name: "精金熔炉/钛金熔炉", img: "Adamantite_Forge.png", cat: "材料", rarity: "粉色", damage: "", source: "地狱熔炉 + 30 个精金/钛金矿在秘银/山铜砧合成", desc: "熔炼三矿最高档矿石与叶绿锭的必需工作站。" },
    { name: "地狱熔炉", img: "Hellforge.png", cat: "材料", rarity: "白色", damage: "", source: "地狱废墟建筑里直接拾取（也可合成）", desc: "熔炼狱石锭的必需品，肉前下地狱抱一个回家。" },
    { name: "工匠作坊", img: "Tinkerer's_Workshop.png", cat: "材料", rarity: "橙色", damage: "", source: "哥布林工匠 NPC 处花 10 金币购买", desc: "合成高级饰品（十字章护盾、各类徽章）的唯一工作站。" },
    { name: "提炼机", img: "Extractinator.png", cat: "材料", rarity: "蓝色", damage: "", source: "地下金箱、沙漠匣/绿洲匣中开出", desc: "放入泥沙/雪泥块随机出矿石、钱币，还能出琥珀虫。" },
    { name: "远古操纵机", img: "Ancient_Manipulator.png", cat: "材料", rarity: "红色", damage: "", source: "击败拜月教邪教徒必定掉落", desc: "合成夜明锭与所有四柱毕业装备的终极工作站。" },

    /* ---------- 材料（BOSS 召唤物） ---------- */
    { name: "史莱姆王冠", img: "Slime_Crown.png", cat: "材料", rarity: "绿色", damage: "", source: "金冠/铂金冠 + 凝胶在恶魔/猩红祭坛合成", desc: "随时召唤史莱姆王，刷忍者套和固化机用。" },
    { name: "可疑眼球", img: "Suspicious_Looking_Eye.png", cat: "材料", rarity: "蓝色", damage: "", source: "晶状体在恶魔/猩红祭坛合成", desc: "夜晚使用召唤克苏鲁之眼，白天使用会失效。" },
    { name: "蠕虫诱饵", img: "Worm_Food.png", cat: "材料", rarity: "蓝色", damage: "", source: "魔金粉 + 腐肉在恶魔祭坛合成（腐化世界）", desc: "在腐化之地使用召唤世界吞噬怪。" },
    { name: "血腥脊椎", img: "Bloody_Spine.png", cat: "材料", rarity: "蓝色", damage: "", source: "脊椎骨 + 毒粉在猩红祭坛合成（猩红世界）", desc: "在猩红之地使用召唤克苏鲁之脑。" },
    { name: "憎恶之蜂", img: "Abeemination.png", cat: "材料", rarity: "绿色", damage: "", source: "蜂蜜块 + 蜂蜡 + 蜂巢块 + 毒刺等合成", desc: "在丛林使用召唤蜂后，刷蜜蜂套和蜂系武器。" },
    { name: "机械魔眼", img: "Mechanical_Eye.png", cat: "材料", rarity: "粉色", damage: "", source: "晶状体 + 光明/暗影之魂 + 铁/铅锭在秘银/山铜砧合成", desc: "夜晚使用召唤双子魔眼。" },
    { name: "机械蠕虫", img: "Mechanical_Worm.png", cat: "材料", rarity: "粉色", damage: "", source: "腐肉/脊椎骨 + 暗影之魂 + 铁/铅锭合成", desc: "夜晚使用召唤机械蠕虫，刷力量之魂做巨兽鲨。" },
    { name: "机械骷髅头", img: "Mechanical_Skull.png", cat: "材料", rarity: "粉色", damage: "", source: "骨头 + 光明/暗影之魂 + 铁/铅锭合成", desc: "夜晚使用召唤机械骷髅王。" },
    { name: "天界符", img: "Celestial_Sigil.png", cat: "材料", rarity: "黄色", damage: "", source: "视域、力量、恐惧之魂各 20 个在秘银/山铜砧合成", desc: "击败四柱后使用（或等自然倒计时结束）召唤月亮领主。" },
    { name: "丛林蜥蜴电池", img: "Lihzahrd_Power_Cell.png", cat: "材料", rarity: "黄色", damage: "", source: "丛林神庙内的箱子和蜥蜴人掉落", desc: "在神庙尽头的祭坛使用召唤石巨人。" },
    { name: "导游", img: "Guide.png", cat: "NPC", rarity: "白色", damage: "", source: "开局自带（死亡后可再生成）", desc: "新手导师：可查询合成配方，导游巫毒娃娃在地狱扔进岩浆会召唤血肉墙。" },
    { name: "商人", img: "Merchant.png", cat: "NPC", rarity: "白色", damage: "", source: "所有玩家背包合计持有 50 银币后入住", desc: "卖铁镐斧头、火把、绳子、虫网等开荒基础物资。" },
    { name: "护士", img: "Nurse.png", cat: "NPC", rarity: "白色", damage: "", source: "任一玩家生命上限达到 100 以上（吃生命水晶）", desc: "花金币立即回满血并清除减益，打BOSS时住在战场边是刚需。" },
    { name: "军火商", img: "Arms_Dealer.png", cat: "NPC", rarity: "白色", damage: "", source: "任一玩家拥有枪械类物品（如燧发枪）", desc: "卖各类子弹和枪械，远程职业的核心供货商。" },
    { name: "爆破专家", img: "Demolitionist.png", cat: "NPC", rarity: "白色", damage: "", source: "任一玩家拥有炸药类物品（如炸弹）", desc: "卖炸弹、雷管、炸药，开矿拆地形和清怪都好用。" },
    { name: "染料商", img: "Dye_Trader.png", cat: "NPC", rarity: "白色", damage: "", source: "任一玩家拥有染料材料（如橙色血藻）", desc: "把染料材料加工成染料，装扮党必备。" },
    { name: "树妖", img: "Dryad.png", cat: "NPC", rarity: "白色", damage: "", source: "击败任意一个BOSS（如克苏鲁之眼）", desc: "卖草种子、净化粉，能报告世界腐化/猩红比例，卖荆棘防御装备。" },
    { name: "画家", img: "Painter.png", cat: "NPC", rarity: "白色", damage: "", source: "已有至少 8 名NPC入住", desc: "卖刷子和油漆，出售记录各地风景的画作。" },
    { name: "巫医", img: "Witch_Doctor.png", cat: "NPC", rarity: "白色", damage: "", source: "击败蜂王（丛林蜂王）后入住", desc: "卖吹管、飞镖、南瓜月勋章，困难模式卖翅膀和提基套装。" },
    { name: "哥布林工匠", img: "Goblin_Tinkerer.png", cat: "NPC", rarity: "白色", damage: "", source: "击败哥布林军队后，在洞穴层找到被捆绑的他", desc: "提供重铸服务（刷装备词缀），卖工匠作坊，全游戏最重要的NPC之一。" },
    { name: "巫师", img: "Wizard.png", cat: "NPC", rarity: "白色", damage: "", source: "困难模式后在洞穴层找到被捆绑的他", desc: "卖法术书、水晶球，魔法职业核心NPC，可做水晶风暴等法术。" },
    { name: "机械师", img: "Mechanic.png", cat: "NPC", rarity: "白色", damage: "", source: "困难模式后在地牢找到被捆绑的她", desc: "卖电线、开关、机关组件，陷阱工程师的灵魂人物。" },
    { name: "服装商", img: "Clothier.png", cat: "NPC", rarity: "白色", damage: "", source: "击败骷髅王后入住", desc: "卖时装套装，服装商巫毒娃娃在夜晚扔进地牢能再召骷髅王。" },
    { name: "松露", img: "Truffle.png", cat: "NPC", rarity: "白色", damage: "", source: "困难模式在发光蘑菇生物群系（地表人工蘑菇环境）等待", desc: "卖蘑菇长矛、蘑菇矿锭相关装备，召唤/近战可用。" },
    { name: "派对女孩", img: "Party_Girl.png", cat: "NPC", rarity: "白色", damage: "", source: "已有 8 名NPC后每天小概率到访", desc: "卖泡泡机、彩带、烟花等派对用品，纯欢乐型NPC。" },
    { name: "税收官", img: "Tax_Collector.png", cat: "NPC", rarity: "白色", damage: "", source: "用地狱的净化粉净化痛苦鬼魂", desc: "定期向其他NPC收税并把钱存给你，躺赚党最爱。" },
    { name: "蒸汽朋克人", img: "Steampunker.png", cat: "NPC", rarity: "白色", damage: "", source: "击败任意一个机械BOSS后入住", desc: "卖环境改造枪、齿轮、传送带，改造生态和建设党神器。" },
    { name: "机器侠", img: "Cyborg.png", cat: "NPC", rarity: "白色", damage: "", source: "击败世纪之花后入住", desc: "卖火箭发射器、月球门、传送到回路的电子元件。" },
    { name: "发型师", img: "Stylist.png", cat: "NPC", rarity: "白色", damage: "", source: "在蜘蛛洞（洞穴蛛网区）找到被捆绑的她", desc: "免费改发型、卖染发剂，蜘蛛洞救出后入住。" },
    { name: "渔夫", img: "Angler.png", cat: "NPC", rarity: "白色", damage: "", source: "在海边（沙滩）睡觉的小孩处对话触发", desc: "每天发布钓鱼任务，给鱼竿、饰品和宠物奖励，钓鱼玩法核心。" },
    { name: "酒馆老板", img: "Tavernkeep.png", cat: "NPC", rarity: "白色", damage: "", source: "击败哥布林军队后在世界各处随机出现", desc: "用护卫奖章兑换撒旦军队套装，卖埃特尼亚水晶座开启塔防事件。" },
    { name: "动物学家", img: "Zoologist.png", cat: "NPC", rarity: "白色", damage: "", source: "怪物图鉴填写进度达到 10%", desc: "卖怪物图鉴、动物相关物品，解锁进度越高货越全。" },
    { name: "高尔夫球手", img: "Golfer.png", cat: "NPC", rarity: "白色", damage: "", source: "在高尔夫洞穴（地下找到）解救", desc: "卖高尔夫球杆、球座和旗帜，打球赚金币。" },
    { name: "圣诞老人", img: "Santa_Claus.png", cat: "NPC", rarity: "白色", damage: "", source: "击败雪地军团后的圣诞节期间出现", desc: "卖圣诞套装和装饰，节日限定NPC，节日结束离开。" },
    { name: "骷髅商人", img: "Skeleton_Merchant.png", cat: "NPC", rarity: "白色", damage: "", source: "夜晚在洞穴层随机遇到（不入住）", desc: "在地下闲逛的骷髅商贩，卖洞窟探险用品，罕见而有趣。" }
  ],

  /* ==========================================================
     职业攻略：四大职业全流程装备与饰品
     复制任意一整段 { ... } 可新增职业；每个 stage 是一个阶段；
     gear 里的 tag 只能填：武器 / 护甲 / 饰品 / 弹药
     ========================================================== */
  classes: [
    {
      id: "melee",
      name: "战士",
      icon: "🛡️",
      intro: "高血高防、贴脸输出，武器种类最丰富。手机端锁定目标后边走位边砍，操作压力最小，新手首选。",
      stages: [
        {
          stage: "开荒期（第一天 ~ 骷髅王前）",
          gear: [
            { n: "铜短剑 → 矿石剑", img: "Copper_Shortsword.png", tag: "武器", d: "开局自带，挖到银/钨矿立刻升级矿剑。" },
            { n: "附魔回旋镖", img: "Enchanted_Boomerang.png", tag: "武器", d: "地下宝箱开出，可穿墙，肉前最稳过渡武器。" },
            { n: "村正", img: "Muramasa.png", tag: "武器", d: "地牢金锁盒，攻速极快，永夜刃材料。" },
            { n: "银/钨套 → 暗影/猩红套", img: "Silver_Helmet.png", tag: "护甲", d: "按矿石进度升级；打完世吞/克脑做高级套。" },
            { n: "云朵瓶", img: "Cloud_in_a_Bottle.png", tag: "饰品", d: "二段跳，前期机动性神器。" },
            { n: "赫尔墨斯靴", img: "Hermes_Boots.png", tag: "饰品", d: "地下宝箱，跑速提升，闪电靴材料。" },
            { n: "克苏鲁之盾", img: "Shield_of_Cthulhu.png", tag: "饰品", d: "专家克眼宝藏袋，冲刺带无敌帧。" },
            { n: "蠕虫围巾", img: "Worm_Scarf.png", tag: "饰品", d: "专家世吞宝藏袋，常驻 17% 减伤。" }
          ]
        },
        {
          stage: "肉前毕业（地狱备战血肉墙）",
          gear: [
            { n: "炽焰巨剑", img: "Fiery_Greatsword.png", tag: "武器", d: "狱石锭合成，范围大、伤害高，永夜刃材料。" },
            { n: "永夜刃", img: "Night's_Edge.png", tag: "武器", d: "四剑合成，肉前最强宽刃剑。" },
            { n: "熔岩套", img: "Molten_Helmet.png", tag: "护甲", d: "狱石锭制作，肉前防御天花板。" },
            { n: "闪电靴", img: "Lightning_Boots.png", tag: "饰品", d: "赫尔墨斯靴+云瓶等合成，跑图飞起。" }
          ]
        },
        {
          stage: "困难模式初期（三矿 ~ 机械三王）",
          gear: [
            { n: "断钢剑", img: "Excalibur.png", tag: "武器", d: "12 神圣锭合成，三王后主力。" },
            { n: "原版永夜刃", img: "True_Night's_Edge.png", tag: "武器", d: "永夜刃+断裂英雄剑合成，泰拉刃材料。" },
            { n: "精金/钛金套", img: "Adamantite_Mask.png", tag: "护甲", d: "三矿最高档，优先做近战头（Mask）。" },
            { n: "天使之翼", img: "Angel_Wings.png", tag: "饰品", d: "羽毛+飞翔之魂，肉后必做机动装备。" },
            { n: "战士徽章", img: "Warrior_Emblem.png", tag: "饰品", d: "血肉墙掉落，近战伤害 +15%。" }
          ]
        },
        {
          stage: "世纪之花后",
          gear: [
            { n: "泰拉刃", img: "Terra_Blade.png", tag: "武器", d: "原版断钢剑+原版永夜刃合成，剑气横扫。" },
            { n: "死神镰刀", img: "Death_Sickle.png", tag: "武器", d: "日食死神掉落，穿墙镰刀，神庙好帮手。" },
            { n: "乌龟套", img: "Turtle_Helmet.png", tag: "护甲", d: "叶绿锭+海龟壳，反弹伤害，肉盾首选。" },
            { n: "甲虫套", img: "Beetle_Helmet.png", tag: "护甲", d: "乌龟套+甲虫鞘翅升级，打月亮领主前的毕业甲。" },
            { n: "十字章护盾", img: "Ankh_Shield.png", tag: "饰品", d: "免疫击退与十几种负面状态，全程可用。" }
          ]
        },
        {
          stage: "毕业期（月亮领主）",
          gear: [
            { n: "彩虹猫之刃", img: "Meowmere.png", tag: "武器", d: "月亮领主掉落，弹跳猫头剑气。" },
            { n: "狂星之怒", img: "Star_Wrath.png", tag: "武器", d: "月亮领主掉落，落星剑气。" },
            { n: "天顶剑", img: "Zenith.png", tag: "武器", d: "10 把剑合成，全游戏最终追求。" },
            { n: "耀斑套", img: "Solar_Flare_Helmet.png", tag: "护甲", d: "日耀柱夜明锭制作，近战毕业甲。" },
            { n: "天界壳", img: "Celestial_Shell.png", tag: "饰品", d: "全属性加成+变身，一格顶五格。" },
            { n: "毁灭者徽章", img: "Destroyer_Emblem.png", tag: "饰品", d: "复仇者徽章升级，全职业暴击毕业饰品。" }
          ]
        }
      ]
    },
    {
      id: "ranger",
      name: "射手",
      icon: "🏹",
      intro: "用弓箭和枪械远程输出，安全距离作战，但要持续备足弹药。手机版自动瞄准加持下体验极佳，推荐度第二。",
      stages: [
        {
          stage: "开荒期（第一天 ~ 骷髅王前）",
          gear: [
            { n: "木弓 → 矿石弓", img: "Wooden_Bow.png", tag: "武器", d: "开局用木头做，逐步升级矿石弓。" },
            { n: "燧石枪", img: "Flintlock_Pistol.png", tag: "武器", d: "地牢金箱/军火商，第一把像样的枪。" },
            { n: "迷你鲨", img: "Minishark.png", tag: "武器", d: "军火商 35 金币，肉前持续输出之王。" },
            { n: "骷髅套", img: "Necro_Helmet.png", tag: "护甲", d: "地牢骨头合成，远程加成实用。" },
            { n: "云朵瓶", img: "Cloud_in_a_Bottle.png", tag: "饰品", d: "二段跳拉距离。" },
            { n: "蠕虫围巾", img: "Worm_Scarf.png", tag: "饰品", d: "常驻减伤，射手身板脆更需要。" }
          ]
        },
        {
          stage: "肉前毕业（地狱备战血肉墙）",
          gear: [
            { n: "凤凰爆破枪", img: "Phoenix_Blaster.png", tag: "武器", d: "地狱暗影箱开出，肉前最强手枪。" },
            { n: "蜂膝弓", img: "The_Bee's_Knees.png", tag: "武器", d: "蜂王掉落，蜂群箭雨伤害爆表。" },
            { n: "熔岩套", img: "Molten_Helmet.png", tag: "护甲", d: "射手通用的高防过渡甲。" },
            { n: "闪电靴", img: "Lightning_Boots.png", tag: "饰品", d: "风筝走位核心装备。" }
          ]
        },
        {
          stage: "困难模式初期（三矿 ~ 机械三王）",
          gear: [
            { n: "代达罗斯风暴弓", img: "Daedalus_Stormbow.png", tag: "武器", d: "神圣宝箱怪掉落，天降箭雨，打三王神器。" },
            { n: "神圣箭", img: "Holy_Arrow.png", tag: "弹药", d: "神圣锭+妖精尘+独角兽角合成，配风暴弓封神。" },
            { n: "巨兽鲨", img: "Megashark.png", tag: "武器", d: "迷你鲨升级版，三王后主力枪。" },
            { n: "神圣套（远程头）", img: "Hallowed_Headgear.png", tag: "护甲", d: "神圣锭制作，远程输出毕业过渡。" },
            { n: "射手徽章", img: "Ranger_Emblem.png", tag: "饰品", d: "血肉墙掉落，远程伤害 +15%。" },
            { n: "天使之翼", img: "Angel_Wings.png", tag: "饰品", d: "肉后必做，空中走位。" }
          ]
        },
        {
          stage: "世纪之花后",
          gear: [
            { n: "海啸", img: "Tsunami.png", tag: "武器", d: "猪龙鱼公爵掉落，5 箭齐发只耗 1 支。" },
            { n: "叶绿连弩", img: "Chlorophyte_Shotbow.png", tag: "武器", d: "叶绿锭合成，连发追踪利器。" },
            { n: "叶绿弹", img: "Chlorophyte_Bullet.png", tag: "弹药", d: "自动追踪目标，手残福音。" },
            { n: "蘑菇套", img: "Shroomite_Headgear.png", tag: "护甲", d: "叶绿锭+发光蘑菇，隐身狙击毕业甲。" },
            { n: "狙击镜", img: "Rifle_Scope.png", tag: "饰品", d: "地牢狙击骷髅掉落，暴击与视野提升。" }
          ]
        },
        {
          stage: "毕业期（月亮领主）",
          gear: [
            { n: "幻象弓", img: "Phantasm.png", tag: "武器", d: "月亮领主掉落，四连发箭雨，远程毕业。" },
            { n: "S.D.M.G.", img: "S.D.M.G..png", tag: "武器", d: "月亮领主掉落，50% 概率省弹的最终机枪。" },
            { n: "星旋套", img: "Vortex_Helmet.png", tag: "护甲", d: "星旋柱夜明锭制作，隐身狙击毕业甲。" },
            { n: "毁灭者徽章", img: "Destroyer_Emblem.png", tag: "饰品", d: "全职业暴击毕业饰品。" },
            { n: "十字章护盾", img: "Ankh_Shield.png", tag: "饰品", d: "免疫击退，输出节奏不断。" }
          ]
        }
      ]
    },
    {
      id: "mage",
      name: "法师",
      icon: "🔮",
      intro: "弹幕华丽、爆发最高，但要管理魔力与药水，身板偏脆。适合喜欢特效和操作感的玩家。",
      stages: [
        {
          stage: "开荒期（第一天 ~ 骷髅王前）",
          gear: [
            { n: "星怒", img: "Starfury.png", tag: "武器", d: "浮空岛宝箱，召唤落星，肉前优秀法器。" },
            { n: "水箭魔法书", img: "Water_Bolt.png", tag: "武器", d: "地牢书架取用，反弹弹幕。" },
            { n: "陨石套", img: "Meteor_Helmet.png", tag: "护甲", d: "陨石锭合成，配太空枪省魔力。" },
            { n: "克苏鲁之盾", img: "Shield_of_Cthulhu.png", tag: "饰品", d: "法师身板脆，冲刺无敌帧保命。" },
            { n: "蠕虫围巾", img: "Worm_Scarf.png", tag: "饰品", d: "常驻 17% 减伤。" }
          ]
        },
        {
          stage: "肉前毕业（地狱备战血肉墙）",
          gear: [
            { n: "蜂蜂枪", img: "Bee_Gun.png", tag: "武器", d: "蜂王掉落，蜂群弹幕。" },
            { n: "恶魔锄刀", img: "Demon_Scythe.png", tag: "武器", d: "地狱恶魔掉落，穿透镰刀。" },
            { n: "火之花", img: "Flower_of_Fire.png", tag: "武器", d: "地狱恶魔掉落，火球高伤。" },
            { n: "丛林套", img: "Jungle_Hat.png", tag: "护甲", d: "丛林孢子+毒刺合成，法师肉前毕业甲。" },
            { n: "闪电靴", img: "Lightning_Boots.png", tag: "饰品", d: "走位保命核心。" }
          ]
        },
        {
          stage: "困难模式初期（三矿 ~ 机械三王）",
          gear: [
            { n: "水晶蛇", img: "Crystal_Serpent.png", tag: "武器", d: "神圣之地钓鱼获得，爆裂水晶好用。" },
            { n: "雨云魔杖", img: "Nimbus_Rod.png", tag: "武器", d: "雨天云怪掉落，放云持续输出。" },
            { n: "神圣套（魔法头）", img: "Hallowed_Helmet.png", tag: "护甲", d: "神圣锭制作，魔法减耗与加成。" },
            { n: "巫师徽章", img: "Sorcerer_Emblem.png", tag: "饰品", d: "血肉墙掉落，魔法伤害 +15%。" },
            { n: "魔力花", img: "Mana_Flower.png", tag: "饰品", d: "自动喝魔力药水，法师生涯必需。" },
            { n: "天使之翼", img: "Angel_Wings.png", tag: "饰品", d: "空中走位躲弹幕。" }
          ]
        },
        {
          stage: "世纪之花后",
          gear: [
            { n: "剃刀松", img: "Razorpine.png", tag: "武器", d: "霜月掉落，超高射速松针。" },
            { n: "泡泡枪", img: "Bubble_Gun.png", tag: "武器", d: "猪龙鱼公爵掉落，弹幕海洋。" },
            { n: "幽灵套", img: "Spectre_Mask.png", tag: "护甲", d: "幽灵锭制作，输出/吸血两套头盔。" },
            { n: "复仇者徽章", img: "Avenger_Emblem.png", tag: "饰品", d: "战士徽章+灵魂合成，全伤害 +12%。" }
          ]
        },
        {
          stage: "毕业期（月亮领主）",
          gear: [
            { n: "最终棱镜", img: "Last_Prism.png", tag: "武器", d: "月亮领主掉落，聚能光柱爆发之王。" },
            { n: "星云烈焰", img: "Nebula_Blaze.png", tag: "武器", d: "月亮领主掉落，追踪火球。" },
            { n: "星云套", img: "Nebula_Helmet.png", tag: "护甲", d: "星云柱夜明锭制作，魔法毕业甲。" },
            { n: "魔力花", img: "Mana_Flower.png", tag: "饰品", d: "站桩输出的弹药保障。" },
            { n: "毁灭者徽章", img: "Destroyer_Emblem.png", tag: "饰品", d: "暴击毕业饰品。" }
          ]
        }
      ]
    },
    {
      id: "summon",
      name: "召唤师",
      icon: "🐝",
      intro: "召唤物自动作战，本体专心走位，还能用鞭子给敌人上增伤标记。前期偏弱后期极强，推荐二周目体验。",
      stages: [
        {
          stage: "开荒期（第一天 ~ 骷髅王前）",
          gear: [
            { n: "雀杖", img: "Finch_Staff.png", tag: "武器", d: "世界树生命木箱，开局第一只召唤物。" },
            { n: "荆棘鞭", img: "Snapthorn.png", tag: "武器", d: "丛林材料合成，肉前就能做的鞭子。" },
            { n: "蠕虫围巾", img: "Worm_Scarf.png", tag: "饰品", d: "本体脆皮，减伤必备。" },
            { n: "克苏鲁之盾", img: "Shield_of_Cthulhu.png", tag: "饰品", d: "冲刺躲伤害，走位核心。" }
          ]
        },
        {
          stage: "肉前毕业（地狱备战血肉墙）",
          gear: [
            { n: "小鬼法杖", img: "Imp_Staff.png", tag: "武器", d: "狱石锭合成，火焰小鬼持续输出。" },
            { n: "蜜蜂套", img: "Bee_Headgear.png", tag: "护甲", d: "蜂蜡合成，召唤数量 +1 的关键。" },
            { n: "荆棘鞭", img: "Snapthorn.png", tag: "武器", d: "挥鞭给召唤物增伤标记。" }
          ]
        },
        {
          stage: "困难模式初期（三矿 ~ 机械三王）",
          gear: [
            { n: "刃杖", img: "Blade_Staff.png", tag: "武器", d: "史莱姆皇后掉落，穿甲小刀刺客。" },
            { n: "蜘蛛法杖", img: "Spider_Staff.png", tag: "武器", d: "蜘蛛洞蛛牙合成，多蜘蛛齐上。" },
            { n: "蜘蛛套", img: "Spider_Mask.png", tag: "护甲", d: "蛛丝+蛛牙制作，召唤师肉后第一甲。" },
            { n: "火鞭", img: "Firecracker.png", tag: "武器", d: "机械 BOSS 掉落，爆炸标记增伤。" },
            { n: "天使之翼", img: "Angel_Wings.png", tag: "饰品", d: "本体走位保命。" }
          ]
        },
        {
          stage: "世纪之花后",
          gear: [
            { n: "矮人法杖", img: "Pygmy_Staff.png", tag: "武器", d: "世纪之花掉落，三矮人投矛。" },
            { n: "杜兰达尔", img: "Durendal.png", tag: "武器", d: "世纪之花掉落，攻速鞭。" },
            { n: "晨星鞭", img: "Morning_Star.png", tag: "武器", d: "地牢怪物掉落，高伤暴击鞭。" },
            { n: "阴森套", img: "Spooky_Helmet.png", tag: "护甲", d: "南瓜月阴森木制作，召唤毕业甲。" },
            { n: "圣甲虫护符", img: "Papyrus_Scarab.png", tag: "饰品", d: "召唤伤害与数量提升的核心饰品。" }
          ]
        },
        {
          stage: "毕业期（月亮领主）",
          gear: [
            { n: "泰拉棱镜", img: "Terraprisma.png", tag: "武器", d: "白天击杀光之女皇必掉，最强召唤物。" },
            { n: "星尘之龙法杖", img: "Stardust_Dragon_Staff.png", tag: "武器", d: "月亮领主掉落，长龙碾压全场。" },
            { n: "星尘细胞法杖", img: "Stardust_Cell_Staff.png", tag: "武器", d: "分裂细胞体，持续压制。" },
            { n: "星尘套", img: "Stardust_Helmet.png", tag: "护甲", d: "星尘柱夜明锭制作，召唤毕业甲。" },
            { n: "万花筒", img: "Kaleidoscope.png", tag: "武器", d: "光之女皇掉落，毕业增伤鞭。" },
            { n: "天界壳", img: "Celestial_Shell.png", tag: "饰品", d: "近战加成对鞭子也有效。" }
          ]
        }
      ]
    }
  ],

  /* ==========================================================
     顶部搜索框的「文章索引」：
     新手指南和 Wiki 是写死在 HTML 里的，加新文章时在这里
     补一条 { title: "文章标题", href: "页面.html#锚点", type: "分类" }
     ========================================================== */
  pages: [
    { title: "手机版必调的 5 个设置", href: "guides.html#g1", type: "新手指南" },
    { title: "第一天晚上怎么活下来", href: "guides.html#g2", type: "新手指南" },
    { title: "NPC 住房条件详解", href: "guides.html#g3", type: "新手指南" },
    { title: "四大职业怎么选", href: "guides.html#g4", type: "新手指南" },
    { title: "矿石路线与入侵事件应对", href: "guides.html#g5", type: "新手指南" },
    { title: "开荒流程总览 Checklist", href: "guides.html#g6", type: "新手指南" },
    { title: "NPC 资料词条", href: "wiki.html#wiki-npc", type: "Wiki" },
    { title: "生物群落资料", href: "wiki.html#wiki-biome", type: "Wiki" },
    { title: "随机事件资料", href: "wiki.html#wiki-event", type: "Wiki" },
    { title: "钓鱼系统资料", href: "wiki.html#wiki-fishing", type: "Wiki" }
  ]
};
