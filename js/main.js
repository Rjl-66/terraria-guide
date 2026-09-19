/* ============================================================
   泰拉攻略站 · 交互脚本
   纯原生 JavaScript，没有任何依赖。
   每个功能都包在函数里，在下面 init() 中按页面自动启用。
   ============================================================ */

(function () {
  "use strict";

  var DATA = window.TERRARIA_DATA || { stages: [], bosses: [], categories: [], rarityList: [], items: [], classes: [], pages: [] };
  /* 灾厄模组数据（js/data-calamity.js，由脚本自动生成） */
  var CAL = window.TERRARIA_DATA_CALAMITY || { items: [], bosses: [] };
  /* 灾厄模组职业攻略数据（js/data-calamity-classes.js） */
  var CAL_CLASSES = window.TERRARIA_CALAMITY_CLASSES || [];

  /* ---------- 通用小工具 ---------- */

  /* 把字符串数组拼成 <li> 列表（避免 HTML 注入） */
  function li(list) {
    return list.map(function (text) {
      return "<li>" + escapeHtml(text) + "</li>";
    }).join("");
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* 物品图标：使用本地 img/ 目录下的游戏内精灵图（从官方 Wiki 下载），
     图片缺失时自动退回 emoji 占位 */
  function imgHTML(file, name, emoji) {
    var fallback = '<span class="img-fallback">' + (emoji || "🎒") + "</span>";
    if (!file) return '<span class="item-img">' + fallback + "</span>";
    var url = "img/" + encodeURIComponent(file);
    return '<span class="item-img">' +
      '<img src="' + url + '" alt="' + escapeHtml(name) + '" title="' + escapeHtml(name) + '" ' +
      'onerror="this.parentNode.classList.add(\'no-img\')">' +
      fallback + "</span>";
  }

  /* 不同分类的 emoji 占位 */
  var CAT_EMOJI = { "武器": "⚔️", "盔甲": "🪖", "饰品": "💍", "药水": "🧪", "材料": "🪨", "NPC": "🧑‍🌾" };
  var TAG_EMOJI = { "武器": "⚔️", "护甲": "🪖", "饰品": "💍", "弹药": "🎯" };

  /* 物品/BOSS 合并列表（原版 + 灾厄），origin 缺省视为原版 */
  function allItems() {
    return DATA.items.concat(CAL.items || []).map(function (it) {
      return { name: it.name, cn: it.cn || "", img: it.img, cat: it.cat, origin: it.origin || "vanilla", rarity: it.rarity, damage: it.damage, source: it.source, desc: it.desc };
    });
  }
  function allBosses() {
    return DATA.bosses.concat(CAL.bosses || []).map(function (b) {
      return { id: b.id, name: b.name, icon: b.icon, img: b.img || "", stage: b.stage, origin: b.origin || "vanilla", summon: b.summon, prepare: b.prepare, tips: b.tips, drops: b.drops };
    });
  }

  /* ---------- 1. 顶部导航：当前页高亮 + 手机端汉堡菜单 ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");

    if (toggle && links) {
      toggle.addEventListener("click", function () {
        links.classList.toggle("open");
      });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () { links.classList.remove("open"); });
      });
    }

    var page = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      if (a.getAttribute("href") === page) a.classList.add("active");
    });
  }

  /* ---------- 2. 顶部全站搜索：物品 + BOSS + 文章，下拉建议 + 回车直达 ---------- */
  function initGlobalSearch() {
    var input = document.getElementById("globalSearch");
    var drop = document.getElementById("globalDrop");
    if (!input || !drop) return;

    /* 建立搜索索引 */
    var idx = [];
    (DATA.pages || []).forEach(function (p) {
      idx.push({ label: p.title, sub: p.type, href: p.href });
    });
    allBosses().forEach(function (b) {
      idx.push({ label: b.name, sub: (b.origin === "calamity" ? "灾厄 " : "") + "BOSS 攻略", href: "bosses.html#boss-" + b.id });
    });
    allItems().forEach(function (it) {
      var disp = it.cn ? it.cn : it.name;
      idx.push({
        label: disp,
        en: it.name,
        cn: it.cn || "",
        sub: (it.origin === "calamity" ? "灾厄" : "原版") + "物品 · " + it.cat,
        href: "items.html?q=" + encodeURIComponent(it.cn || it.name) + (it.origin === "calamity" ? "&origin=calamity" : "")
      });
    });

    function search(q) {
      q = q.trim().toLowerCase();
      if (!q) return [];
      return idx.filter(function (x) {
        return x.label.toLowerCase().indexOf(q) !== -1 ||
               (x.en && x.en.toLowerCase().indexOf(q) !== -1);
      }).slice(0, 8);
    }

    function show(list) {
      if (!list.length) {
        drop.innerHTML = '<div class="g-empty">没有找到相关内容，换个关键词试试</div>';
      } else {
        drop.innerHTML = list.map(function (x) {
          return '<a class="g-item" href="' + x.href + '"><b>' + escapeHtml(x.label) + "</b><span>" + escapeHtml(x.sub) + "</span></a>";
        }).join("");
      }
      drop.classList.add("show");
    }

    function hide() { drop.classList.remove("show"); }

    input.addEventListener("input", function () {
      if (!input.value.trim()) { hide(); return; }
      show(search(input.value));
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var list = search(input.value);
        if (list.length) location.href = list[0].href; // 回车直达第一条结果
      } else if (e.key === "Escape") {
        hide();
      }
    });

    /* 点击别处收起下拉 */
    document.addEventListener("click", function (e) {
      if (!drop.contains(e.target) && e.target !== input) hide();
    });
    drop.addEventListener("click", function () {
      hide();
      input.blur();
    });
  }

  /* ---------- 3. BOSS 页：渲染卡片（真实图片 + 原版/灾厄） + 阶段筛选 ---------- */
  function renderBosses() {
    var wrap = document.getElementById("bossList");
    if (!wrap) return;

    var stageName = {};
    DATA.stages.forEach(function (s) { stageName[s.id] = s.name; });

    wrap.innerHTML = allBosses().map(function (b) {
      var originBadge = b.origin === "calamity" ? '<span class="origin-badge">灾厄</span>' : "";
      return '' +
        '<details class="boss-card accordion-single" id="boss-' + b.id + '" data-stage="' + b.stage + '" data-origin="' + b.origin + '">' +
          '<summary>' +
            '<span class="boss-icon">' + imgHTML(b.img, b.name, b.icon) + '</span>' +
            '<span class="boss-name">' + escapeHtml(b.name) + originBadge + '</span>' +
            '<span class="stage-badge stage-' + b.stage + '">' + stageName[b.stage] + '</span>' +
          '</summary>' +
          '<div class="boss-body">' +
            '<p class="boss-row"><b>📣 召唤方式</b><br>' + escapeHtml(b.summon) + '</p>' +
            '<div class="boss-row"><b>🎒 战前准备</b><ul class="bullet">' + li(b.prepare) + '</ul></div>' +
            '<div class="boss-row"><b>⚔️ 打法要点（含手机端提示）</b><ul class="bullet">' + li(b.tips) + '</ul></div>' +
            '<p class="boss-row drops"><b>🎁 主要掉落</b><br>' + escapeHtml(b.drops.join("、")) + '</p>' +
          '</div>' +
        '</details>';
    }).join("");

    var stageChips = document.querySelectorAll("#stageChips .chip");
    var originChips = document.querySelectorAll("#originChips .chip");
    var empty = document.getElementById("emptyTip");
    var cards = wrap.querySelectorAll(".boss-card");

    var state = { stage: "all", origin: "all" };

    function applyFilter() {
      var visible = 0;
      cards.forEach(function (card) {
        var show = (state.stage === "all" || card.getAttribute("data-stage") === state.stage) &&
                   (state.origin === "all" || card.getAttribute("data-origin") === state.origin);
        card.style.display = show ? "" : "none";
        if (!show) card.open = false;
        if (show) visible++;
      });
      stageChips.forEach(function (c) {
        c.classList.toggle("active", c.getAttribute("data-stage") === state.stage);
      });
      originChips.forEach(function (c) {
        c.classList.toggle("active", c.getAttribute("data-origin") === state.origin);
      });
      if (empty) empty.style.display = visible === 0 ? "block" : "none";
    }

    stageChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.stage = chip.getAttribute("data-stage");
        applyFilter();
      });
    });
    originChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.origin = chip.getAttribute("data-origin");
        applyFilter();
      });
    });

    var params = new URLSearchParams(location.search);
    var hash = location.hash;
    if (hash.indexOf("#boss-") === 0) {
      applyFilter();
    } else {
      state.stage = params.get("stage") || "all";
      state.origin = params.get("origin") || "all";
      applyFilter();
    }

    if (hash.indexOf("#boss-") === 0) {
      var target = document.querySelector(hash);
      if (target) {
        target.open = true;
        setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "start" }); }, 150);
      }
    }
  }

  /* ---------- 4. 物品页：渲染（含游戏内图标）+ 搜索 + 来源/分类/稀有度筛选 ---------- */
  function renderItems() {
    var wrap = document.getElementById("itemList");
    if (!wrap) return;

    wrap.innerHTML = allItems().map(function (it) {
      var statHtml = it.damage ? '<div class="item-stat">💥 ' + escapeHtml(it.damage) + "</div>" : "";
      var originBadge = it.origin === "calamity" ? '<span class="origin-badge">灾厄</span>' : "";
      var dispName = it.cn ? it.cn : it.name;
      var enHtml = it.cn ? '<div class="item-en">' + escapeHtml(it.name) + "</div>" : "";
      return '' +
        '<div class="item-card r-' + escapeHtml(it.rarity) + '" ' +
          'data-name="' + escapeHtml(it.name) + '" ' +
          'data-cat="' + escapeHtml(it.cat) + '" ' +
          'data-rarity="' + escapeHtml(it.rarity) + '" ' +
          'data-origin="' + it.origin + '" ' +
          'data-all="' + escapeHtml(it.name + " " + (it.cn || "") + " " + it.source + " " + it.desc + " " + it.cat).toLowerCase() + '">' +
          imgHTML(it.img, dispName, CAT_EMOJI[it.cat]) +
          '<div class="item-main">' +
            '<div class="item-head">' +
              '<span class="item-name">' + escapeHtml(dispName) + "</span>" +
              '<span class="item-cat">' + escapeHtml(it.cat) + "</span>" +
              '<span class="item-rarity">' + escapeHtml(it.rarity) + "</span>" +
              originBadge +
            "</div>" +
            enHtml +
            statHtml +
            '<div class="item-source">📍 ' + escapeHtml(it.source) + "</div>" +
            '<div class="item-desc">' + escapeHtml(it.desc) + "</div>" +
          "</div>" +
        "</div>";
    }).join("");

    var search = document.getElementById("itemSearch");
    var catChips = document.querySelectorAll("#catChips .chip");
    var originChips = document.querySelectorAll("#originChips .chip");
    var raritySel = document.getElementById("raritySelect");
    var empty = document.getElementById("emptyTip");
    var cards = wrap.querySelectorAll(".item-card");

    var state = { q: "", cat: "all", rarity: "all", origin: "all" };

    function applyFilter() {
      var visible = 0;
      cards.forEach(function (card) {
        var matchQ = state.q === "" || card.getAttribute("data-all").indexOf(state.q) !== -1;
        var matchCat = state.cat === "all" || card.getAttribute("data-cat") === state.cat;
        var matchR = state.rarity === "all" || card.getAttribute("data-rarity") === state.rarity;
        var matchO = state.origin === "all" || card.getAttribute("data-origin") === state.origin;
        var show = matchQ && matchCat && matchR && matchO;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });
      if (empty) empty.style.display = visible === 0 ? "block" : "none";
    }

    if (search) {
      search.addEventListener("input", function () {
        state.q = search.value.trim().toLowerCase();
        applyFilter();
      });
    }

    catChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.cat = chip.getAttribute("data-cat");
        catChips.forEach(function (c) { c.classList.toggle("active", c === chip); });
        applyFilter();
      });
    });

    originChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.origin = chip.getAttribute("data-origin");
        originChips.forEach(function (c) { c.classList.toggle("active", c === chip); });
        applyFilter();
      });
    });

    if (raritySel) {
      raritySel.addEventListener("change", function () {
        state.rarity = raritySel.value;
        applyFilter();
      });
    }

    var params = new URLSearchParams(location.search);
    if (params.get("q")) {
      state.q = params.get("q").trim().toLowerCase();
      if (search) search.value = params.get("q");
    }
    if (params.get("cat")) {
      state.cat = params.get("cat");
      catChips.forEach(function (c) { c.classList.toggle("active", c.getAttribute("data-cat") === state.cat); });
    }
    if (params.get("rarity")) {
      state.rarity = params.get("rarity");
      if (raritySel) raritySel.value = state.rarity;
    }
    if (params.get("origin")) {
      state.origin = params.get("origin");
      originChips.forEach(function (c) { c.classList.toggle("active", c.getAttribute("data-origin") === state.origin); });
    }
    applyFilter();
  }

  /* ---------- 5. 职业攻略页：渲染四大职业全流程 + 职业筛选 ---------- */
  function renderClasses() {
    var wrap = document.getElementById("classList");
    if (!wrap) return;

    wrap.innerHTML = DATA.classes.map(function (c) {
      function stageHTML(s) {
        var gear = s.gear.map(function (g) {
          return '<div class="gear-card">' +
            imgHTML(g.img, g.n, TAG_EMOJI[g.tag] || "🎒") +
            '<div class="gear-info">' +
              '<div class="gear-name">' + escapeHtml(g.n) +
                '<span class="gear-tag tag-' + escapeHtml(g.tag) + '">' + escapeHtml(g.tag) + "</span>" +
              "</div>" +
              '<div class="gear-note">' + escapeHtml(g.d) + "</div>" +
            "</div></div>";
        }).join("");
        return '<div class="stage-block"><h4 class="stage-name">' + escapeHtml(s.stage) + '</h4><div class="gear-grid">' + gear + "</div></div>";
      }
      var stages = c.stages.map(stageHTML).join("");
      var calamity = "";
      if (c.calamity && c.calamity.length) {
        calamity = '<div class="calamity-wrap"><h4 class="calamity-title">🔥 灾厄模组攻略</h4>' +
          c.calamity.map(stageHTML).join("") + "</div>";
      }

      return '<section class="class-block" id="class-' + c.id + '" data-class="' + c.id + '">' +
        '<h3 class="class-title">' + c.icon + " " + escapeHtml(c.name) + "</h3>" +
        '<p class="class-intro">' + escapeHtml(c.intro) + "</p>" +
        stages + calamity + "</section>";
    }).join("");

    var chips = document.querySelectorAll("#classChips .chip");
    var blocks = wrap.querySelectorAll(".class-block");

    function applyFilter(cls) {
      blocks.forEach(function (block) {
        block.style.display = cls === "all" || block.getAttribute("data-class") === cls ? "" : "none";
      });
      chips.forEach(function (c) {
        c.classList.toggle("active", c.getAttribute("data-class") === cls);
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        applyFilter(chip.getAttribute("data-class"));
      });
    });

    /* 支持 classes.html?class=mage 这种链接 */
    var want = new URLSearchParams(location.search).get("class");
    if (want) applyFilter(want);
  }

  /* ---------- 5b. 灾厄职业攻略页：渲染五大职业（战士/射手/法师/召唤师/盗贼） ---------- */
  function renderCalamityClasses() {
    var wrap = document.getElementById("calamityClassList");
    if (!wrap) return;

    wrap.innerHTML = CAL_CLASSES.map(function (c) {
      function stageHTML(s) {
        var gear = s.gear.map(function (g) {
          return '<div class="gear-card">' +
            imgHTML(g.img, g.n, TAG_EMOJI[g.tag] || "🎒") +
            '<div class="gear-info">' +
              '<div class="gear-name">' + escapeHtml(g.n) +
                '<span class="gear-tag tag-' + escapeHtml(g.tag) + '">' + escapeHtml(g.tag) + "</span>" +
              "</div>" +
              '<div class="gear-note">' + escapeHtml(g.d) + "</div>" +
            "</div></div>";
        }).join("");
        return '<div class="stage-block"><h4 class="stage-name">' + escapeHtml(s.stage) + '</h4><div class="gear-grid">' + gear + "</div></div>";
      }
      var stages = c.stages.map(stageHTML).join("");
      return '<section class="class-block calamity-class-block" id="cal-class-' + c.id + '" data-class="' + c.id + '">' +
        '<h3 class="class-title">' + c.icon + " " + escapeHtml(c.name) +
          '<span class="origin-badge">灾厄</span>' +
        "</h3>" +
        '<p class="class-intro">' + escapeHtml(c.intro) + "</p>" +
        stages + "</section>";
    }).join("");

    var chips = document.querySelectorAll("#calamityClassChips .chip");
    var blocks = wrap.querySelectorAll(".calamity-class-block");

    function applyFilter(cls) {
      blocks.forEach(function (block) {
        block.style.display = cls === "all" || block.getAttribute("data-class") === cls ? "" : "none";
      });
      chips.forEach(function (c) {
        c.classList.toggle("active", c.getAttribute("data-class") === cls);
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        applyFilter(chip.getAttribute("data-class"));
      });
    });

    var want = new URLSearchParams(location.search).get("class");
    if (want) applyFilter(want);
  }

  /* ---------- 6. 静态折叠页（指南/Wiki）：带 #锚点 的链接自动展开 ---------- */
  function initAnchorOpen() {
    function openHash() {
      if (!location.hash) return;
      var target = document.querySelector(location.hash);
      if (target && target.tagName === "DETAILS") {
        target.open = true;
        setTimeout(function () { target.scrollIntoView({ behavior: "smooth", block: "start" }); }, 100);
      }
    }
    window.addEventListener("hashchange", openHash);
    openHash();
  }

  /* ---------- 7. 页脚年份自动更新 ---------- */
  function initYear() {
    var el = document.querySelector(".js-year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- 8. 底部留言板（mailto 发送到站长邮箱） ---------- */
  var FEEDBACK_EMAIL = "2675289992@qq.com"; /* ← 换成你自己的邮箱 */

  function renderFeedback() {
    var sec = document.createElement("section");
    sec.className = "feedback-board";
    sec.innerHTML =
      '<div class="fb-inner">' +
        '<h2>📝 留言板</h2>' +
        '<p class="fb-desc">发现错误、有建议，或想补充攻略内容？给站长留言吧～</p>' +
        '<form id="fbForm">' +
          '<textarea id="fbMsg" rows="4" maxlength="2000" required placeholder="写下你的留言 / 反馈内容…"></textarea>' +
          '<div class="fb-row">' +
            '<input id="fbContact" maxlength="100" placeholder="联系方式（选填：QQ / 邮箱）">' +
            '<button type="submit" class="fb-btn">✉️ 发送留言</button>' +
          '</div>' +
          '<p class="fb-tip" id="fbTip">点击发送会打开你设备上的邮件应用，收件邮箱：' + escapeHtml(FEEDBACK_EMAIL) + '</p>' +
        '</form>' +
      '</div>';
    document.body.appendChild(sec);

    var form = sec.querySelector("#fbForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = sec.querySelector("#fbMsg").value.trim();
      var contact = sec.querySelector("#fbContact").value.trim();
      if (!msg) return;
      var subject = encodeURIComponent("[泰拉攻略站] 用户留言");
      var body = encodeURIComponent(msg + (contact ? "\n\n—— 联系方式：" + contact : "") + "\n（来自页面：" + location.pathname.split("/").pop() + "）");
      location.href = "mailto:" + FEEDBACK_EMAIL + "?subject=" + subject + "&body=" + body;
    });
  }

  /* 页面加载后初始化所有功能 */
  document.addEventListener("DOMContentLoaded", function () {
    initNav();
    initGlobalSearch();
    renderBosses();
    renderClasses();
    renderCalamityClasses();
    renderItems();
    initAnchorOpen();
    initYear();
    renderFeedback();
  });
})();
