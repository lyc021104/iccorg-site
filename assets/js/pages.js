(function () {
  "use strict";

  var ANN = {
    notice: { total: 108, items: [{"tag": "通知", "title": "信息发布 | 关于公示2025-2026学年全球发明大会（中国）竞赛活动全国总决赛暨国际赛获奖名单的通知", "url": "https://mp.weixin.qq.com/s/SPbi-vkgp1NWj0rf-5cn1A"}, {"tag": "通知", "title": "2025-2026学年全球发明大会（中国）竞赛活动全国总决赛暨国际赛成功闭幕", "url": "https://mp.weixin.qq.com/s/FzuFIFz4j5DvIn9jlntk2A"}, {"tag": "通知", "title": "2025—2026学年全球发明大会（中国）竞赛活动全国总决赛暨国际赛在郑闭幕", "url": "https://mp.weixin.qq.com/s/SCtpXf_kOf9pkBm0SvveKw"}, {"tag": "通知", "title": "2025-2026学年全球发明大会（中国）竞赛活动全国总决赛暨国际赛在郑州开幕", "url": "https://mp.weixin.qq.com/s/95IxsQrNfOSGYoqjWPQHNg"}, {"tag": "通知", "title": "全球发明大会（中国）竞赛活动港澳赛区赛事完美落幕 感谢所有的支持与付出", "url": "https://mp.weixin.qq.com/s/z1dwR_ATjSXgvMV0Xa4e6g"}, {"tag": "通知", "title": "全球发明大会（中国）竞赛活动智能制造-未来智造家主题赛完美落幕，感谢所有的支持与付出", "url": "https://mp.weixin.qq.com/s/6PqVfy4RqrYUt3OOawfZ7g"}, {"tag": "通知", "title": "关于2025-2026学年全球发明大会（中国）竞赛活动全国总决赛暨国际赛赛事安排细则", "url": "https://mp.weixin.qq.com/s/agN5M1tkWUNgUsVXxpUMeQ"}, {"tag": "通知", "title": "关于举办2025-2026学年全球发明大会（中国）竞赛活动全国总决赛暨国际赛的通知", "url": "https://mp.weixin.qq.com/s/SoZ9fB0sajw4UG9Fo9yscg"}, {"tag": "通知", "title": "关于公示2025-2026学年全球发明大会（中国）港澳赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/pDgcatN_e_b0ggBP7dWaHg"}, {"tag": "通知", "title": "关于公示2025-2026学年全球发明大会（中国）上海赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/gDYffM7c-8LWPqeKlrJKFQ"}] },
    info: { total: 11, items: [{"tag": "信息发布", "title": "公开声明（6 月 3 日）", "url": "https://mp.weixin.qq.com/s/-XZl0WELHT8AbPDRqOEPTQ"}, {"tag": "信息发布", "title": "全国对外友协副秘书长吉拥军率基金会工作组赴河南郑州考察", "url": "https://mp.weixin.qq.com/s/n9e6ISCBEKYdLDIeHATBgg"}, {"tag": "信息发布", "title": "信息发布 | 2025-2026学年全球发明大会（中国）竞赛活动省赛协调单位名单（第四批）", "url": "https://mp.weixin.qq.com/s/_umP_3TSgJd3gL8m0TImtw"}, {"tag": "信息发布", "title": "青少年科创人才培育座谈会在北京市第二中学举行", "url": "https://mp.weixin.qq.com/s/VBWwWnIJrMnkvTZHd2scKw"}, {"tag": "信息发布", "title": "信息发布 | 2025-2026学年全球发明大会（中国）竞赛活动省赛、主题赛协调单位名单（第三批）", "url": "https://mp.weixin.qq.com/s/pNKRpUmHlPdUb7mqF4dumw"}, {"tag": "信息发布", "title": "赛事通知 | 2025-2026学年全球发明大会（中国）竞赛活动开放报名", "url": "https://mp.weixin.qq.com/s/TK6G_RjtQcq3P4DpMm8t6w"}, {"tag": "信息发布", "title": "参赛攻略｜2025-2026学年全球发明大会（中国）竞赛活动报名指南（个人）", "url": "https://mp.weixin.qq.com/s/FD8gG4g2Ubig90HwIXrjRQ"}, {"tag": "信息发布", "title": "参赛攻略｜2025-2026学年全球发明大会（中国）竞赛活动报名指南（团队）", "url": "https://mp.weixin.qq.com/s/Mqejo4aAyoyNa48NXyQ8dA"}, {"tag": "信息发布", "title": "信息发布 | 2025-2026学年全球发明大会（中国）竞赛活动省赛、主题赛协调单位名单（第二批）", "url": "https://mp.weixin.qq.com/s/VL78lqo9y852VwjdZVgZRQ"}, {"tag": "信息发布", "title": "公开声明", "url": "https://mp.weixin.qq.com/s/hdvXbHHQVcbv5YweRiKkaQ"}] },
    news: { total: 5, items: [{"tag": "资讯", "title": "2025-2026学年全球发明大会（中国）竞赛活动协调单位面审工作会在京举行", "url": "https://mp.weixin.qq.com/s/fMh2vJWNVM5CU6Y02fM3QQ"}, {"tag": "资讯", "title": "徐赐明秘书长赴长沙、南京两地考察全球发明大会（中国）竞赛活动合作事宜", "url": "https://mp.weixin.qq.com/s/fmeCjQBx-usB27p9sX3dlg"}, {"tag": "资讯", "title": "（转）全球发明大会（中国）竞赛活动浙江赛区举行揭牌仪式", "url": "https://mp.weixin.qq.com/s/lM1QlZEusKGRgLxNK3agGw"}, {"tag": "资讯", "title": "徐赐明秘书长赴浙江调研推进全球发明大会（中国）竞赛活动相关工作", "url": "https://mp.weixin.qq.com/s/rpNjp0EKfW23qoIeeV47zA"}, {"tag": "资讯", "title": "全球发明大会中国区全国总决赛一等奖获得者荣获第77届德国纽伦堡国际发明展金奖", "url": "https://mp.weixin.qq.com/s/yKTKT-TCNrQ4WxgkvZepzw"}] }
  };
  var PAST = {
    all: { total: 30, items: [{"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区海南赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/XRwHWif5mY5Z9fUiHrgnyA"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区广东赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/RMBupfccXc5RT89T_3e-mg"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(健康的未来-“启点未来”无人机创新设计）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/amtbjUvd59tMpSMsdYRHDA"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区湖北赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/TkdxNs0Ujk88JeFSyJkXiQ"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区天津赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/nGoHbeI_FLASe0MAi5s7rw"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区安徽赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/j3RC45OcasvJVhbY_5XY2Q"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区新疆赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/-ObSGGW1Gc6OceMvy4XUuQ"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区云南赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/scg-XCPdhp4YtjZb9hJCgg"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区内蒙古赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/odBOPkSF_sTFhZnntyrYCA"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区山东赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/z4_FnMIwNWwRO3j_kKaSsQ"}] },
    province: { total: 15, items: [{"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区海南赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/XRwHWif5mY5Z9fUiHrgnyA"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区广东赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/RMBupfccXc5RT89T_3e-mg"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区湖北赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/TkdxNs0Ujk88JeFSyJkXiQ"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区天津赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/nGoHbeI_FLASe0MAi5s7rw"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区安徽赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/j3RC45OcasvJVhbY_5XY2Q"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区新疆赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/-ObSGGW1Gc6OceMvy4XUuQ"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区云南赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/scg-XCPdhp4YtjZb9hJCgg"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区内蒙古赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/odBOPkSF_sTFhZnntyrYCA"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区山东赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/z4_FnMIwNWwRO3j_kKaSsQ"}, {"tag": "2024-2025学年省赛", "title": "关于公示2024-2025学年全球发明大会中国区河南赛区竞赛活动获奖结果的通知", "url": "https://mp.weixin.qq.com/s/F6X65aQNloYraVqOG4-uhw"}] },
    theme: { total: 15, items: [{"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(健康的未来-“启点未来”无人机创新设计）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/amtbjUvd59tMpSMsdYRHDA"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(与自然为友-生态模拟算法设计挑战）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/E37SN3kbfw1xkPxvxMQHJw"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(无障碍世界-智慧家园科学素养挑战）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/1eyfrV4Z-ZJneRscoHCvJA"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(健康的未来-YPC人工智能赋能未来健康）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/o2Bt85ku8AyB9c-CakHNjg"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(传承与弘扬中华文明-薪火相传）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/1EzRH9NeYdtMwUx11D_-8w"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(与自然为友-自然之谜算法设计挑战）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/gZQ3f4prISJt3Xxsi4zlQA"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛（传承与弘扬中华文明-“文明创·承未来”发明创新）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/Wj6RegF6K9Cq8obnJ12QCg"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(无障碍世界-低空情境无人机挑战）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/1u0nYmWGElTOkyL1dE7Xlg"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(与自然为友-守护自然编程创意挑战）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/vTm5u8As8UbPKL4PX7zmtA"}, {"tag": "2024-2025学年线上主题赛", "title": "关于公示2024-2025学年全球发明大会中国区线上主题赛(未来学校-源码AI编程挑战）获奖结果的通知", "url": "https://mp.weixin.qq.com/s/4iCTsyYbDHqnfGudOW1gIw"}] }
  };

  var LINK_ICON = "<svg viewBox=\"0 0 1024 1024\"><path fill=\"currentColor\" d=\"M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z\"></path></svg>";
  var CARET = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z\"/></svg>";
  var ARROW_LEFT = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z\"/></svg>";
  var ARROW_RIGHT = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z\"/></svg>";
  var MORE = "<svg viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"currentColor\" d=\"M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224\"/></svg>";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function noticeHTML(it) {
    return '<div class="notice-item" data-url="' + esc(it.url) + '">' +
      '<div class="item-tags"><span class="el-tag el-tag--info el-tag--small el-tag--light tag"><span class="el-tag__content">' + esc(it.tag) + '</span></span></div>' +
      '<span class="notice-title">' + esc(it.title) + '</span>' +
      '<div class="link-hint"><i class="el-icon" style="font-size: 12px;">' + LINK_ICON + '</i><span>' + esc(it.url) + '</span></div>' +
      '</div>';
  }

  function pagerHTML(total, size) {
    size = size || 10;
    var pages = Math.max(1, Math.ceil(total / size));
    var nums = [];
    if (pages <= 7) {
      for (var i = 1; i <= pages; i++) nums.push(i);
    } else {
      nums = [1, 2, 3, 4, 5, 6, "more", pages];
    }
    var html = nums.map(function (n) {
      if (n === "more") return '<li class="more btn-quicknext el-icon" aria-label="向后 5 页">' + MORE + '</li>';
      return '<li class="' + (n === 1 ? "is-active number" : "number") + '" data-page="' + n + '">' + n + '</li>';
    }).join("");
    return '<div class="pagination-container"><div class="el-pagination is-background">' +
      '<span class="el-pagination__total">共 ' + total + ' 条</span>' +
      '<span class="el-pagination__sizes"><span class="size-box"><span>10条/页</span><i class="el-icon">' + CARET + '</i></span></span>' +
      '<button type="button" class="btn-prev" aria-label="上一页" disabled>' + ARROW_LEFT + '</button>' +
      '<ul class="el-pager">' + html + '</ul>' +
      '<button type="button" class="btn-next" aria-label="下一页">' + ARROW_RIGHT + '</button>' +
      '<span class="el-pagination__jump"><span class="el-pagination__goto">前往</span><input class="jump-input" type="number" min="1" max="' + pages + '" value="1" aria-label="页"><span>页</span></span>' +
      '</div></div>';
  }

  function renderList(listEl, items, total) {
    if (!listEl) return;
    listEl.innerHTML = items.map(noticeHTML).join("");
    var pg = document.querySelector(".pagination-container");
    if (pg) pg.outerHTML = pagerHTML(total);
  }

  function wirePagination() {
    document.addEventListener("click", function (e) {
      var li = e.target.closest(".el-pager li");
      var next = e.target.closest(".btn-next");
      var prev = e.target.closest(".btn-prev");
      if (!li && !next && !prev) return;
      if (li && li.classList.contains("more")) return;
      var page = li ? Number(li.getAttribute("data-page")) : (next ? 2 : 1);
      if (page > 1 && window.ICC) window.ICC.showMessage("info", "演示页面：仅复刻第一页数据");
      if (li && page === 1) return;
      var input = document.querySelector(".jump-input");
      if (input) input.value = "1";
    });
    document.addEventListener("keydown", function (e) {
      if (e.target && e.target.classList && e.target.classList.contains("jump-input") && e.key === "Enter") {
        var v = Number(e.target.value);
        if (v > 1 && window.ICC) window.ICC.showMessage("info", "演示页面：仅复刻第一页数据");
        e.target.value = "1";
      }
    });
  }

  document.addEventListener("click", function (e) {
    var item = e.target.closest(".notice-item");
    if (!item) return;
    var url = item.getAttribute("data-url");
    if (url) window.open(url, "_blank");
  });

  var annList = document.getElementById("notificationList");
  if (annList && document.querySelector(".notification-page")) {
    var annChips = document.querySelectorAll(".tag-filter .el-check-tag");
    annChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chip.classList.toggle("is-checked");
        var c0 = annChips[0].classList.contains("is-checked");
        var c1 = annChips[1].classList.contains("is-checked");
        var c2 = annChips[2].classList.contains("is-checked");
        var ds, total;
        if (c2 || (!c0 && !c1 && !c2)) {
          ds = ANN.notice; total = 108;
        } else if (!c0 && c1) {
          ds = ANN.news; total = 5;
        } else {
          ds = ANN.info; total = (c0 && c1) ? 16 : 11;
        }
        renderList(annList, ds.items, total);
      });
    });
  }

  var pastList = document.getElementById("notificationList");
  if (pastList && document.querySelector(".previous-page")) {
    var pastChips = document.querySelectorAll(".tag-filter .el-check-tag");
    pastChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chip.classList.toggle("is-checked");
        var c0 = pastChips[0].classList.contains("is-checked");
        var c1 = pastChips[1].classList.contains("is-checked");
        var ds;
        if (c0 && c1) ds = PAST.all;
        else if (c0) ds = PAST.province;
        else if (c1) ds = PAST.theme;
        else ds = PAST.all;
        renderList(pastList, ds.items, ds.total);
      });
    });
  }

  wirePagination();
})();
