(function () {
  function ensureLightbox() {
    let lightbox = document.querySelector(".image-lightbox");
    if (lightbox) return lightbox;

    lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.hidden = true;
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("role", "dialog");
    lightbox.innerHTML = `
      <button class="lightbox-close" type="button" data-lightbox-close aria-label="Close image preview">&times;</button>
      <figure class="lightbox-content">
        <img alt="" decoding="async" />
        <figcaption></figcaption>
      </figure>
    `;
    document.body.appendChild(lightbox);
    return lightbox;
  }

  const lightbox = ensureLightbox();
  const lightboxImage = lightbox.querySelector("img");
  const lightboxCaption = lightbox.querySelector("figcaption");
  const lightboxClose = lightbox.querySelector("[data-lightbox-close]");

  function imageSource(image) {
    const raw = image.dataset.full || image.currentSrc || image.getAttribute("src") || image.src;
    if (!raw) return "";
    return new URL(raw, window.location.href).href;
  }

  function imageCaption(image) {
    const figure = image.closest("figure");
    return figure?.querySelector("figcaption")?.textContent?.trim() || image.alt || "Selected image";
  }

  function openLightbox(image) {
    const src = imageSource(image);
    if (!src) return;

    const caption = imageCaption(image);
    lightboxImage.onload = () => {
      lightbox.classList.remove("is-loading");
      lightbox.classList.remove("has-error");
    };
    lightboxImage.onerror = () => {
      lightbox.classList.remove("is-loading");
      lightbox.classList.add("has-error");
      lightboxCaption.textContent = "Image could not be loaded. Please try opening it again.";
    };

    lightbox.classList.add("is-loading");
    lightbox.classList.remove("has-error");
    lightboxImage.removeAttribute("width");
    lightboxImage.removeAttribute("height");
    lightboxImage.alt = image.alt || caption;
    lightboxCaption.textContent = caption;
    lightboxImage.src = src;
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lightboxClose?.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.classList.remove("is-loading", "has-error");
    lightboxImage.onload = null;
    lightboxImage.onerror = null;
    lightboxImage.removeAttribute("src");
    document.body.classList.remove("lightbox-open");
  }

  document.addEventListener("click", (event) => {
    const image = event.target.closest("main figure img");
    if (image) {
      event.preventDefault();
      openLightbox(image);
      return;
    }

    if (event.target === lightbox || event.target.closest("[data-lightbox-close]")) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
})();