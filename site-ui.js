/* Shared navigation and inquiry behavior. Formspree endpoint and field names stay in HTML. */
(() => {
  const messages = {
    en: {
      open: "Open navigation", close: "Close navigation", submit: "Send an Inquiry", sending: "Submitting…",
      success: "Thank you. Your inquiry has been submitted. If you would like to add drawings, please email them with your name and drawing number.",
      error: "We could not submit your inquiry. Please try again or contact us by email or WhatsApp.",
      uncertain: "We could not confirm whether your inquiry was received. Please contact us by email or WhatsApp before resubmitting.",
    },
    zh: {
      open: "打开导航", close: "关闭导航", submit: "发送询价", sending: "正在提交…",
      success: "您的咨询已提交。如需补充图纸，请通过邮件发送，并注明姓名和图号。",
      error: "咨询提交失败，请重试或通过邮件、WhatsApp 联系我们。",
      uncertain: "暂时无法确认咨询是否已收到。请先通过邮件或 WhatsApp 联系我们，再决定是否重新提交。",
    },
    ja: {
      open: "ナビゲーションを開く", close: "ナビゲーションを閉じる", submit: "お問い合わせを送信", sending: "送信中…",
      success: "お問い合わせを送信しました。図面を追加する場合は、お名前と図面番号を添えてメールでお送りください。",
      error: "送信できませんでした。再度お試しいただくか、メールまたは WhatsApp でお問い合わせください。",
      uncertain: "お問い合わせの受信を確認できませんでした。再送信の前に、メールまたは WhatsApp でお問い合わせください。",
    },
  };
  const language = () => document.documentElement.lang.startsWith("zh") ? "zh" : document.documentElement.lang.startsWith("ja") ? "ja" : "en";
  const words = () => messages[language()];
  const header = document.querySelector(".site-header");
  const menu = header?.querySelector(".menu-button");
  const nav = header?.querySelector(".site-nav");
  const syncHeaderHeight = () => {
    if (header && !header.classList.contains("is-open")) {
      document.documentElement.style.setProperty("--site-header-height", `${Math.ceil(header.getBoundingClientRect().height)}px`);
    }
  };
  syncHeaderHeight();
  if (header && "ResizeObserver" in window) new ResizeObserver(syncHeaderHeight).observe(header);

  function setMenu(open, restoreFocus = false) {
    if (!header || !menu) return;
    header.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? words().close : words().open);
    if (restoreFocus) menu.focus();
  }
  menu?.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu?.getAttribute("aria-expanded") === "true") setMenu(false, true);
  });
  document.addEventListener("click", event => {
    if (header && !header.contains(event.target) && menu?.getAttribute("aria-expanded") === "true") setMenu(false);
  });
  const desktop = window.matchMedia("(min-width: 1121px)");
  desktop.addEventListener("change", () => { if (desktop.matches) setMenu(false); });
  function syncLanguage() {
    if (menu) menu.setAttribute("aria-label", header.classList.contains("is-open") ? words().close : words().open);
    document.querySelectorAll("[data-rfq-form]").forEach(form => {
      const button = form.querySelector('button[type="submit"]');
      if (button) button.textContent = form.dataset.submitting === "true" ? words().sending : words().submit;
    });
  }
  document.addEventListener("jinyi:languagechange", syncLanguage);
  syncLanguage();
  document.querySelectorAll("[data-rfq-form]").forEach(form => {
    form.addEventListener("submit", async event => {
      event.preventDefault();
      if (form.dataset.submitting === "true" || !form.reportValidity()) return;
      const button = form.querySelector('button[type="submit"]');
      const status = form.querySelector("[data-form-status]");
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 15000);
      form.dataset.submitting = "true";
      form.setAttribute("aria-busy", "true");
      if (button) { button.disabled = true; button.textContent = words().sending; }
      if (status) { status.textContent = ""; status.dataset.state = ""; }
      let serverRejected = false;
      try {
        // Capture the original hidden subject and field names; no attachment or recipient changes.
        const response = await fetch(form.action, {
          method: "POST", body: new FormData(form), headers: { Accept: "application/json" }, signal: controller.signal,
        });
        if (!response.ok) { serverRejected = true; throw new Error("Inquiry request rejected"); }
        form.reset();
        if (status) { status.textContent = words().success; status.dataset.state = "success"; }
      } catch (error) {
        if (status) {
          status.textContent = serverRejected ? words().error : words().uncertain;
          status.dataset.state = "error";
        }
      } finally {
        window.clearTimeout(timer);
        delete form.dataset.submitting;
        form.removeAttribute("aria-busy");
        if (button) { button.disabled = false; button.textContent = words().submit; }
      }
    });
  });
})();
