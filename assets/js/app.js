(function () {
  "use strict";

  /* =======================================================
     下拉选择器（复刻 Element Plus Select 的交互与外观）
     ======================================================= */

  var SELECT_OPTIONS = {
    awardYear: ["2024-2025", "2025-2026"],
    awardType: [
      "全国总决赛获奖证书",
      "志愿者证书",
      "优秀指导教师证书",
      "公益主题奖",
      "省赛获奖证书",
      "主题赛获奖证书"
    ]
  };

  var CHECK_ICON =
    '<span class="check-icon"><svg width="14" height="14" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">' +
    '<path fill="currentColor" d="M406.656 844.8 167.936 606.08l45.248-45.248 193.472 193.472 404.16-404.16 45.248 45.248z"/></svg></span>';

  var selectStates = {};
  var openSelect = null;

  function createPopper(name) {
    var popper = document.createElement("div");
    popper.className = "el-select__popper";
    popper.setAttribute("role", "listbox");

    SELECT_OPTIONS[name].forEach(function (label) {
      var item = document.createElement("div");
      item.className = "el-select-dropdown__item";
      item.setAttribute("role", "option");
      item.innerHTML = "<span>" + label + "</span>" + CHECK_ICON;
      item.addEventListener("mousedown", function (e) {
        e.preventDefault();
      });
      item.addEventListener("click", function () {
        chooseOption(name, label);
      });
      popper.appendChild(item);
    });

    document.body.appendChild(popper);
    return popper;
  }

  function positionPopper(state) {
    var rect = state.el.getBoundingClientRect();
    state.popper.style.left = rect.left + "px";
    state.popper.style.top = rect.bottom + 12 + "px";
    state.popper.style.width = rect.width + 2 + "px";
  }

  function syncSelectedItem(state) {
    var items = state.popper.querySelectorAll(".el-select-dropdown__item");
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle("is-selected", items[i].innerText.trim() === state.value);
    }
  }

  function openSelectMenu(state) {
    if (openSelect && openSelect !== state) closeSelectMenu(openSelect, false);
    state.el.classList.add("is-open", "is-focused");
    state.el.setAttribute("aria-expanded", "true");
    positionPopper(state);
    state.popper.classList.add("is-open");
    openSelect = state;
  }

  function closeSelectMenu(state, keepFocus) {
    state.el.classList.remove("is-open");
    state.el.setAttribute("aria-expanded", "false");
    state.popper.classList.remove("is-open");
    if (!keepFocus) state.el.classList.remove("is-focused");
    if (openSelect === state) openSelect = null;
  }

  function chooseOption(name, value) {
    var state = selectStates[name];
    state.value = value;
    state.labelEl.textContent = value;
    state.el.classList.add("is-selected");
    state.el.classList.remove("is-error");
    syncSelectedItem(state);
    closeSelectMenu(state, true);
    clearFieldError(name);
  }

  function initSelect(name) {
    var el = document.getElementById("select-" + name);
    if (!el) return;
    var state = {
      name: name,
      el: el,
      labelEl: el.querySelector(".el-select__placeholder > span"),
      value: "",
      popper: createPopper(name)
    };
    selectStates[name] = state;

    el.addEventListener("mousedown", function (e) {
      e.preventDefault();
      el.focus();
      if (el.classList.contains("is-open")) {
        closeSelectMenu(state, true);
      } else {
        openSelectMenu(state);
      }
    });

    el.addEventListener("focus", function () {
      el.classList.add("is-focused");
    });

    el.addEventListener("blur", function () {
      if (!el.classList.contains("is-open")) el.classList.remove("is-focused");
    });

    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (el.classList.contains("is-open")) closeSelectMenu(state, true);
        else openSelectMenu(state);
      } else if (e.key === "Escape") {
        closeSelectMenu(state, true);
      } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        if (!el.classList.contains("is-open")) openSelectMenu(state);
      }
    });
  }

  initSelect("awardYear");
  initSelect("awardType");

  document.addEventListener("mousedown", function (e) {
    if (!openSelect) return;
    if (openSelect.el.contains(e.target) || openSelect.popper.contains(e.target)) return;
    closeSelectMenu(openSelect, false);
  });

  window.addEventListener("resize", function () {
    if (openSelect) {
      positionPopper(openSelect);
      if (window.innerWidth > 768) closeMobileMenu();
    }
  });

  window.addEventListener("scroll", function () {
    if (openSelect) positionPopper(openSelect);
  }, { passive: true });

  /* =======================================================
     表单校验
     ======================================================= */

  var form = document.getElementById("queryForm");
  var queryBtn = document.getElementById("queryBtn");
  var formMode = form ? form.getAttribute("data-mode") || "search" : "search";

  var RULES = {
    awardYear: [{ required: true, message: "请选择获奖年份" }],
    awardType: [{ required: true, message: "请选择获奖类型" }],
    participantName: [
      { required: true, message: formMode === "home" ? "请输入姓名/单位名称" : "请输入姓名" }
    ],
    idNumber: [
      { required: true, message: "请输入证件号码" },
      { pattern: /^[\da-zA-Z()（）]{5,25}$/, message: "证件号码格式不正确" }
    ]
  };

  function getFieldEl(name) {
    return document.querySelector('[data-field="' + name + '"]');
  }

  function getValue(name) {
    if (selectStates[name]) return selectStates[name].value;
    var input = document.getElementById("input-" + name);
    return input ? input.value.trim() : "";
  }

  function clearFieldError(name) {
    var field = getFieldEl(name);
    if (!field) return;
    field.classList.remove("is-error");
    var err = field.querySelector(".el-form-item__error");
    if (err) err.remove();
  }

  function showFieldError(name, message) {
    var field = getFieldEl(name);
    if (!field) return;
    field.classList.add("is-error");
    var err = field.querySelector(".el-form-item__error");
    if (!err) {
      err = document.createElement("div");
      err.className = "el-form-item__error";
      field.appendChild(err);
    }
    err.textContent = message;
  }

  function validateField(name) {
    var value = getValue(name);
    var rules = RULES[name] || [];
    clearFieldError(name);
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (rule.required && !value) {
        showFieldError(name, rule.message);
        return false;
      }
      if (rule.pattern && value && !rule.pattern.test(value)) {
        showFieldError(name, rule.message);
        return false;
      }
    }
    return true;
  }

  function validateForm() {
    var names = ["awardYear", "awardType", "participantName", "idNumber"];
    var firstInvalid = null;
    names.forEach(function (name) {
      if (!validateField(name) && !firstInvalid) firstInvalid = name;
    });
    return firstInvalid;
  }

  ["participantName", "idNumber"].forEach(function (name) {
    var input = document.getElementById("input-" + name);
    if (!input) return;
    var wrapper = input.closest(".el-input__wrapper");
    input.addEventListener("focus", function () {
      wrapper.classList.add("is-focus");
    });
    input.addEventListener("blur", function () {
      wrapper.classList.remove("is-focus");
      validateField(name);
    });
    input.addEventListener("input", function () {
      clearFieldError(name);
    });
  });

  /* =======================================================
     查询结果展示（复刻官方结果页：表格 + 证书预览）
     ======================================================= */

  var resultContainer = document.getElementById("resultContainer");

  var CERT_FIELDS = [
    ["certificateNumber", "证书编号"],
    ["awardLevel", "获奖级别"],
    ["awardName", "奖项"],
    ["competitionName", "赛项名称"],
    ["participantGroup", "参赛组别"],
    ["participantName", "参赛选手"],
    ["participantProvince", "参赛省(市)"],
    ["participantOrg", "参赛单位"],
    ["teacherName", "指导教师"],
    ["issueDate", "颁发日期"]
  ];

  var DEMO_CERTS = {
    national: {
      key: "national",
      image: "assets/img/cert-national.jpg",
      fields: {
        certificateNumber: "ICC2026G558174",
        awardLevel: "全国总决赛",
        awardName: "三等奖",
        competitionName: "智能除雾浮潜面罩",
        participantGroup: "P组（3至5/6年级）",
        participantName: "王雨佳岳",
        participantOrg: "成都市泡桐树小学天府校区",
        teacherName: "文群宇",
        issueDate: "2026年9月"
      }
    },
    provincial: {
      key: "provincial",
      image: "assets/img/cert-provincial.jpg",
      fields: {
        certificateNumber: "ICC2026S705320",
        awardLevel: "省赛",
        awardName: "一等奖",
        competitionName: "智能除雾浮潜面罩",
        participantGroup: "P组（3至5/6年级）",
        participantName: "王雨佳岳",
        participantOrg: "成都市泡桐树小学天府校区",
        teacherName: "文群宇",
        issueDate: "2026年9月"
      }
    }
  };

  function getDemoCert() {
    if (getValue("awardYear") !== "2025-2026") return null;
    if (getValue("participantName") !== "王雨佳岳") return null;
    if (getValue("idNumber") !== "510122201502250398") return null;
    var type = getValue("awardType");
    if (type === "全国总决赛获奖证书") return DEMO_CERTS.national;
    if (type === "省赛获奖证书") return DEMO_CERTS.provincial;
    return null;
  }

  function renderCertificateResult(cert) {
    var head = document.getElementById("certTableHead");
    var body = document.getElementById("certTableBody");
    head.innerHTML = "";
    body.innerHTML = "";

    CERT_FIELDS.forEach(function (field) {
      var value = cert.fields[field[0]];
      if (value == null || String(value).trim() === "") return;

      var th = document.createElement("th");
      var thCell = document.createElement("div");
      thCell.className = "cell";
      thCell.textContent = field[1];
      th.appendChild(thCell);

      var td = document.createElement("td");
      var tdCell = document.createElement("div");
      tdCell.className = "cell";
      tdCell.textContent = value;
      td.appendChild(tdCell);

      head.appendChild(th);
      body.appendChild(td);
    });

    var img = document.getElementById("certImage");
    img.src = cert.image;
    img.alt = "证书预览";

    var download = document.getElementById("downloadCert");
    download.href = (window.ICC_CERT_DATA && window.ICC_CERT_DATA[cert.key]) || cert.image;
    download.setAttribute("download", cert.fields.certificateNumber + ".jpg");

    resultContainer.hidden = false;
  }

  /* =======================================================
     查询（演示：无后端；匹配演示数据时展示证书，否则提示未查到）
     ======================================================= */

  var querying = false;

  if (form && queryBtn) {
    var originalBtnHtml = queryBtn.innerHTML;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (querying) return;
      var invalid = validateForm();
      if (invalid) return;

      if (resultContainer) {
        resultContainer.hidden = true;
        var demoCert = getDemoCert();
      }

      querying = true;
      queryBtn.disabled = true;
      queryBtn.classList.add("is-loading");
      queryBtn.innerHTML = '<span class="btn-loading"></span><span>查询中…</span>';

      setTimeout(function () {
        querying = false;
        queryBtn.disabled = false;
        queryBtn.classList.remove("is-loading");
        queryBtn.innerHTML = originalBtnHtml;

        if (resultContainer && demoCert) {
          renderCertificateResult(demoCert);
          showMessage("success", "查询成功");
        } else {
          showMessage("warning", "未查到证书信息");
        }
      }, 800);
    });
  }

  /* =======================================================
     消息提示（复刻 Element Plus Message）
     ======================================================= */

  var MESSAGE_ICONS = {
    warning:
      '<svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-32-544h64v320h-64zm0 384h64v64h-64z"/></svg>',
    success:
      '<svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-48-256L240 416l45-45 176 176 288-288 45 45z"/></svg>',
    info:
      '<svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m-32-576h64v64h-64zm0 128h64v320h-64z"/></svg>'
  };

  function showMessage(type, text) {
    var msg = document.createElement("div");
    msg.className = "el-message el-message--" + type;
    msg.innerHTML = '<span class="el-message__icon">' + (MESSAGE_ICONS[type] || MESSAGE_ICONS.info) + "</span><span>" + text + "</span>";
    document.body.appendChild(msg);
    setTimeout(function () {
      msg.classList.add("is-closing");
      setTimeout(function () {
        if (msg.parentNode) msg.parentNode.removeChild(msg);
      }, 300);
    }, 2600);
  }

  /* =======================================================
     报名参赛弹窗
     ======================================================= */

  var modal = document.getElementById("competitionModal");
  var modalConfirmBtn = document.getElementById("modalConfirmBtn");
  var selectionTip = document.getElementById("selectionTip");
  var tipValue = document.getElementById("tipValue");
  var cards = modal ? modal.querySelectorAll(".competition-card") : [];
  var selectedType = null;

  function openModal() {
    closeMobileMenu();
    selectedType = null;
    cards.forEach(function (card) {
      card.classList.remove("selected");
      card.querySelector(".card-checkmark").hidden = true;
    });
    selectionTip.hidden = true;
    modalConfirmBtn.disabled = true;
    modalConfirmBtn.classList.add("disabled");
    modal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  if (modal) {
    var registerBtn = document.getElementById("registerBtn");
    var mobileRegisterBtn = document.getElementById("mobileRegisterBtn");
    if (registerBtn) registerBtn.addEventListener("click", openModal);
    if (mobileRegisterBtn) mobileRegisterBtn.addEventListener("click", openModal);

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        selectedType = card.getAttribute("data-value");
        cards.forEach(function (c) {
          var isThis = c === card;
          c.classList.toggle("selected", isThis);
          c.querySelector(".card-checkmark").hidden = !isThis;
        });
        tipValue.textContent = selectedType === "provincial" ? "省赛" : "主题赛";
        selectionTip.hidden = false;
        modalConfirmBtn.disabled = false;
        modalConfirmBtn.classList.remove("disabled");
      });
    });

    document.getElementById("modalCloseBtn").addEventListener("click", closeModal);
    document.getElementById("modalCancelBtn").addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });

    modalConfirmBtn.addEventListener("click", function () {
      if (!selectedType) return;
      var name = selectedType === "provincial" ? "省赛" : "主题赛";
      closeModal();
      showMessage("info", "演示页面：未接入报名流程（已选择" + name + "）");
    });
  }

  /* =======================================================
     个人中心
     ======================================================= */

  var personalBtn = document.getElementById("personalBtn");
  if (personalBtn) {
    personalBtn.addEventListener("click", function () {
      /* 点击个人中心不显示任何内容 */
    });
  }

  /* =======================================================
     移动端菜单
     ======================================================= */

  var mobileMenuBtn = document.getElementById("mobileMenuBtn");
  var mobileNav = document.getElementById("mobileNav");
  var mobileOverlay = document.getElementById("mobileOverlay");

  function closeMobileMenu() {
    if (!mobileNav) return;
    mobileMenuBtn.classList.remove("active");
    mobileNav.classList.remove("active");
    mobileOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      var active = mobileNav.classList.contains("active");
      if (active) {
        closeMobileMenu();
      } else {
        mobileMenuBtn.classList.add("active");
        mobileNav.classList.add("active");
        mobileOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });

    document.getElementById("closeMenuBtn").addEventListener("click", closeMobileMenu);
    mobileOverlay.addEventListener("click", closeMobileMenu);

    var mobilePersonal = document.querySelector(".mobile-personal-center-btn");
    if (mobilePersonal) {
      mobilePersonal.addEventListener("click", function () {
        closeMobileMenu();
      });
    }
  }

  /* =======================================================
     赛事介绍页：点击放大查看
     ======================================================= */

  var zoomViewer = null;

  function closeZoom() {
    if (!zoomViewer) return;
    zoomViewer.parentNode.removeChild(zoomViewer);
    zoomViewer = null;
    document.body.style.overflow = "";
  }

  function openZoom(src, alt) {
    if (zoomViewer) return;
    zoomViewer = document.createElement("div");
    zoomViewer.className = "zoom-viewer";
    zoomViewer.innerHTML =
      '<div class="zoom-viewer-content">' +
      '<img class="zoomed-image" src="' + src + '" alt="' + (alt || "放大查看") + '">' +
      '<div class="zoom-controls"><button class="close-btn" type="button" aria-label="关闭">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/></svg>' +
      "</button></div></div>";
    document.body.appendChild(zoomViewer);
    document.body.style.overflow = "hidden";
    zoomViewer.addEventListener("click", function (e) {
      if (e.target === zoomViewer) closeZoom();
    });
    zoomViewer.querySelector(".close-btn").addEventListener("click", closeZoom);
  }

  document.querySelectorAll(".image-wrapper").forEach(function (wrapper) {
    wrapper.addEventListener("click", function () {
      var img = wrapper.querySelector(".large-image");
      if (img) openZoom(img.getAttribute("src"), img.alt);
    });
  });

  /* =======================================================
     全局键盘
     ======================================================= */

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (modal && !modal.hidden) closeModal();
      if (openSelect) closeSelectMenu(openSelect, false);
      closeMobileMenu();
      closeZoom();
    }
  });

  /* =======================================================
     导航：仅占位链接阻止跳转
     ======================================================= */

  document.querySelectorAll(".nav-btn, .mobile-nav-btn").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var href = link.getAttribute("href");
      if (!href || href === "#") e.preventDefault();
      if (link.classList.contains("mobile-nav-btn")) closeMobileMenu();
    });
  });

  /* 供页面脚本使用 */
  window.ICC = { showMessage: showMessage };
})();
