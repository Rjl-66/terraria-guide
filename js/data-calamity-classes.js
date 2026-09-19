/* ============================================================
   灾厄模组 · 五大职业攻略数据
   战士 / 射手 / 法师 / 召唤师 / 盗贼
   每个职业的阶段以灾厄模组进度为主线。
   ============================================================ */

window.TERRARIA_CALAMITY_CLASSES = [
  {
    id: "melee",
    name: "战士",
    icon: "🛡️",
    intro: "灾厄近战：高血高防贴脸输出，武器挥出元素剑气与龙卷。月后以血炎/弑神者套装为轴，终局魔影套装+龙破斩碾压一切。",
    stages: [
      {
        stage: "开荒期（BOSS前 · 灾厄）",
        gear: [
          { n: "海耀之刃", img: "Seashine_Sword.png", tag: "武器", d: "胜潮锭合成的早期短剑，剑气带水元素，性价比极高。" },
          { n: "三旋回旋镖", img: "Trimarang.png", tag: "武器", d: "沙漠材料合成，一次掷出三发回旋镖。" },
          { n: "海胆链枷", img: "Urchin_Mace.png", tag: "武器", d: "海滩海胆制作，链枷连段前期输出稳定。" },
          { n: "星怒", img: "Starfury.png", tag: "武器", d: "天空岛宝箱开出，落星砸怪，前期天花板。" },
          { n: "附魔剑", img: "Enchanted_Sword.png", tag: "武器", d: "附魔剑冢获得，远程剑气省操作。" },
          { n: "胜潮套装", img: "Victide_armor.png", tag: "护甲", d: "胜潮锭合成，全职业开荒通用过渡甲。" },
          { n: "克苏鲁之盾", img: "Shield_of_Cthulhu.png", tag: "饰品", d: "克苏鲁之眼掉落，冲刺保命神器。" },
          { n: "蛙腿", img: "Frog_Leg.png", tag: "饰品", d: "跳跃高度与落地速度双提升，机动基础件。" },
          { n: "闪电靴", img: "Lightning_Boots.png", tag: "饰品", d: "跑鞋进阶件，跑图走位必备。" },
          { n: "猛爪手套", img: "Feral_Claws.png", tag: "饰品", d: "丛林宝箱获得，近战攻速核心，一直用到后期合成。" },
          { n: "钨钢屏障生成仪", img: "Rover_Drive.png", tag: "饰品", d: "钨钢BOSS掉落，护盾抵消伤害。" },
          { n: "蟹爪壳", img: "Craw_Carapace.png", tag: "饰品", d: "巨像蟹掉落，提升防御与击退抗性。" }
        ]
      },
      {
        stage: "肉前毕业（地狱备战血肉墙 · 灾厄）",
        gear: [
          { n: "破碎方舟", img: "Fractured_Ark.png", tag: "武器", d: "地牢锁箱获得，发射大范围剑气，肉前神器。" },
          { n: "大动脉", img: "Aorta.png", tag: "武器", d: "猩红材料长矛，戳刺回血续航。" },
          { n: "暗黑长戟", img: "Dark_Lance.png", tag: "武器", d: "地狱暗影箱开出，长柄高伤。" },
          { n: "剑锋之誓约", img: "Bladecrest_Oathsword.png", tag: "武器", d: "魔金/猩红材料合成，剑气连发。" },
          { n: "白骨手套", img: "Bone_Glove.png", tag: "武器", d: "骷髅王宝藏袋开出，交叉骨刺远程消耗。" },
          { n: "熔岩套", img: "Molten_Helmet.png", tag: "护甲", d: "狱石锭合成，肉前防御天花板。" },
          { n: "斯塔提斯套装", img: "Statigel_armor.png", tag: "护甲", d: "史莱姆王材料凝胶合成，冲刺与全属性加成。" },
          { n: "反击围巾", img: "Counter_Scarf.png", tag: "饰品", d: "血肉墙掉落，受击冲刺反击。" },
          { n: "泰拉闪耀靴", img: "Terraspark_Boots.png", tag: "饰品", d: "霜花靴终极合成，水陆两用跑速拉满。" },
          { n: "黑曜石护盾", img: "Obsidian_Shield.png", tag: "饰品", d: "黑曜石头骨+钴蓝盾合成，免烫免击退。" },
          { n: "岩浆石", img: "Magma_Stone.png", tag: "饰品", d: "地狱蝙蝠/熔岩史莱姆掉落，近战附带火焰。" }
        ]
      },
      {
        stage: "三王前（困难模式初期 · 灾厄）",
        gear: [
          { n: "锁链断头台", img: "Chain_Guillotines.png", tag: "武器", d: "神圣锭+暗影之魂合成，追踪链刃环绕。" },
          { n: "彗星陨刃", img: "Comet_Quasher.png", tag: "武器", d: "冰雪材料巨剑，挥出彗星弹幕。" },
          { n: "风暴军刀", img: "Storm_Saber.png", tag: "武器", d: "雷云材料打造，剑气带电连打。" },
          { n: "炼狱", img: "Inferna_Cutter.png", tag: "武器", d: "狱石武器升级，火柱封路。" },
          { n: "暗光巨剑", img: "Darklight_Greatsword.png", tag: "武器", d: "寒元锭+光暗魂合成，剑光双形态。" },
          { n: "精金套", img: "Adamantite_Helmet.png", tag: "护甲", d: "精金锭合成，肉后三矿高级甲。" },
          { n: "水晶刺客套装", img: "Crystal_Assassin_armor.png", tag: "护甲", d: "水晶三件套合成，全职业通用闪避甲。" },
          { n: "融合之脑", img: "Amalgamated_Brain.png", tag: "饰品", d: "混乱之脑升级版，闪避+全属性。" },
          { n: "血蠕虫围巾", img: "Bloody_Worm_Scarf.png", tag: "饰品", d: "血肉墙围巾升级，减伤核心。" },
          { n: "战士徽章", img: "Warrior_Emblem.png", tag: "饰品", d: "血肉墙掉落，近战伤害 +15%。" },
          { n: "强力手套", img: "Power_Glove.png", tag: "饰品", d: "猛爪手套+泰坦手套合成，攻速击退双提升。" },
          { n: "月亮石", img: "Moon_Stone.png", tag: "饰品", d: "日月蚀怪物掉落，夜间全属性，后续合成天界壳。" }
        ]
      },
      {
        stage: "石巨人前（丛林神庙前 · 灾厄）",
        gear: [
          { n: "远古方舟", img: "Ark_of_the_Ancients.png", tag: "武器", d: "破碎方舟+断裂英雄剑升级，宽剑气清场。" },
          { n: "凋亡屠刀", img: "Blighted_Cleaver.png", tag: "武器", d: "枯萎材料大剑，凋零弹幕追踪。" },
          { n: "圣时之锤", img: "Pwnagehammer.png", tag: "武器", d: "神圣锭回旋锤，高爆发砸地。" },
          { n: "吸血鬼刀", img: "Vampire_Knives.png", tag: "武器", d: "地牢猩红箱获得，命中回血，站撸资本。" },
          { n: "海龟套", img: "Turtle_Helmet.png", tag: "护甲", d: "叶绿锭+海龟壳合成，高防反伤。" },
          { n: "掠夺者套装", img: "Reaver_armor.png", tag: "护甲", d: "灾厄全能过渡甲，移速攻速加成实用。" },
          { n: "机械手套", img: "Mechanical_Glove.png", tag: "饰品", d: "强力手套+复仇者徽章，近战输出核心。" },
          { n: "阿斯加德之英勇", img: "Asgard's_Valor.png", tag: "饰品", d: "黑曜石护盾升级，冲刺+免疫多数减益。" },
          { n: "天使之靴", img: "Angel_Treads.png", tag: "饰品", d: "翼靴过渡件，飞行时间增加。" },
          { n: "英雄护盾", img: "Hero_Shield.png", tag: "饰品", d: "十字章护盾+血肉指关节，嘲讽减伤团队肉盾。" }
        ]
      },
      {
        stage: "月领主前（月亮领主前 · 灾厄）",
        gear: [
          { n: "熵阔剑", img: "Entropic_Claymore.png", tag: "武器", d: "熵能材料巨剑，暗属性剑气高伤。" },
          { n: "海爵剑", img: "Briny_Baron.png", tag: "武器", d: "利维坦与阿娜希塔材料，水压连斩。" },
          { n: "崇高誓约之剑", img: "Exalted_Oathblade.png", tag: "武器", d: "剑锋之誓约升级版，圣光剑气。" },
          { n: "庇护之刃", img: "Aegis_Blade.png", tag: "武器", d: "神圣材料短剑，弹幕护体。" },
          { n: "卢克雷西亚", img: "Lucrecia.png", tag: "武器", d: "硫火材料飞刀，追踪穿刺。" },
          { n: "甲虫套", img: "Beetle_Helmet.png", tag: "护甲", d: "海龟套+甲虫鞘翅升级，月前近战毕业甲。" },
          { n: "渊泉套装", img: "Hydrothermic_armor.png", tag: "护甲", d: "深渊+熔岩材料合成，回血增伤灾厄甲。" },
          { n: "天界壳", img: "Celestial_Shell.png", tag: "饰品", d: "月亮石+太阳石合体，昼夜全程全属性。" },
          { n: "烈火手套", img: "Fire_Gauntlet.png", tag: "饰品", d: "机械手套+岩浆石，近战攻速火伤毕业件。" },
          { n: "阴阳吸星石", img: "The_Absorber.png", tag: "饰品", d: "嘉登材料合成，减伤+续航毕业件。" },
          { n: "至高统治之盾", img: "Shield_of_the_High_Ruler.png", tag: "饰品", d: "英雄护盾升级，冲撞伤害与高额减伤。" },
          { n: "高飞勋章", img: "Soaring_Insignia.png", tag: "饰品", d: "蛾怪翅膀材料合成，延长无限飞行时间。" }
        ]
      },
      {
        stage: "月领主后 ~ 亵渎天神前",
        gear: [
          { n: "元素方舟", img: "Ark_of_the_Elements.png", tag: "武器", d: "灾厄肉后近战起手神器，挥出元素剑气。" },
          { n: "制裁大剑", img: "Greatsword_of_Judgement.png", tag: "武器", d: "圣域守卫材料合成，高伤大剑。" },
          { n: "流光刺", img: "Lightspeed.png", tag: "武器", d: "超高速突进短剑，输出手感极佳。" },
          { n: "耀斑套装", img: "Solar_Flare_Helmet.png", tag: "护甲", d: "原版月后毕业甲，灾厄前期依然能打。" },
          { n: "归一心元石", img: "The_Community.png", tag: "饰品", d: "全属性增益核心，灾厄毕业饰品链一环。" },
          { n: "正义战旗", img: "Warbanner_of_the_Righteous.png", tag: "饰品", d: "附近无敌怪时全属性提升，站场输出标配。" },
          { n: "烈火手套", img: "Fire_Gauntlet.png", tag: "饰品", d: "近战攻速伤害双提升。" }
        ]
      },
      {
        stage: "吞噬诸神者前",
        gear: [
          { n: "女妖之爪", img: "Banshee_Hook.png", tag: "武器", d: "钩爪连枷，收放间多段伤害。" },
          { n: "新月链刃", img: "Crescent_Moon.png", tag: "武器", d: "月牙链刃，横扫清场。" },
          { n: "伽利略短剑", img: "Galileo_Gladius.png", tag: "武器", d: "重力剑气，抛物线打击。" },
          { n: "海神之馈赠", img: "Neptune's_Bounty.png", tag: "武器", d: "水压矛输出稳定。" },
          { n: "血炎套装", img: "Bloodflare_armor.png", tag: "护甲", d: "灾厄中期主力甲，回复与输出兼顾。" },
          { n: "灾劫之尖啸", img: "Affliction.png", tag: "饰品", d: "全减抗核心饰品，后期基本不摘。" },
          { n: "进升证章", img: "Ascendant_Insignia.png", tag: "饰品", d: "翼靴合体+落星无敌帧，机动毕业件。" },
          { n: "极乐之庇护", img: "Elysian_Aegis.png", tag: "饰品", d: "圣域守卫材料，冲锋护盾+减伤。" }
        ]
      },
      {
        stage: "耶龙前",
        gear: [
          { n: "寒宙弹刃", img: "Cosmic_Discharge.png", tag: "武器", d: "冰晶弹射，控场优秀。" },
          { n: "鬼妖村正", img: "Murasama.png", tag: "武器", d: "嘉登剧情武器，超高攻速斩击。" },
          { n: "湮灭者", img: "The_Obliterator.png", tag: "武器", d: "回旋大刃，覆盖面大。" },
          { n: "远古弑神者套装", img: "God_Slayer_armor.png", tag: "护甲", d: "弑神者材料合成，闪避+减伤毕业甲。" },
          { n: "阿斯加德之庇护", img: "Asgardian_Aegis.png", tag: "饰品", d: "圣盾终极升级，免死+冲撞。" },
          { n: "聚合之脑", img: "The_Amalgam.png", tag: "饰品", d: "融合之脑升级，闪避强化。" },
          { n: "元素之握", img: "Elemental_Gauntlet.png", tag: "饰品", d: "近战毕业手套。" },
          { n: "血神圣杯", img: "Chalice_of_the_Blood_God.png", tag: "饰品", d: "灾厄最强生命回复饰品之一。" }
        ]
      },
      {
        stage: "至尊灾厄/终焉机甲前（灾厄）",
        gear: [
          { n: "盖尔大剑", img: "Ark_of_the_Cosmos.png", tag: "武器", d: "银河材料巨剑，剑气铺场压制。" },
          { n: "携序之剑", img: "Orderbringer.png", tag: "武器", d: "圣金源材料光刃，连斩高爆。" },
          { n: "焚灭天惩", img: "The_Burning_Sky.png", tag: "武器", d: "亵渎材料巨剑，火雨天降。" },
          { n: "天顶剑", img: "Zenith.png", tag: "武器", d: "原版终极剑，多剑合璧弹幕爆炸。" },
          { n: "古圣金源套装", img: "Auric_Tesla_armor.png", tag: "护甲", d: "圣金源锭合成，全职业终局前毕业甲。" },
          { n: "月亮行者翼靴", img: "Seraph_Tracers.png", tag: "饰品", d: "翼靴终极合体，飞行与移速拉满。" },
          { n: "神之壁垒", img: "Rampart_of_Deities.png", tag: "饰品", d: "击杀回血+减伤，终局生存件。" },
          { n: "辐辉", img: "Radiance.png", tag: "饰品", d: "全属性光环，攻防一体。" },
          { n: "元素之握", img: "Elemental_Gauntlet.png", tag: "饰品", d: "烈火手套终极升级，近战毕业手套。" }
        ]
      },
      {
        stage: "终局（至尊灾厄后）",
        gear: [
          { n: "龙破斩", img: "Draconic_Destruction.png", tag: "武器", d: "耶龙材料巨剑，斩出龙卷。" },
          { n: "无限大地", img: "Earth.png", tag: "武器", d: "终局悠悠球，覆盖全场。" },
          { n: "红日", img: "Red_Sun.png", tag: "武器", d: "落日斩击，高爆发。" },
          { n: "真·圣骑士魔锤", img: "Triactis'_True_Paladinian_Mage-Hammer_of_Might.png", tag: "武器", d: "终局锤，砸地爆冲波。" },
          { n: "魔影套装", img: "Demonshade_armor.png", tag: "护甲", d: "灾厄终局毕业甲，超高攻速加成。" },
          { n: "嘉登之心", img: "Draedon's_Heart.png", tag: "饰品", d: "终焉机甲掉落，全属性毕业饰品。" },
          { n: "神之壁垒", img: "Rampart_of_Deities.png", tag: "饰品", d: "击杀回血+减伤，生存毕业件。" },
          { n: "化绵留香石", img: "The_Sponge.png", tag: "饰品", d: "吸收减益转回复，竞技场神器。" }
        ]
      }
    ]
  },
  {
    id: "ranger",
    name: "射手",
    icon: "🏹",
    intro: "灾厄远程：追踪猎枪、辐射链锯枪、全天候机枪，弹药多样化。以雷光军团套装与血炎套装为轴，终局大比目鱼炮火力天花板。",
    stages: [
      {
        stage: "开荒期（BOSS前 · 灾厄）",
        gear: [
          { n: "恶魔弓", img: "Demon_Bow.png", tag: "武器", d: "恶魔矿合成的早期弓，射速快手感好。" },
          { n: "火花喷射器", img: "Spark_Spreader.png", tag: "武器", d: "地表宝箱获得，火花弹跳连射。" },
          { n: "血雨弓", img: "Blood_Rain_Bow.png", tag: "武器", d: "血月期间合成，血雨从天而降。" },
          { n: "三发猎枪", img: "Boomstick.png", tag: "武器", d: "丛林宝箱获得，三发散弹贴脸高伤。" },
          { n: "雪境暴徒套装", img: "Snow_Ruffian_armor.png", tag: "护甲", d: "冰雪材料合成，远程增伤开荒甲。" },
          { n: "胜潮套装", img: "Victide_armor.png", tag: "护甲", d: "胜潮锭合成，全职业通用过渡甲。" },
          { n: "克苏鲁之盾", img: "Shield_of_Cthulhu.png", tag: "饰品", d: "冲刺保命神器。" },
          { n: "蛙腿", img: "Frog_Leg.png", tag: "饰品", d: "跳跃增幅，走位基础件。" },
          { n: "闪电靴", img: "Lightning_Boots.png", tag: "饰品", d: "跑速核心，放风筝必备。" },
          { n: "鲨牙项链", img: "Shark_Tooth_Necklace.png", tag: "饰品", d: "鲨鱼掉落，箭矢穿甲削防。" },
          { n: "硫海珍嗣", img: "Scions_Curio.png", tag: "饰品", d: "硫海遗爵材料，远程专属增伤。" }
        ]
      },
      {
        stage: "肉前毕业（地狱备战血肉墙 · 灾厄）",
        gear: [
          { n: "雪球机关炮", img: "Flurrystorm_Cannon.png", tag: "武器", d: "雪地地下获得，雪球高速连射。" },
          { n: "射水鱼", img: "Archerfish.png", tag: "武器", d: "丛林/天空箱获得，水柱连射，专克肉山长体。" },
          { n: "烈风", img: "Galeforce.png", tag: "武器", d: "风暴材料合成，风刃箭连发。" },
          { n: "熔火之怒", img: "Molten_Fury.png", tag: "武器", d: "狱石锭弓，熔火箭矢追踪。" },
          { n: "鹅卵石冲击波", img: "Opal_Striker.png", tag: "武器", d: "石头也能当子弹，廉价高伤。" },
          { n: "死灵套", img: "Necro_Helmet.png", tag: "护甲", d: "骨头蛛网合成，20% 概率不耗弹药。" },
          { n: "斯塔提斯套装", img: "Statigel_armor.png", tag: "护甲", d: "史莱姆王材料凝胶合成，全属性加成。" },
          { n: "反击围巾", img: "Counter_Scarf.png", tag: "饰品", d: "血肉墙掉落，受击冲刺反击。" },
          { n: "泰拉闪耀靴", img: "Terraspark_Boots.png", tag: "饰品", d: "水陆两用跑速拉满。" },
          { n: "黑曜石护盾", img: "Obsidian_Shield.png", tag: "饰品", d: "免烫免击退，走位容错。" },
          { n: "原石手镯", img: "Protolith_Bangle.png", tag: "饰品", d: "灾厄饰品，远程伤害与暴击加成。" }
        ]
      },
      {
        stage: "三王前（困难模式初期 · 灾厄）",
        gear: [
          { n: "代达罗斯风暴弓", img: "Daedalus_Stormbow.png", tag: "武器", d: "神圣宝箱怪掉落，箭雨覆盖全场。" },
          { n: "巨兽鲨", img: "Megashark.png", tag: "武器", d: "巨兽鲨材料机枪，三王期标配。" },
          { n: "北辰鹦哥鱼", img: "Polaris_Parrotfish.png", tag: "武器", d: "海洋钓鱼获得，追踪弹连射。" },
          { n: "幻影凤凰", img: "Phantom_Phoenix.png", tag: "武器", d: "火焰材料弓，凤凰俯冲穿透。" },
          { n: "嗡鸣绞轮", img: "Buzzkill.png", tag: "武器", d: "蠕虫材料链锯枪，持续锯杀。" },
          { n: "精金套", img: "Adamantite_Helmet.png", tag: "护甲", d: "精金锭合成，肉后三矿高级甲。" },
          { n: "水晶刺客套装", img: "Crystal_Assassin_armor.png", tag: "护甲", d: "水晶三件套合成，全职业通用闪避甲。" },
          { n: "射手徽章", img: "Ranger_Emblem.png", tag: "饰品", d: "血肉墙掉落，远程伤害 +15%。" },
          { n: "魔法箭袋", img: "Magic_Quiver.png", tag: "饰品", d: "箭速箭伤核心，弓箭流不摘。" },
          { n: "融合之脑", img: "Amalgamated_Brain.png", tag: "饰品", d: "混乱之脑升级，闪避+全属性。" },
          { n: "血蠕虫围巾", img: "Bloody_Worm_Scarf.png", tag: "饰品", d: "减伤核心，走位保命。" },
          { n: "闪避围巾", img: "Evasion_Scarf.png", tag: "饰品", d: "反击围巾升级，概率闪避攻击。" }
        ]
      },
      {
        stage: "石巨人前（丛林神庙前 · 灾厄）",
        gear: [
          { n: "叶绿连弩", img: "Chlorophyte_Shotbow.png", tag: "武器", d: "叶绿锭合成，一次多发连弩。" },
          { n: "巨舰鲨", img: "Megalodon.png", tag: "武器", d: "巨兽鲨升级，水压机枪泼水。" },
          { n: "叶流", img: "Blossom_Flux.png", tag: "武器", d: "世纪之花材料，花瓣弹幕散射。" },
          { n: "锋叶十字弩", img: "Bladedge_Railbow.png", tag: "武器", d: "叶绿材料重弩，穿透高伤。" },
          { n: "九头蛇", img: "Hydra.png", tag: "武器", d: "毒液火箭连发，范围毒爆。" },
          { n: "蘑菇套", img: "Shroomite_Headgear.png", tag: "护甲", d: "叶绿锭+发光蘑菇合成，隐身狙击增伤。" },
          { n: "掠夺者套装", img: "Reaver_armor.png", tag: "护甲", d: "灾厄全能过渡甲，移速加成实用。" },
          { n: "阿斯加德之英勇", img: "Asgard's_Valor.png", tag: "饰品", d: "冲刺+免疫多数减益。" },
          { n: "天使之靴", img: "Angel_Treads.png", tag: "饰品", d: "翼靴过渡件，飞行时间增加。" },
          { n: "神射手胸针", img: "Deadshot_Brooch.png", tag: "饰品", d: "灾厄饰品，远程暴击与射速。" },
          { n: "魔法箭袋", img: "Magic_Quiver.png", tag: "饰品", d: "弓箭流核心件。" }
        ]
      },
      {
        stage: "月领主前（月亮领主前 · 灾厄）",
        gear: [
          { n: "B-GSS：尼德霍格", img: "B-GSS_Nidhogg.png", tag: "武器", d: "嘉登科技+瘟疫装甲镀层合成，追踪龙弹。" },
          { n: "湮阳暝风", img: "Dead_Sun's_Wind.png", tag: "武器", d: "日蚀材料弓，太阳风乱射。" },
          { n: "玷污之疫SMG", img: "Plague_Tainted_SMG.png", tag: "武器", d: "瘟疫材料冲锋枪，瘟疫弹泼洒。" },
          { n: "涡流泡泡枪", img: "Vortexpopper.png", tag: "武器", d: "火星暴乱掉落，泡泡追踪连爆。" },
          { n: "外星霰弹枪", img: "Xenopopper.png", tag: "武器", d: "火星暴乱掉落，霰弹爆发。" },
          { n: "雷光军团套装", img: "Lunic_Corps_armor.png", tag: "护甲", d: "嘉登科技甲，远程加成优秀。" },
          { n: "瘟疫死神套装", img: "Plague_Reaper_armor.png", tag: "护甲", d: "瘟疫材料合成，毒伤增伤。" },
          { n: "狙击瞄准镜", img: "Sniper_Scope.png", tag: "饰品", d: "视野+射程+伤害，狙击核心。" },
          { n: "侦察瞄准镜", img: "Recon_Scope.png", tag: "饰品", d: "狙击镜+箭袋合体，远程毕业件。" },
          { n: "阴阳吸星石", img: "The_Absorber.png", tag: "饰品", d: "嘉登材料合成，减伤+续航。" },
          { n: "天界壳", img: "Celestial_Shell.png", tag: "饰品", d: "昼夜全程全属性。" }
        ]
      },
      {
        stage: "月领主后 ~ 亵渎天神前",
        gear: [
          { n: "发条弓", img: "Clockwork_Bow.png", tag: "武器", d: "三连射弓，手感稳定。" },
          { n: "湮灭千星", img: "Planetary_Annihilation.png", tag: "武器", d: "星辉狙击枪，潜行流爆发。" },
          { n: "雷空猎影", img: "Prideful_Hunter's_Planar_Ripper.png", tag: "武器", d: "追踪猎枪，弹道华丽。" },
          { n: "超辐戮锯", img: "Superradiant_Slaughterer.png", tag: "武器", d: "辐射链锯枪，贴脸泼水。" },
          { n: "雷光军团套装", img: "Lunic_Corps_armor.png", tag: "护甲", d: "雷光军团材料甲，远程加成优秀。" },
          { n: "星旋套", img: "Vortex_Helmet.png", tag: "护甲", d: "原版月后毕业甲，隐身狙击可用。" },
          { n: "侦察瞄准镜", img: "Recon_Scope.png", tag: "饰品", d: "狙击镜+箭袋合体，远程毕业件。" },
          { n: "曙旼始灵", img: "Daawnlight_Spirit_Origin.png", tag: "饰品", d: "白天加成核心，日战输出。" },
          { n: "动力干细胞", img: "Dynamo_Stem_Cells.png", tag: "饰品", d: "受伤回弹药+减耗。" }
        ]
      },
      {
        stage: "吞噬诸神者前",
        gear: [
          { n: "腐臭倾泻者", img: "Fetid_Emesis.png", tag: "武器", d: "毒液连喷，弹幕压制。" },
          { n: "哈雷彗星炮", img: "Halley's_Inferno.png", tag: "武器", d: "彗星榴弹，范围炸裂。" },
          { n: "季风", img: "Monsoon.png", tag: "武器", d: "全天候机枪，自动切换弹药。" },
          { n: "虚无箭袋", img: "Quiver_of_Nihility.png", tag: "饰品", d: "箭袋毕业件，远程增伤减耗。" },
          { n: "T粒子炮", img: "Tau_Cannon.png", tag: "武器", d: "充能光炮，蓄力斩杀。" },
          { n: "血炎套装", img: "Bloodflare_armor.png", tag: "护甲", d: "灾厄中期主力甲。" },
          { n: "灾劫之尖啸", img: "Affliction.png", tag: "饰品", d: "全减抗核心饰品。" },
          { n: "进升证章", img: "Ascendant_Insignia.png", tag: "饰品", d: "机动毕业件。" }
        ]
      },
      {
        stage: "耶龙前",
        gear: [
          { n: "净化怒焰", img: "Cleansing_Blaze.png", tag: "武器", d: "净化火焰喷射，近距焚烧。" },
          { n: "奥妮克希亚", img: "Onyxia.png", tag: "武器", d: "龙息狙击，高伤穿透。" },
          { n: "焦土", img: "Scorched_Earth.png", tag: "武器", d: "火海覆地，控场输出。" },
          { n: "湮灭之弦", img: "Thread_of_Eradication.png", tag: "武器", d: "激光织网，持续压制。" },
          { n: "宇宙之源", img: "Universal_Genesis.png", tag: "武器", d: "弑神者材料终极弩。" },
          { n: "远古弑神者套装", img: "God_Slayer_armor.png", tag: "护甲", d: "闪避+减伤毕业甲。" },
          { n: "破界者行囊", img: "Planebreaker's_Pouch.png", tag: "饰品", d: "弹药袋毕业件，装填+伤害。" },
          { n: "狙击瞄准镜", img: "Sniper_Scope.png", tag: "饰品", d: "潜行狙击核心。" },
          { n: "蚀日尊戒", img: "Dark_Sun_Ring.png", tag: "饰品", d: "白昼黑夜双形态加成。" }
        ]
      },
      {
        stage: "至尊灾厄/终焉机甲前（灾厄）",
        gear: [
          { n: "群星大炮", img: "Starmada.png", tag: "武器", d: "银河材料大炮，群星坠落轰炸。" },
          { n: "暴政之终", img: "Tyranny's_End.png", tag: "武器", d: "圣金源狙击弓，蓄满一箭穿屏。" },
          { n: "极魂符枪", img: "Ace's_High.png", tag: "武器", d: "嘉登材料左轮，高爆灵魂弹。" },
          { n: "小鸡大炮", img: "Chicken_Cannon.png", tag: "武器", d: "派对风格终局炮，爆炸鸡弹幕。" },
          { n: "古圣金源套装", img: "Auric_Tesla_armor.png", tag: "护甲", d: "圣金源锭合成，全职业终局前毕业甲。" },
          { n: "月亮行者翼靴", img: "Seraph_Tracers.png", tag: "饰品", d: "翼靴终极合体，飞行移速拉满。" },
          { n: "神之壁垒", img: "Rampart_of_Deities.png", tag: "饰品", d: "击杀回血+减伤，终局生存件。" },
          { n: "破界者行囊", img: "Planebreaker's_Pouch.png", tag: "饰品", d: "弹药袋终极件，装填+伤害+减耗。" },
          { n: "辐辉", img: "Radiance.png", tag: "饰品", d: "全属性光环，攻防一体。" }
        ]
      },
      {
        stage: "终局（至尊灾厄后）",
        gear: [
          { n: "瘟疫", img: "Contagion.png", tag: "武器", d: "瘟疫狙击，毒素爆发。" },
          { n: "月神Prime", img: "Soma_Prime.png", tag: "武器", d: "终局机枪，弹幕如雨。" },
          { n: "斯万科技枪", img: "Svantechnical.png", tag: "武器", d: "嘉登科技终极炮台枪。" },
          { n: "太虚星龙炮", img: "Voidragon.png", tag: "武器", d: "虚空龙息连射。" },
          { n: "大比目鱼炮", img: "Halibut_Cannon.png", tag: "武器", d: "钓鱼彩蛋终极武器，火力天花板。" },
          { n: "魔影套装", img: "Demonshade_armor.png", tag: "护甲", d: "灾厄终局毕业甲。" },
          { n: "嘉登之心", img: "Draedon's_Heart.png", tag: "饰品", d: "全属性毕业饰品。" },
          { n: "辐辉", img: "Radiance.png", tag: "饰品", d: "全属性光环，队伍增益。" }
        ]
      }
    ]
  },
  {
    id: "mage",
    name: "法师",
    icon: "🔮",
    intro: "灾厄魔法：时空镰刀、元素洪流、辐射漩涡，弹幕艺术。以光棱套装与始源林海套装为轴，终局圣神之像+恒湮灭一切。",
    stages: [
      {
        stage: "开荒期（BOSS前 · 灾厄）",
        gear: [
          { n: "雷霆碎击者", img: "Thunder_Zapper.png", tag: "武器", d: "沙岩宝箱获得，闪电链弹射，开荒利器。" },
          { n: "魔刺", img: "Vilethorn.png", tag: "武器", d: "暗影珠掉落，长刺穿透群体。" },
          { n: "酸液枪", img: "Acid_Gun.png", tag: "武器", d: "深渊箱子获得，酸液造成持续伤害。" },
          { n: "猩红魔杖", img: "Crimson_Rod.png", tag: "武器", d: "猩红心掉落，云团落雨定点输出。" },
          { n: "钻石长袍", img: "Diamond_Robe.png", tag: "护甲", d: "钻石+丝绸合成，法伤与减耗长袍。" },
          { n: "胜潮套装", img: "Victide_armor.png", tag: "护甲", d: "胜潮锭合成，全职业通用过渡甲。" },
          { n: "星力手环", img: "Band_of_Starpower.png", tag: "饰品", d: "增加 20 最大魔力，法师前期核心。" },
          { n: "魔力花", img: "Mana_Flower.png", tag: "饰品", d: "自然的赠礼+魔力药水合成，自动喝蓝。" },
          { n: "克苏鲁之盾", img: "Shield_of_Cthulhu.png", tag: "饰品", d: "冲刺保命神器。" },
          { n: "蛙腿", img: "Frog_Leg.png", tag: "饰品", d: "跳跃增幅，走位基础件。" },
          { n: "闪电靴", img: "Lightning_Boots.png", tag: "饰品", d: "跑速核心，拉开距离施法。" }
        ]
      },
      {
        stage: "肉前毕业（地狱备战血肉墙 · 灾厄）",
        gear: [
          { n: "恶魔锄刀", img: "Demon_Scythe.png", tag: "武器", d: "地狱恶魔掉落，回旋镰刀穿墙。" },
          { n: "深渊之书", img: "Abyssal_Tome.png", tag: "武器", d: "深渊材料魔书，水弹连发。" },
          { n: "永夜射线", img: "Night's_Ray.png", tag: "武器", d: "魔光剑系列材料合成，激光贯穿。" },
          { n: "血浴", img: "Blood_Bath.png", tag: "武器", d: "猩红材料法杖，血雨自天而降。" },
          { n: "太空枪", img: "Space_Gun.png", tag: "武器", d: "配陨石套零耗蓝，肉前站桩组合。" },
          { n: "陨石套", img: "Meteor_Helmet.png", tag: "护甲", d: "套装效果让太空枪不耗魔力。" },
          { n: "斯塔提斯套装", img: "Statigel_armor.png", tag: "护甲", d: "史莱姆王材料凝胶合成，全属性加成。" },
          { n: "魔力花", img: "Mana_Flower.png", tag: "饰品", d: "自动喝蓝，开荒到老。" },
          { n: "魔法手铐", img: "Magic_Cuffs.png", tag: "饰品", d: "手铐+星力手环，受击回蓝。" },
          { n: "岩基手镯", img: "Batholith_Bangle.png", tag: "饰品", d: "灾厄法师饰品，法伤与魔力上限。" },
          { n: "反击围巾", img: "Counter_Scarf.png", tag: "饰品", d: "血肉墙掉落，受击冲刺反击。" }
        ]
      },
      {
        stage: "三王前（困难模式初期 · 灾厄）",
        gear: [
          { n: "血荆", img: "Blood_Thorn.png", tag: "武器", d: "腐化宝箱怪掉落，荆棘追踪穿刺。" },
          { n: "波塞冬", img: "Poseidon.png", tag: "武器", d: "海洋材料法杖，水流冲击波。" },
          { n: "硫火玫瑰", img: "Brimrose_Staff.png", tag: "武器", d: "硫火崖法杖，火束旋转扫射。" },
          { n: "R-GSS：火神加特林", img: "R-GSS_Vulcan.png", tag: "武器", d: "嘉登科技+力量之魂合成，火弹速射。" },
          { n: "邪恶三叉戟", img: "Unholy_Trident.png", tag: "武器", d: "红魔鬼掉落，魔法三叉戟追踪。" },
          { n: "学徒套装", img: "Apprentice's_Hat.png", tag: "护甲", d: "酒馆老板处购买，哨兵/法伤通用。" },
          { n: "巫师徽章", img: "Sorcerer_Emblem.png", tag: "饰品", d: "血肉墙掉落，魔法伤害 +15%。" },
          { n: "奥术之花", img: "Arcane_Flower.png", tag: "饰品", d: "魔力花升级，自动喝药+追踪弹。" },
          { n: "融合之脑", img: "Amalgamated_Brain.png", tag: "饰品", d: "闪避+全属性，全职业通用。" },
          { n: "血蠕虫围巾", img: "Bloody_Worm_Scarf.png", tag: "饰品", d: "减伤核心，法师身板必备。" }
        ]
      },
      {
        stage: "石巨人前（丛林神庙前 · 灾厄）",
        gear: [
          { n: "南极光羽", img: "Alula_Australis.png", tag: "武器", d: "极光材料法杖，光羽回旋。" },
          { n: "始源之尘", img: "Primordial_Earth.png", tag: "武器", d: "始源材料，大地碎石连爆。" },
          { n: "烁兰", img: "Gleaming_Magnolia.png", tag: "武器", d: "兰花法杖，花瓣绽放爆发。" },
          { n: "彩虹枪", img: "Rainbow_Gun.png", tag: "武器", d: "神圣宝箱怪掉落，彩虹轨道持续伤害。" },
          { n: "幽灵套", img: "Spectre_Mask.png", tag: "护甲", d: "幽灵锭合成，输出/吸血双形态。" },
          { n: "硫火套装", img: "Brimflame_armor.png", tag: "护甲", d: "硫火材料合成，法伤续航兼顾。" },
          { n: "灾厄符章", img: "Sigil_of_Calamitas.png", tag: "饰品", d: "灾厄材料合成，法师增伤核心。" },
          { n: "天界徽章", img: "Celestial_Emblem.png", tag: "饰品", d: "复仇者徽章升级，法伤提升。" },
          { n: "阿斯加德之英勇", img: "Asgard's_Valor.png", tag: "饰品", d: "冲刺+免疫多数减益。" },
          { n: "天使之靴", img: "Angel_Treads.png", tag: "饰品", d: "翼靴过渡件，飞行时间增加。" }
        ]
      },
      {
        stage: "月领主前（月亮领主前 · 灾厄）",
        gear: [
          { n: "凋亡射线", img: "Apoctosis_Array.png", tag: "武器", d: "凋亡材料射线枪，贯穿死光。" },
          { n: "星云奥秘", img: "Nebula_Arcanum.png", tag: "武器", d: "星云碎片合成，星弹爆裂。" },
          { n: "血涌", img: "Hematemesis.png", tag: "武器", d: "猩红材料进阶法杖，血爆连发。" },
          { n: "瘟疫法杖", img: "Plague_Staff.png", tag: "武器", d: "瘟疫材料，毒蜂弹幕。" },
          { n: "泡泡枪", img: "Bubble_Gun.png", tag: "武器", d: "派对事件掉落，泡泡短程高射速。" },
          { n: "幽灵套", img: "Spectre_Mask.png", tag: "护甲", d: "幽灵锭合成，月前依然能打。" },
          { n: "星幻套装", img: "Astral_armor.png", tag: "护甲", d: "星幻材料合成，全属性月前过渡毕业甲。" },
          { n: "毁灭者徽章", img: "Destroyer_Emblem.png", tag: "饰品", d: "全职业暴击+伤害，通用毕业件。" },
          { n: "灾厄符章", img: "Sigil_of_Calamitas.png", tag: "饰品", d: "魔法增伤核心不摘。" },
          { n: "阴阳吸星石", img: "The_Absorber.png", tag: "饰品", d: "减伤+续航，月前必带。" },
          { n: "天界壳", img: "Celestial_Shell.png", tag: "饰品", d: "昼夜全程全属性。" }
        ]
      },
      {
        stage: "月领主后 ~ 亵渎天神前",
        gear: [
          { n: "时空术士之镰", img: "Chronomancer's_Scythe.png", tag: "武器", d: "时间镰刀，回旋斩杀。" },
          { n: "源", img: "Genesis.png", tag: "武器", d: "元素洪流，弹幕全屏。" },
          { n: "原核之怒", img: "Nuclear_Fury.png", tag: "武器", d: "辐射漩涡，持续压制。" },
          { n: "核子之源", img: "Nucleosynthesis.png", tag: "武器", d: "聚变星弹，爆发优秀。" },
          { n: "星云套", img: "Nebula_Helmet.png", tag: "护甲", d: "原版月后魔法毕业甲。" },
          { n: "灾厄符章", img: "Sigil_of_Calamitas.png", tag: "饰品", d: "魔法增伤+魔源召唤，法师毕业件。" },
          { n: "奥术之花", img: "Arcane_Flower.png", tag: "饰品", d: "魔力花升级，自动喝药+追踪。" },
          { n: "正义战旗", img: "Warbanner_of_the_Righteous.png", tag: "饰品", d: "站场全属性提升。" }
        ]
      },
      {
        stage: "吞噬诸神者前",
        gear: [
          { n: "寂虚之光", img: "Dark_Spark.png", tag: "武器", d: "黑暗光束，贯穿连射。" },
          { n: "幻象之怒", img: "Phantasmal_Fury.png", tag: "武器", d: "幻影弹幕环绕输出。" },
          { n: "影流法杖", img: "Shadowbolt_Staff.png", tag: "武器", d: "追踪影箭，命中稳定。" },
          { n: "金星三叉戟", img: "Venusian_Trident.png", tag: "武器", d: "行星闪电链。" },
          { n: "酸蚀毒蝰", img: "Vitriolic_Viper.png", tag: "武器", d: "毒液弹幕，衰减减抗。" },
          { n: "光棱套装", img: "Prismatic_armor.png", tag: "护甲", d: "棱镜充能甲，法伤爆发。" },
          { n: "血炎套装", img: "Bloodflare_armor.png", tag: "护甲", d: "灾厄中期主力甲，回蓝回血。" },
          { n: "灾厄符章", img: "Sigil_of_Calamitas.png", tag: "饰品", d: "核心增伤不摘。" }
        ]
      },
      {
        stage: "耶龙前",
        gear: [
          { n: "终灭裂隙权杖", img: "Hyperdeath_Rift_Scepter.png", tag: "武器", d: "虚空裂隙连爆。" },
          { n: "奥密克戎", img: "Omicron.png", tag: "武器", d: "辐射射线扫场。" },
          { n: "特斯拉巨炮", img: "Tesla_Cannon.png", tag: "武器", d: "电链跳跃，清杂神器。" },
          { n: "极点光伏", img: "Voltaic_Climax.png", tag: "武器", d: "雷球爆闪，范围致盲。" },
          { n: "始源林海套装", img: "Silva_armor.png", tag: "护甲", d: "林海材料甲，法系毕业之一。" },
          { n: "空灵护符", img: "Ethereal_Talisman.png", tag: "饰品", d: "魔法回蓝+增伤毕业件。" },
          { n: "蚀日尊戒", img: "Dark_Sun_Ring.png", tag: "饰品", d: "昼夜双形态加成。" },
          { n: "血神圣杯", img: "Chalice_of_the_Blood_God.png", tag: "饰品", d: "站桩输出的生命保障。" }
        ]
      },
      {
        stage: "至尊灾厄/终焉机甲前（灾厄）",
        gear: [
          { n: "以太流光炮", img: "Aetherflux_Cannon.png", tag: "武器", d: "以太能量巨炮，蓄力贯穿光束。" },
          { n: "始源之遗", img: "Primordial_Ancient.png", tag: "武器", d: "始源林海终极法书，弹幕华丽。" },
          { n: "亚利姆水晶", img: "Yharim's_Crystal.png", tag: "武器", d: "亚利姆材料，水晶射线连射。" },
          { n: "终灭裂隙权杖", img: "Hyperdeath_Rift_Scepter.png", tag: "武器", d: "虚空裂隙连爆，机甲战利器。" },
          { n: "古圣金源套装", img: "Auric_Tesla_armor.png", tag: "护甲", d: "圣金源锭合成，全职业终局前毕业甲。" },
          { n: "空灵护符", img: "Ethereal_Talisman.png", tag: "饰品", d: "魔法回蓝+增伤毕业件。" },
          { n: "神之壁垒", img: "Rampart_of_Deities.png", tag: "饰品", d: "击杀回血+减伤，终局生存件。" },
          { n: "辐辉", img: "Radiance.png", tag: "饰品", d: "全属性光环，攻防一体。" },
          { n: "灾厄符章", img: "Sigil_of_Calamitas.png", tag: "饰品", d: "法师增伤核心不摘。" }
        ]
      },
      {
        stage: "终局（至尊灾厄后）",
        gear: [
          { n: "圣神之像", img: "Apotheosis.png", tag: "武器", d: "灾厄终极法书，弹幕艺术。" },
          { n: "恒", img: "Eternity.png", tag: "武器", d: "终局法杖，黑洞湮灭。" },
          { n: "仙子伊布法杖", img: "Sylvestaff.png", tag: "武器", d: "仙子追踪光弹，手感极佳。" },
          { n: "光之舞", img: "The_Dance_of_Light.png", tag: "武器", d: "光刃环舞，近远兼顾。" },
          { n: "魔影套装", img: "Demonshade_armor.png", tag: "护甲", d: "灾厄终局毕业甲，超高攻速。" },
          { n: "嘉登之心", img: "Draedon's_Heart.png", tag: "饰品", d: "全属性毕业饰品。" },
          { n: "辐辉", img: "Radiance.png", tag: "饰品", d: "全属性光环。" }
        ]
      }
    ]
  },
  {
    id: "summon",
    name: "召唤师",
    icon: "🐝",
    intro: "灾厄召唤：花炮台矩阵、天界双子、虚空傀儡，仆从数量爆炸。以神惧者/始源林海套装为轴，终局源生寒晶+圣天誓盟数量伤害双满。",
    stages: [
      {
        stage: "开荒期（BOSS前 · 灾厄）",
        gear: [
          { n: "附魔飞刀法杖", img: "Enchanted_Knife_Staff.png", tag: "武器", d: "附魔材料合成，飞刀仆从环绕。" },
          { n: "风暴蚁狮杖", img: "Stormjaw_Staff.png", tag: "武器", d: "蚁狮材料法杖，蚁狮仆从钻地偷袭。" },
          { n: "太阳之灵法杖", img: "Sun_Spirit_Staff.png", tag: "武器", d: "沙漠材料，阳光精灵冲撞。" },
          { n: "皮革鞭", img: "Leather_Whip.png", tag: "武器", d: "皮革合成的入门鞭，标记增伤。" },
          { n: "海蛇尾召唤杖", img: "Brittle_Star_Staff.png", tag: "武器", d: "海滩材料，小海蛇尾仆从。" },
          { n: "钨钢套装", img: "Wulfrum_armor.png", tag: "护甲", d: "钨钢锭合成，召唤开荒甲。" },
          { n: "雪貂皮大衣", img: "Flinx_Fur_Coat.png", tag: "护甲", d: "雪貂毛+丝绸，额外召唤栏。" },
          { n: "灵魂浮雕", img: "Spirit_Glyph.png", tag: "饰品", d: "灾厄饰品，召唤伤害核心。" },
          { n: "钨钢电池", img: "Wulfrum_Battery.png", tag: "饰品", d: "钨钢材料，仆从栏 +1。" },
          { n: "蛙腿", img: "Frog_Leg.png", tag: "饰品", d: "跳跃增幅，走位基础件。" },
          { n: "闪电靴", img: "Lightning_Boots.png", tag: "饰品", d: "跑速核心，召唤物替你输出。" }
        ]
      },
      {
        stage: "肉前毕业（地狱备战血肉墙 · 灾厄）",
        gear: [
          { n: "小鬼法杖", img: "Imp_Staff.png", tag: "武器", d: "狱石锭合成，火焰小鬼远程仆从。" },
          { n: "不洁血肉", img: "Flesh_of_Infidelity.png", tag: "武器", d: "猩红材料法杖，血肉仆从。" },
          { n: "死灵骨髓杖", img: "Staff_of_Necrosteocytes.png", tag: "武器", d: "地牢骨头合成，骷髅仆从。" },
          { n: "脊柱骨鞭", img: "Spinal_Tap.png", tag: "武器", d: "骨头合成，肉前高伤鞭子。" },
          { n: "黄蜂法杖", img: "Hornet_Staff.png", tag: "武器", d: "蜂蜡合成，蜂毒黄蜂仆从。" },
          { n: "蜜蜂套", img: "Bee_Headgear.png", tag: "护甲", d: "蜂蜡合成，肉前召唤核心。" },
          { n: "黑曜石套", img: "Obsidian_Hat.png", tag: "护甲", d: "黑曜石+丝绸，大幅强化鞭子。" },
          { n: "矮人项链", img: "Pygmy_Necklace.png", tag: "饰品", d: "巫医购买，仆从栏 +1。" },
          { n: "凝胶充能电池", img: "Jelly-Charged_Battery.png", tag: "饰品", d: "凝胶材料，召唤栏与伤害。" },
          { n: "灵魂浮雕", img: "Spirit_Glyph.png", tag: "饰品", d: "召唤伤害核心件。" },
          { n: "反击围巾", img: "Counter_Scarf.png", tag: "饰品", d: "血肉墙掉落，受击冲刺反击。" }
        ]
      },
      {
        stage: "三王前（困难模式初期 · 灾厄）",
        gear: [
          { n: "蜘蛛女王法杖", img: "Spider_Staff.png", tag: "武器", d: "蜘蛛牙合成，黑寡妇蜘蛛仆从。" },
          { n: "千载寒晶", img: "Ancient_Ice_Chunk.png", tag: "武器", d: "冰雪材料，寒冰精灵仆从。" },
          { n: "淬焰之升华", img: "Igneous_Exaltation.png", tag: "武器", d: "地狱进阶材料，火焰仆从强化。" },
          { n: "深海权杖", img: "Deepsea_Staff.png", tag: "武器", d: "海洋材料，深海生物仆从。" },
          { n: "冷鞭", img: "Cool_Whip.png", tag: "武器", d: "冰雪材料鞭子，标记触发雪爆。" },
          { n: "蜘蛛套", img: "Spider_Mask.png", tag: "护甲", d: "蛛丝+蛛牙制作，召唤师肉后第一甲。" },
          { n: "代达罗斯套装", img: "Daedalus_armor.png", tag: "护甲", d: "代达罗斯材料，哨兵流强化。" },
          { n: "灵魂浮雕", img: "Spirit_Glyph.png", tag: "饰品", d: "召唤伤害核心不摘。" },
          { n: "凝胶充能电池", img: "Jelly-Charged_Battery.png", tag: "饰品", d: "仆从栏与伤害双提升。" },
          { n: "始源暗影炎", img: "The_First_Shadowflame.png", tag: "饰品", d: "暗影炎材料，召唤增伤。" },
          { n: "核燃料棒", img: "Nuclear_Fuel_Rod.png", tag: "饰品", d: "灾厄饰品，召唤伤害大幅提升。" }
        ]
      },
      {
        stage: "石巨人前（丛林神庙前 · 灾厄）",
        gear: [
          { n: "复仇之阳法杖", img: "Vengeful_Sun_Staff.png", tag: "武器", d: "太阳材料，烈焰仆从高伤。" },
          { n: "沙漠虎杖", img: "Desert_Tiger_Staff.png", tag: "武器", d: "沙漠钥匙宝箱开出，猛虎连击。" },
          { n: "冰霜九头蛇法杖", img: "Staff_of_the_Frost_Hydra.png", tag: "武器", d: "冰雪地牢箱获得，冰霜哨兵。" },
          { n: "苍华之庭", img: "Plantation_Staff.png", tag: "武器", d: "世纪之花材料，花炮台仆从。" },
          { n: "晨星", img: "Morning_Star.png", tag: "武器", d: "困难模式地牢掉落，高伤重鞭。" },
          { n: "提基套", img: "Tiki_Mask.png", tag: "护甲", d: "巫医购买，传统数量流毕业甲。" },
          { n: "幻渊鱼群套装", img: "Fathom_Swarmer_armor.png", tag: "护甲", d: "深渊材料合成，鱼群仆从。" },
          { n: "神圣符文", img: "Hallowed_Rune.png", tag: "饰品", d: "神圣材料，哨兵数量 +1。" },
          { n: "星爆核心", img: "Starbuster_Core.png", tag: "饰品", d: "星辉材料，召唤与星爆增伤。" },
          { n: "矮人项链", img: "Pygmy_Necklace.png", tag: "饰品", d: "仆从栏 +1，数量流必带。" },
          { n: "阿斯加德之英勇", img: "Asgard's_Valor.png", tag: "饰品", d: "冲刺+免疫多数减益。" }
        ]
      },
      {
        stage: "月领主前（月亮领主前 · 灾厄）",
        gear: [
          { n: "凋零绽放法杖", img: "Wither_Blossoms_Staff.png", tag: "武器", d: "凋零材料，枯萎花仆从。" },
          { n: "乌鸦法杖", img: "Raven_Staff.png", tag: "武器", d: "南瓜月掉落，乌鸦群袭。" },
          { n: "星尘细胞法杖", img: "Stardust_Cell_Staff.png", tag: "武器", d: "星尘碎片合成，细胞持续堆叠。" },
          { n: "地刺王法杖", img: "Spikecrag_Staff.png", tag: "武器", d: "月球事件材料，地刺哨兵。" },
          { n: "万花筒", img: "Kaleidoscope.png", tag: "武器", d: "光之女皇掉落，最强增伤鞭。" },
          { n: "瘟疫使者套装", img: "Plaguebringer_armor.png", tag: "护甲", d: "瘟疫材料合成，毒仆从增伤。" },
          { n: "渊泉套装", img: "Hydrothermic_armor.png", tag: "护甲", d: "深渊+熔岩材料，回血召唤兼顾。" },
          { n: "元素之心", img: "Heart_of_the_Elements.png", tag: "饰品", d: "元素精灵全召，数量流核心。" },
          { n: "圣甲虫护符", img: "Papyrus_Scarab.png", tag: "饰品", d: "圣甲虫卷轴+大力士甲虫，数量伤害双提升。" },
          { n: "斯塔提斯的祝福", img: "Statis'_Blessing.png", tag: "饰品", d: "凝胶/斯塔提斯材料，全属性召唤件。" },
          { n: "阴阳吸星石", img: "The_Absorber.png", tag: "饰品", d: "减伤+续航，月前必带。" }
        ]
      },
      {
        stage: "月领主后 ~ 亵渎天神前",
        gear: [
          { n: "告死之花", img: "Flowers_of_Mortality.png", tag: "武器", d: "花炮台矩阵，弹幕压制。" },
          { n: "塞拉斯蒂娅之军", img: "Legion_of_Celestia.png", tag: "武器", d: "天界双子仆从，输出稳定。" },
          { n: "战术瘟疫引擎", img: "Tactical_Plague_Engine.png", tag: "武器", d: "瘟疫机甲仆从，巡航扫射。" },
          { n: "月亮传送门法杖", img: "Lunar_Portal_Staff.png", tag: "武器", d: "月门炮台，持续火力。" },
          { n: "万花筒", img: "Kaleidoscope.png", tag: "武器", d: "毕业增伤鞭，标记核心。" },
          { n: "星尘套", img: "Stardust_Helmet.png", tag: "护甲", d: "原版月后召唤毕业甲。" },
          { n: "瓦尔哈拉骑士套装", img: "Squire's_Great_Helm.png", tag: "护甲", d: "哨兵流+回血，生存流首选。" },
          { n: "元素之心", img: "Heart_of_the_Elements.png", tag: "饰品", d: "元素仆从全召，数量流核心。" },
          { n: "斯塔提斯的诅咒", img: "Statis'_Curse.png", tag: "饰品", d: "召唤数量+2，毕业件。" },
          { n: "玷星之源", img: "Star-Tainted_Generator.png", tag: "饰品", d: "星辉召唤核心，鞭伤加成。" }
        ]
      },
      {
        stage: "吞噬诸神者前",
        gear: [
          { n: "龙血弃族", img: "Dragonblood_Disgorger.png", tag: "武器", d: "龙血吐酸仆从。" },
          { n: "幽花之主", img: "Ethereal_Subjugator.png", tag: "武器", d: "幽花双子，弹幕华丽。" },
          { n: "星座之王·天龙", img: "King_of_Constellations,_Tenryū.png", tag: "武器", d: "天龙星宿，终局级召唤。" },
          { n: "突变松露", img: "Mutated_Truffle.png", tag: "武器", d: "蘑菇炮台，范围压制。" },
          { n: "葱茏之锋", img: "Virid_Vanguard.png", tag: "武器", d: "绿锋守卫，贴身护卫。" },
          { n: "血炎套装", img: "Bloodflare_armor.png", tag: "护甲", d: "灾厄中期主力甲。" },
          { n: "渎魂神物", img: "Profaned_Soul_Artifact.png", tag: "饰品", d: "召唤鞭双修毕业件。" },
          { n: "斯塔提斯的忍者腰带", img: "Statis'_Ninja_Belt.png", tag: "饰品", d: "机动+召唤加成。" }
        ]
      },
      {
        stage: "耶龙前",
        gear: [
          { n: "灭兆渡鸦杖", img: "Corvid_Harbinger_Staff.png", tag: "武器", d: "渡鸦群袭，空中压制。" },
          { n: "天狼星", img: "Sirius.png", tag: "武器", d: "星犬仆从，高伤连击。" },
          { n: "虚空吞噬者傀具", img: "Void_Eater_Marionette.png", tag: "武器", d: "虚空傀儡，撕咬输出。" },
          { n: "卡兰德的魔镜", img: "Mirror_of_Kalandra.png", tag: "武器", d: "镜像仆从，复制弹幕。" },
          { n: "神惧者套装", img: "Fearmonger_armor.png", tag: "护甲", d: "恐惧事件材料甲，召唤极限输出。" },
          { n: "始源林海套装", img: "Silva_armor.png", tag: "护甲", d: "林海材料甲，生存向毕业。" },
          { n: "核源创生", img: "Nucleogenesis.png", tag: "饰品", d: "召唤数量终极件。" },
          { n: "蚀日尊戒", img: "Dark_Sun_Ring.png", tag: "饰品", d: "昼夜双形态加成。" }
        ]
      },
      {
        stage: "至尊灾厄/终焉机甲前（灾厄）",
        gear: [
          { n: "终焉百合", img: "Lilies_of_Finality.png", tag: "武器", d: "终局材料法杖，百合炮台齐放。" },
          { n: "极昼信标", img: "Midnight_Sun_Beacon.png", tag: "武器", d: "太阳材料终极法杖，极昼光束。" },
          { n: "卡兰德的魔镜", img: "Mirror_of_Kalandra.png", tag: "武器", d: "镜像仆从复制弹幕。" },
          { n: "星律之握揽", img: "Saros_Possession.png", tag: "武器", d: "星律材料，星灵附身全屏弹幕。" },
          { n: "古圣金源套装", img: "Auric_Tesla_armor.png", tag: "护甲", d: "圣金源锭合成，全职业终局前毕业甲。" },
          { n: "核源创生", img: "Nucleogenesis.png", tag: "饰品", d: "召唤数量终极件。" },
          { n: "渎魂神物", img: "Profaned_Soul_Artifact.png", tag: "饰品", d: "召唤鞭双修毕业件。" },
          { n: "神之壁垒", img: "Rampart_of_Deities.png", tag: "饰品", d: "击杀回血+减伤，终局生存件。" },
          { n: "月亮行者翼靴", img: "Seraph_Tracers.png", tag: "饰品", d: "翼靴终极合体，飞行移速拉满。" }
        ]
      },
      {
        stage: "终局（至尊灾厄后）",
        gear: [
          { n: "源生寒晶", img: "Endogenesis.png", tag: "武器", d: "源生之力终极召唤。" },
          { n: "星律之握揽", img: "Saros_Possession.png", tag: "武器", d: "星灵附身，全屏弹幕。" },
          { n: "光阴流时伞", img: "Temporal_Umbrella.png", tag: "武器", d: "时空雨伞，追踪雷暴。" },
          { n: "永劫", img: "Perdition.png", tag: "武器", d: "终局魔仆，吞噬一切。" },
          { n: "魔影套装", img: "Demonshade_armor.png", tag: "护甲", d: "灾厄终局毕业甲。" },
          { n: "圣天誓盟", img: "Angelic_Alliance.png", tag: "饰品", d: "召唤终极饰品，数量伤害双满。" },
          { n: "渎神魂晶", img: "Profaned_Soul_Crystal.png", tag: "饰品", d: "可升级魂晶，成长型毕业件。" },
          { n: "嘉登之心", img: "Draedon's_Heart.png", tag: "饰品", d: "全属性毕业饰品。" }
        ]
      }
    ]
  },
  {
    id: "rogue",
    name: "盗贼",
    icon: "🗡️",
    intro: "灾厄模组原创第五职业：投掷飞刀、苦无、回旋刃，命中可触发「暗影爆发」额外伤害；原地不动蓄力可进入潜行状态，投出强化突袭。装备全部来自灾厄模组，原版仅作过渡。",
    stages: [
      {
        stage: "开荒期（BOSS前 · 灾厄）",
        gear: [
          { n: "钨钢飞刀", img: "Wulfrum_Knife.png", tag: "武器", d: "灾厄开局投掷刀，钨钢材料便宜量大。" },
          { n: "镀金匕首", img: "Gilded_Dagger.png", tag: "武器", d: "高暴击小刀，前期利器。" },
          { n: "海胆刺针", img: "Urchin_Stinger.png", tag: "武器", d: "海滩海胆合成，掷出尖刺。" },
          { n: "铁质飞斧", img: "Iron_Francisca.png", tag: "武器", d: "回旋飞斧，早期主力。" },
          { n: "沙漠巡游者套装", img: "Desert_Prowler_armor.png", tag: "护甲", d: "沙漠化石合成，投掷加成早期甲。" },
          { n: "角斗士套装", img: "Gladiator_Helmet.png", tag: "护甲", d: "地底角斗士骷髅掉落，投掷友好。" },
          { n: "蛙腿", img: "Frog_Leg.png", tag: "饰品", d: "跳跃增幅，机动标配。" },
          { n: "赫尔墨斯靴", img: "Hermes_Boots.png", tag: "饰品", d: "跑速核心，走位就是命。" },
          { n: "角斗士金锁", img: "Gladiator's_Locket.png", tag: "饰品", d: "角斗士骷髅掉落，暴击小加成。" },
          { n: "鲨牙项链", img: "Shark_Tooth_Necklace.png", tag: "饰品", d: "血月钓鱼/鲨鱼掉落，穿甲利器。" },
          { n: "钨钢屏障生成仪", img: "Rover_Drive.png", tag: "饰品", d: "钨钢 BOSS 掉落，护盾保命。" },
          { n: "欺诈硬币", img: "Coin_of_Deceit.png", tag: "饰品", d: "盗贼专属饰品，潜行加成核心。" }
        ]
      },
      {
        stage: "肉前毕业（地狱备战血肉墙 · 灾厄）",
        gear: [
          { n: "羽刃", img: "Feather_Knife.png", tag: "武器", d: "天空岛鹰身女妖掉落，轻巧高伤。" },
          { n: "凝胶镖", img: "Gel_Dart.png", tag: "武器", d: "史莱姆王材料合成，粘滞弹跳。" },
          { n: "回飞刃", img: "Glaive.png", tag: "武器", d: "丛林材料合成，回旋三连击。" },
          { n: "狮子鱼", img: "Lionfish.png", tag: "武器", d: "海洋钓鱼获取，毒刺连发。" },
          { n: "忍者刀", img: "Shinobi_Blade.png", tag: "武器", d: "地底骷髅精英掉落，连投快攻。" },
          { n: "斯塔提斯套装", img: "Statigel_armor.png", tag: "护甲", d: "史莱姆王材料合成，潜行套装早期版。" },
          { n: "血染手套", img: "Bloodstained_Glove.png", tag: "饰品", d: "血肉墙掉落，盗贼版战士手套。" },
          { n: "反击围巾", img: "Counter_Scarf.png", tag: "饰品", d: "血肉墙掉落，受击反击冲刺。" },
          { n: "王冠宝石", img: "Crown_Jewel.png", tag: "饰品", d: "国王雕像掉落，暴击核心。" },
          { n: "蜂蜜露珠", img: "Honey_Dew.png", tag: "饰品", d: "蜂王掉落，回血续航。" },
          { n: "幻影魔镜", img: "Mirage_Mirror.png", tag: "饰品", d: "魔法镜像升级，瞬移走位。" }
        ]
      },
      {
        stage: "三王前（困难模式初期 · 灾厄）",
        gear: [
          { n: "钴蓝苦无", img: "Cobalt_Kunai.png", tag: "武器", d: "钴蓝锭合成，苦无连投。" },
          { n: "咒焰匕首", img: "Cursed_Dagger.png", tag: "武器", d: "诅咒焰合成，腐蚀穿刺。" },
          { n: "腐脓标枪", img: "Ichor_Spear.png", tag: "武器", d: "腐脓合成，减甲连投。" },
          { n: "冰花", img: "Ice_Star.png", tag: "武器", d: "冰雪合成，六角暴击。" },
          { n: "钯金标枪", img: "Palladium_Javelin.png", tag: "武器", d: "钯金锭合成，回旋标枪。" },
          { n: "棱晶飞刀", img: "Prismalline.png", tag: "武器", d: "水晶合成，棱光弹射。" },
          { n: "泰坦之心套装", img: "Titan_Heart_armor.png", tag: "护甲", d: "泰坦之心材料合成，重甲过渡。" },
          { n: "水晶刺客套装", img: "Crystal_Assassin_armor.png", tag: "护甲", d: "水晶 BOSS 掉落，潜行加成。" },
          { n: "融合之脑", img: "Amalgamated_Brain.png", tag: "饰品", d: "脑吞噬者材料合成，全属性小加成。" },
          { n: "盗贼徽章", img: "Rogue_Emblem.png", tag: "饰品", d: "血肉墙掉落，盗贼伤害 +15%。" },
          { n: "绚彩明胶", img: "Grand_Gelatin.png", tag: "饰品", d: "史莱姆王升级版，回血+跳跃。" },
          { n: "寒冰屏障", img: "Frost_Barrier.png", tag: "饰品", d: "冰雪 BOSS 掉落，受击护盾。" }
        ]
      },
      {
        stage: "世纪之花前（世花前 · 灾厄）",
        gear: [
          { n: "致命缺陷", img: "Defective_Sphere.png", tag: "武器", d: "毁灭者掉落，能量球投掷。" },
          { n: "幻想符札", img: "Fantasy_Talisman.png", tag: "武器", d: "光之女皇材料合成，幻象分身。" },
          { n: "回春环刃", img: "Samsara_Slicer.png", tag: "武器", d: "世纪之花前过渡回旋刃。" },
          { n: "恒星匕首", img: "Stellar_Knife.png", tag: "武器", d: "星辉合成，星光穿刺。" },
          { n: "日影套装", img: "Umbraphile_armor.png", tag: "护甲", d: "日影材料合成，潜行加成主力甲。" },
          { n: "掠夺者套装", img: "Reaver_armor.png", tag: "护甲", d: "掠夺者材料合成，全能过渡甲。" },
          { n: "精准手套", img: "Glove_of_Precision.png", tag: "饰品", d: "盗贼专属，暴击+投速核心。" },
          { n: "毁灭勋章", img: "Ruin_Medallion.png", tag: "饰品", d: "毁灭者材料，全属性加成。" },
          { n: "阿斯加德之英勇", img: "Asgard's_Valor.png", tag: "饰品", d: "圣盾升级，冲锋+减伤。" },
          { n: "深渊魔镜", img: "Abyssal_Mirror.png", tag: "饰品", d: "深渊材料，瞬移+潜行强化。" },
          { n: "吸血鬼符咒", img: "Vampiric_Talisman.png", tag: "饰品", d: "吸血鬼材料，命中回血。" }
        ]
      },
      {
        stage: "月领主前（月亮领主前 · 灾厄）",
        gear: [
          { n: "瘟疫手雷", img: "Plaguenade.png", tag: "武器", d: "瘟疫机甲材料合成，毒爆范围清场。" },
          { n: "光辉星剑", img: "Radiant_Star.png", tag: "武器", d: "光之女皇材料，星光连斩。" },
          { n: "狮子座流星", img: "Regulus_Riot.png", tag: "武器", d: "星辉合成，流星连投。" },
          { n: "暗影碎片", img: "Shard_of_Antumbra.png", tag: "武器", d: "日食材料，暗影分裂投掷。" },
          { n: "毁灭之星", img: "Star_of_Destruction.png", tag: "武器", d: "星辉合成，陨星爆击。" },
          { n: "渊泉套装", img: "Hydrothermic_armor.png", tag: "护甲", d: "深渊材料合成，回血潜行毕业甲。" },
          { n: "忍者渗透套", img: "Shinobi_Infiltrator_armor.png", tag: "护甲", d: "光之女皇材料，潜行爆发甲。" },
          { n: "星幻套装", img: "Astral_armor.png", tag: "护甲", d: "星幻材料合成，全属性过渡毕业甲。" },
          { n: "天界壳", img: "Celestial_Shell.png", tag: "饰品", d: "日月壳合体，变身全属性。" },
          { n: "阴阳吸星石", img: "The_Absorber.png", tag: "饰品", d: "嘉登材料合成，减伤+回蓝毕业件。" },
          { n: "毁灭者徽章", img: "Destroyer_Emblem.png", tag: "饰品", d: "全职业暴击毕业饰品。" },
          { n: "暗物质剑鞘", img: "Dark_Matter_Sheath.png", tag: "饰品", d: "暗物质合成，潜行蓄力爆发核心。" }
        ]
      },
      {
        stage: "月领主后 ~ 亵渎天神前",
        gear: [
          { n: "天界收割者", img: "Celestial_Reaper.png", tag: "武器", d: "月亮领主材料，天界镰刀投掷。" },
          { n: "月明苦无", img: "Lunar_Kunai.png", tag: "武器", d: "月明锭合成，苦无连投毕业。" },
          { n: "渎神投矛", img: "Profaned_Partisan.png", tag: "武器", d: "亵渎天神材料，圣焰投矛。" },
          { n: "餐具戏弄者", img: "Utensil_Poker.png", tag: "武器", d: "嘉登科技合成，餐具连投彩蛋武器。" },
          { n: "皇天套装", img: "Empyrean_armor.png", tag: "护甲", d: "皇天材料合成，盗贼毕业甲之一。" },
          { n: "归一心元石", img: "The_Community.png", tag: "饰品", d: "全属性增益核心，毕业链一环。" },
          { n: "阿斯加德之英勇", img: "Asgard's_Valor.png", tag: "饰品", d: "圣盾升级，冲锋+减伤。" },
          { n: "悖论增幅器", img: "Blunder_Booster.png", tag: "饰品", d: "嘉登科技，翼靴+跳跃合体。" },
          { n: "深渊铁哑铃", img: "Deep_Sea_Dumbbell.png", tag: "饰品", d: "深渊材料，蓄力强化潜行。" },
          { n: "湮灭之颚", img: "Jaws_of_Oblivion.png", tag: "饰品", d: "湮灭材料，咬合伤害加成。" },
          { n: "秘封奇点", img: "Sealed_Singularity.png", tag: "饰品", d: "秘封材料，黑洞牵引控场。" }
        ]
      },
      {
        stage: "吞噬诸神者前",
        gear: [
          { n: "剧毒旋风", img: "Toxicant_Twister.png", tag: "武器", d: "瘟疫材料升级，毒龙卷投掷。" },
          { n: "织女星", img: "Vega.png", tag: "武器", d: "星辉合成，星光穿刺连投。" },
          { n: "血炎套装", img: "Bloodflare_armor.png", tag: "护甲", d: "灾厄中期主力甲，回复与输出兼顾。" },
          { n: "灾劫之尖啸", img: "Affliction.png", tag: "饰品", d: "全减抗核心饰品，后期不摘。" },
          { n: "进升证章", img: "Ascendant_Insignia.png", tag: "饰品", d: "翼靴合体+落星无敌帧，机动毕业件。" },
          { n: "极乐之庇护", img: "Elysian_Aegis.png", tag: "饰品", d: "圣域守卫材料，冲锋护盾+减伤。" },
          { n: "硫火女巫", img: "The_Evolution.png", tag: "饰品", d: "硫火材料，进化加成成长型。" },
          { n: "利维坦龙涎香", img: "Leviathan_Ambergris.png", tag: "饰品", d: "利维坦材料，水属性强化。" },
          { n: "破界飞盘", img: "Dimension-Tearing_Disk.png", tag: "饰品", d: "空间撕裂，瞬移+投掷加成。" },
          { n: "处刑者之刃", img: "Executioner's_Blade.png", tag: "武器", d: "处刑材料，斩首投刃。" },
          { n: "等离子手雷", img: "Plasma_Grenade.png", tag: "武器", d: "等离子爆轰投掷。" }
        ]
      },
      {
        stage: "耶龙前",
        gear: [
          { n: "旧日死神", img: "The_Old_Reaper.png", tag: "武器", d: "死神镰刀投掷版。" },
          { n: "远古弑神者套装", img: "God_Slayer_armor.png", tag: "护甲", d: "闪避+减伤毕业甲。" },
          { n: "血神圣杯", img: "Chalice_of_the_Blood_God.png", tag: "饰品", d: "最强回复饰品之一。" },
          { n: "纳米技术", img: "Nanotech.png", tag: "饰品", d: "纳米飞刀强化，潜行爆发毕业件。" },
          { n: "日蚀魔镜", img: "Eclipse_Mirror.png", tag: "饰品", d: "闪避+爆发加成。" },
          { n: "化绵留香石", img: "The_Sponge.png", tag: "饰品", d: "吸收减益转回复。" }
        ]
      },
      {
        stage: "至尊灾厄/终焉机甲前（灾厄）",
        gear: [
          { n: "动能寻迹镖", img: "Dynamic_Pursuer.png", tag: "武器", d: "追踪镖，机甲战好手。" },
          { n: "炽天使", img: "Seraphim.png", tag: "武器", d: "光羽连射，空战一流。" },
          { n: "狂龙翼火", img: "Wrathwing.png", tag: "武器", d: "龙火投掷，范围焚烧。" },
          { n: "古圣金源套装", img: "Auric_Tesla_armor.png", tag: "护甲", d: "圣金源甲，全职业终局甲。" },
          { n: "月亮行者翼靴", img: "Seraph_Tracers.png", tag: "饰品", d: "翼靴合体毕业件。" },
          { n: "神之壁垒", img: "Rampart_of_Deities.png", tag: "饰品", d: "击杀回血+减伤。" },
          { n: "辐辉", img: "Radiance.png", tag: "饰品", d: "全属性光环。" },
          { n: "幽灵披风", img: "Spectral_Veil.png", tag: "饰品", d: "冲刺幻影+无敌帧。" },
          { n: "精准手套", img: "Glove_of_Precision.png", tag: "饰品", d: "暴击核心不摘。" }
        ]
      },
      {
        stage: "终局（灾厄毕业）",
        gear: [
          { n: "星神之杀", img: "Celestus.png", tag: "武器", d: "终焉机甲掉落月刃。" },
          { n: "献祭", img: "Sacrifice.png", tag: "武器", d: "至尊灾厄掉落毕业匕首。" },
          { n: "猩红恶魔", img: "Scarlet_Devil.png", tag: "武器", d: "终局飞刀，暗影爆发之王。" },
          { n: "魔影套装", img: "Demonshade_armor.png", tag: "护甲", d: "灾厄终局毕业甲。" },
          { n: "嘉登之心", img: "Draedon's_Heart.png", tag: "饰品", d: "全属性毕业饰品。" },
          { n: "纳米技术", img: "Nanotech.png", tag: "饰品", d: "盗贼毕业核心件。" },
          { n: "血神圣杯", img: "Chalice_of_the_Blood_God.png", tag: "饰品", d: "生存终极保障。" }
        ]
      }
    ]
  }
];
