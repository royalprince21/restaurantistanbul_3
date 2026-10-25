/**
 * RESTAURANT ISTANBUL DREUX — MAIN FRONTEND JAVASCRIPT ENGINE
 * Luxury Art Direction: i18n Bilingual, Interactive Menu, Real Video Controls,
 * Google Review Carousel, Reservation Concierge & Live Hours Status.
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. STATE & STORAGE
  // ==========================================================================
  const DEFAULT_LANG = 'fr';
  let currentLang = DEFAULT_LANG;
  let currentCategory = 'sandwichs';
  let currentReviewIndex = 0;
  let reviewAutoInterval = null;
  let hasAnimatedStats = false;

  try {
    const saved = localStorage.getItem('istanbul_dreux_lang');
    if (saved === 'fr' || saved === 'en') {
      currentLang = saved;
    }
  } catch (e) {
    console.warn('LocalStorage unavailable, defaulting to fr');
  }

  // ==========================================================================
  // 2. DOM ELEMENT REFERENCES
  // ==========================================================================
  const siteHeader = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');
  const btnLangFrList = document.querySelectorAll('.btn-lang-fr');
  const btnLangEnList = document.querySelectorAll('.btn-lang-en');

  // Video
  const heroVideo = document.getElementById('heroVideo');
  const heroVideoToggleBtn = document.getElementById('heroVideoToggleBtn');

  // Hours status
  const liveHoursStatusText = document.getElementById('liveHoursStatusText');
  const liveHoursStatusDot = document.getElementById('liveHoursStatusDot');

  // Specialties jump links
  const specialtyJumpLinks = document.querySelectorAll('[data-target-cat]');

  // Menu Elements
  const menuTabsScroll = document.getElementById('menu-tabs-scroll');
  const menuTabButtons = document.querySelectorAll('.menu-tab-btn');
  const menuGrid = document.getElementById('menu-grid');
  const menuNoticeBanner = document.getElementById('menu-notice-banner');
  const menuNoticeText = document.getElementById('menu-notice-text');

  // Reviews Carousel
  const reviewTrack = document.getElementById('reviewTrack');
  const reviewSlides = document.querySelectorAll('.review-slide');
  const reviewPrevBtn = document.getElementById('reviewPrevBtn');
  const reviewNextBtn = document.getElementById('reviewNextBtn');
  const reviewDotsContainer = document.getElementById('reviewDotsContainer');

  // Reservation Form & Modal
  const resForm = document.getElementById('reservationForm');
  const resModal = document.getElementById('resModal');
  const resModalClose = document.getElementById('resModalClose');
  const resModalSummary = document.getElementById('resModalSummary');
  const resModalWaBtn = document.getElementById('resModalWaBtn');
  const resDateInput = document.getElementById('resDate');

  // Direct Order Modal
  const orderModal = document.getElementById('orderModal');
  const orderModalClose = document.getElementById('orderModalClose');
  const orderModalDishTitle = document.getElementById('orderModalDishTitle');
  const orderModalWaBtn = document.getElementById('orderModalWaBtn');

  // Back to top
  const backToTopBtn = document.getElementById('backToTopBtn');

  // Set min date for reservation to today
  if (resDateInput) {
    const today = new Date().toISOString().split('T')[0];
    resDateInput.setAttribute('min', today);
  }

  // ==========================================================================
  // 3. HEADER SCROLL EFFECT
  // ==========================================================================
  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ==========================================================================
  // 4. MOBILE DRAWER NAVIGATION
  // ==========================================================================
  function openMobileDrawer() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMobileDrawer() {
    if (mobileDrawer && mobileOverlay) {
      mobileDrawer.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('active');
      if (isOpen) closeMobileDrawer();
      else openMobileDrawer();
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileDrawer);
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileDrawer();
      closeReservationModal();
      closeOrderModal();
    }
  });

  // ==========================================================================
  // 5. HERO VIDEO CONTROLS
  // ==========================================================================
  if (heroVideo && heroVideoToggleBtn) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      heroVideo.pause();
      heroVideoToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
      heroVideoToggleBtn.setAttribute('aria-label', 'Play video');
    }

    heroVideoToggleBtn.addEventListener('click', () => {
      if (heroVideo.paused) {
        heroVideo.play();
        heroVideoToggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        heroVideoToggleBtn.setAttribute('aria-label', 'Pause video');
      } else {
        heroVideo.pause();
        heroVideoToggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        heroVideoToggleBtn.setAttribute('aria-label', 'Play video');
      }
    });

    // Auto handle video playback error fallback
    heroVideo.addEventListener('error', () => {
      console.warn('Hero video load failed, falling back to poster image');
      heroVideo.style.display = 'none';
      if (heroVideoToggleBtn) heroVideoToggleBtn.style.display = 'none';
    });
  }

  // ==========================================================================
  // 6. REAL-TIME RESTAURANT OPEN/CLOSED INDICATOR
  // ==========================================================================
  function updateLiveHoursStatus() {
    if (!liveHoursStatusText || !liveHoursStatusDot) return;
    
    // Istanbul Dreux operates 11h to 01h (11:00 AM to 1:00 AM) 7 days a week
    const now = new Date();
    const currentHour = now.getHours();
    
    // Open between 11:00 (11) and 00:59 (0)
    // Hours: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 0
    const isOpen = currentHour >= 11 || currentHour === 0;

    const t = translations[currentLang]?.hours;
    if (isOpen) {
      liveHoursStatusText.textContent = t?.openStatusNow || "Actuellement Ouvert";
      liveHoursStatusDot.style.backgroundColor = "#2ECC71";
      liveHoursStatusDot.classList.add('status-dot-pulse');
    } else {
      liveHoursStatusText.textContent = t?.closedStatusNow || "Fermé pour le moment (Réouverture à 11h)";
      liveHoursStatusDot.style.backgroundColor = "#E74C3C";
      liveHoursStatusDot.classList.remove('status-dot-pulse');
    }
  }

  // ==========================================================================
  // 7. BILINGUAL i18n ENGINE (FR & EN)
  // ==========================================================================
  function resolveKey(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    try {
      localStorage.setItem('istanbul_dreux_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang === 'fr' ? 'fr-FR' : 'en';

    // 1. Meta Tags
    document.title = translations[lang].meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', translations[lang].meta.desc);

    // 2. Data-i18n innerText
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = resolveKey(translations[lang], key);
      if (val !== undefined) {
        el.textContent = val;
      }
    });

    // 3. Data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(input => {
      const key = input.getAttribute('data-i18n-placeholder');
      const val = resolveKey(translations[lang], key);
      if (val !== undefined) {
        input.setAttribute('placeholder', val);
      }
    });

    // 4. Update flag buttons active state
    btnLangFrList.forEach(btn => {
      const isFr = lang === 'fr';
      btn.classList.toggle('active', isFr);
      btn.setAttribute('aria-pressed', isFr ? 'true' : 'false');
    });

    btnLangEnList.forEach(btn => {
      const isEn = lang === 'en';
      btn.classList.toggle('active', isEn);
      btn.setAttribute('aria-pressed', isEn ? 'true' : 'false');
    });

    // 5. Update Hours status
    updateLiveHoursStatus();

    // 6. Update Menu Notice & Products
    updateMenuNotice();
    renderMenuItems(currentCategory);
  }

  btnLangFrList.forEach(btn => {
    btn.addEventListener('click', () => setLanguage('fr'));
  });

  btnLangEnList.forEach(btn => {
    btn.addEventListener('click', () => setLanguage('en'));
  });

  // ==========================================================================
  // 8. INTERACTIVE MENU LOGIC
  // ==========================================================================
  function updateMenuNotice() {
    if (!menuNoticeBanner || !menuNoticeText) return;
    const t = translations[currentLang]?.menu;

    if (currentCategory === 'sandwichs' || currentCategory === 'panini') {
      menuNoticeBanner.style.display = 'flex';
      menuNoticeText.textContent = t?.noticeSandwich || "Les menus Sandwichs et Paninis comprennent une portion de frites dorées et une boisson 33 cl au choix.";
    } else if (currentCategory === 'assiettes') {
      menuNoticeBanner.style.display = 'flex';
      menuNoticeText.textContent = t?.noticePlates || "Toutes nos assiettes comprennent frites dorées, boulgour turc et riz. Supplément assiette mixte (viande supp.) : +3,00 €.";
    } else if (currentCategory === 'menu-enfant') {
      menuNoticeBanner.style.display = 'flex';
      menuNoticeText.textContent = currentLang === 'fr' 
        ? "Formule spéciale adaptée aux plus jeunes : sandwich au choix + frites + boisson fraîche. Uniquement proposé le midi."
        : "Special combo for children: choice of sandwich + fries + chilled drink. Available at lunchtime only.";
    } else {
      menuNoticeBanner.style.display = 'none';
    }
  }

  function renderMenuItems(catKey) {
    if (!menuGrid || typeof menuDatabase === 'undefined') return;

    const items = menuDatabase[catKey] || [];
    menuGrid.innerHTML = '';

    if (items.length === 0) {
      menuGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--c-muted); padding: 40px;">Aucun produit trouvé dans cette catégorie.</p>`;
      return;
    }

    const tMenu = translations[currentLang]?.menu;
    const soloText = tMenu?.soloLabel || "Seul";
    const menuText = tMenu?.menuLabel || "Menu";
    const orderBtnText = tMenu?.orderBtn || "Commander ce plat";

    items.forEach(dish => {
      const card = document.createElement('article');
      card.className = 'menu-item-card reveal-fade-up revealed';

      const name = dish.name[currentLang] || dish.name.fr;
      const desc = dish.desc[currentLang] || dish.desc.fr;
      const tag = dish.tag ? (dish.tag[currentLang] || dish.tag.fr) : '';
      const extraNote = dish.extraNote ? (dish.extraNote[currentLang] || dish.extraNote.fr) : '';

      let priceHtml = '';
      if (dish.pricing.type === 'dual') {
        priceHtml = `
          <div class="price-dual-group">
            <div class="price-chip">
              <span class="price-chip-label">${soloText}</span>
              <span class="price-chip-val">${dish.pricing.solo}</span>
            </div>
            <div class="price-chip" style="border-left: 1px solid var(--c-stone); padding-left: 8px;">
              <span class="price-chip-label">${menuText}</span>
              <span class="price-chip-val" style="color: var(--c-gold);">${dish.pricing.menu}</span>
            </div>
          </div>
        `;
      } else {
        priceHtml = `
          <div class="price-chip">
            <span class="price-chip-label">Prix</span>
            <span class="price-chip-val">${dish.pricing.price}</span>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="menu-item-img-wrap">
          <img src="${dish.img}" alt="${name}" class="menu-item-img" loading="lazy">
          ${tag ? `<span class="menu-item-tag">${tag}</span>` : ''}
        </div>
        <div class="menu-item-content">
          <h3 class="menu-item-title">${name}</h3>
          <p class="menu-item-desc">${desc}</p>
          ${extraNote ? `<div class="menu-item-extra-note"><i class="fa-solid fa-circle-plus" style="margin-right: 4px;"></i>${extraNote}</div>` : ''}
          <div class="menu-item-pricing-bar">
            ${priceHtml}
            <button type="button" class="btn-order-dish" data-dish-name="${name}">
              ${orderBtnText}
            </button>
          </div>
        </div>
      `;

      menuGrid.appendChild(card);
    });

    // Reattach listeners to order buttons
    menuGrid.querySelectorAll('.btn-order-dish').forEach(btn => {
      btn.addEventListener('click', () => {
        const dishName = btn.getAttribute('data-dish-name');
        openOrderModal(dishName);
      });
    });
  }

  function switchMenuCategory(catKey) {
    currentCategory = catKey;

    menuTabButtons.forEach(btn => {
      const match = btn.getAttribute('data-category') === catKey;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-selected', match ? 'true' : 'false');
      if (match) {
        btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    updateMenuNotice();
    renderMenuItems(catKey);
  }

  menuTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      switchMenuCategory(cat);
    });
  });

  // Jump to category from specialty cards or footer
  specialtyJumpLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-target-cat');
      if (cat) {
        switchMenuCategory(cat);
      }
    });
  });

  // ==========================================================================
  // 9. GOOGLE REVIEWS CAROUSEL
  // ==========================================================================
  function initReviewsCarousel() {
    if (!reviewTrack || reviewSlides.length === 0) return;

    // Create pagination dots
    if (reviewDotsContainer) {
      reviewDotsContainer.innerHTML = '';
      reviewSlides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Review slide ${idx + 1}`);
        dot.addEventListener('click', () => goToReview(idx));
        reviewDotsContainer.appendChild(dot);
      });
    }

    function updateCarouselPosition() {
      reviewTrack.style.transform = `translateX(-${currentReviewIndex * 100}%)`;
      if (reviewDotsContainer) {
        const dots = reviewDotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === currentReviewIndex));
      }
    }

    function goToReview(idx) {
      currentReviewIndex = (idx + reviewSlides.length) % reviewSlides.length;
      updateCarouselPosition();
    }

    function nextReview() {
      goToReview(currentReviewIndex + 1);
    }

    function prevReview() {
      goToReview(currentReviewIndex - 1);
    }

    if (reviewNextBtn) reviewNextBtn.addEventListener('click', nextReview);
    if (reviewPrevBtn) reviewPrevBtn.addEventListener('click', prevReview);

    // Touch swipe support on mobile
    let touchStartX = 0;
    let touchEndX = 0;

    reviewTrack.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    reviewTrack.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        nextReview();
      } else if (touchEndX - touchStartX > 50) {
        prevReview();
      }
    }, { passive: true });

    // Autoplay with hover pause
    function startAutoPlay() {
      stopAutoPlay();
      reviewAutoInterval = setInterval(nextReview, 6500);
    }

    function stopAutoPlay() {
      if (reviewAutoInterval) clearInterval(reviewAutoInterval);
    }

    reviewTrack.addEventListener('mouseenter', stopAutoPlay);
    reviewTrack.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();
  }

  // ==========================================================================
  // 10. ANIMATED STATISTICS COUNTERS
  // ==========================================================================
  function initStatsAnimation() {
    const statsSection = document.getElementById('statsSection');
    if (!statsSection) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimatedStats) {
        hasAnimatedStats = true;
        animateNumber('statVisitors', 0, 200, 1800, '+');
        animateNumber('statDeliveries', 0, 800, 2000, '+');
        animateNumber('statSatisfaction', 0, 100, 1500, '%');
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(statsSection);
  }

  function animateNumber(elementId, start, end, duration, suffix = '') {
    const el = document.getElementById(elementId);
    if (!el) return;
    const range = end - start;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(start + range * easeOutQuad);
      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${end}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  }

  // ==========================================================================
  // 11. RESERVATION FORM & WHATSAPP / CALL DISPATCH
  // ==========================================================================
  function openReservationModal(details) {
    if (!resModal || !resModalSummary || !resModalWaBtn) return;

    const t = translations[currentLang]?.reservation;

    resModalSummary.innerHTML = `
      <div style="font-weight: 700; color: var(--c-forest); margin-bottom: 6px;">${details.name}</div>
      <div><i class="fa-regular fa-calendar" style="width: 18px; color: var(--c-gold);"></i> <strong>${details.date}</strong> à <strong>${details.time}</strong></div>
      <div><i class="fa-solid fa-user-group" style="width: 18px; color: var(--c-gold);"></i> <strong>${details.guests} convive(s)</strong></div>
      <div><i class="fa-solid fa-phone" style="width: 18px; color: var(--c-gold);"></i> ${details.phone}</div>
      ${details.email ? `<div><i class="fa-regular fa-envelope" style="width: 18px; color: var(--c-gold);"></i> ${details.email}</div>` : ''}
      ${details.message ? `<div style="margin-top: 6px; font-style: italic; color: var(--c-muted);"><i class="fa-regular fa-comment" style="width: 18px;"></i> "${details.message}"</div>` : ''}
    `;

    // Format WhatsApp pre-filled message
    const waText = encodeURIComponent(
      `Bonjour Restaurant Istanbul Dreux, je souhaite réserver une table :\n` +
      `- Nom : ${details.name}\n` +
      `- Téléphone : ${details.phone}\n` +
      `- Date : ${details.date}\n` +
      `- Heure : ${details.time}\n` +
      `- Nombre de personnes : ${details.guests}\n` +
      (details.message ? `- Note : ${details.message}\n` : '') +
      `Merci de me confirmer la réservation.`
    );

    resModalWaBtn.href = `https://wa.me/33237558597?text=${waText}`;

    resModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeReservationModal() {
    if (resModal) {
      resModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (resModalClose) {
    resModalClose.addEventListener('click', closeReservationModal);
  }

  if (resModal) {
    resModal.addEventListener('click', (e) => {
      if (e.target === resModal) closeReservationModal();
    });
  }

  if (resForm) {
    resForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName')?.value.trim();
      const phone = document.getElementById('resPhone')?.value.trim();
      const email = document.getElementById('resEmail')?.value.trim();
      const date = document.getElementById('resDate')?.value;
      const time = document.getElementById('resTime')?.value;
      const guests = document.getElementById('resGuests')?.value;
      const message = document.getElementById('resMessage')?.value.trim();

      if (!name || !phone || !date || !time || !guests) {
        alert(currentLang === 'fr' 
          ? "Veuillez remplir tous les champs obligatoires (*)." 
          : "Please complete all mandatory fields (*).");
        return;
      }

      openReservationModal({ name, phone, email, date, time, guests, message });
    });
  }

  // ==========================================================================
  // 12. DIRECT ORDER CONCIERGE MODAL
  // ==========================================================================
  function openOrderModal(dishName) {
    if (!orderModal || !orderModalDishTitle || !orderModalWaBtn) return;

    orderModalDishTitle.textContent = dishName;

    const waOrderText = encodeURIComponent(
      `Bonjour Restaurant Istanbul Dreux,\n` +
      `Je souhaite commander le plat suivant : "${dishName}".\n` +
      `Pouvez-vous me confirmer le temps de préparation et les disponibilités ? Merci !`
    );

    orderModalWaBtn.href = `https://wa.me/33237558597?text=${waOrderText}`;

    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeOrderModal() {
    if (orderModal) {
      orderModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (orderModalClose) {
    orderModalClose.addEventListener('click', closeOrderModal);
  }

  if (orderModal) {
    orderModal.addEventListener('click', (e) => {
      if (e.target === orderModal) closeOrderModal();
    });
  }

  // ==========================================================================
  // 13. SCROLL REVEAL OBSERVER
  // ==========================================================================
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-fade-up');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  }

  // ==========================================================================
  // 14. INITIALIZATION
  // ==========================================================================
  setLanguage(currentLang);
  initReviewsCarousel();
  initStatsAnimation();
  initScrollReveal();

});
