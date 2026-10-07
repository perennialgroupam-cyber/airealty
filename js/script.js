/**
 * AI REALTY — LUXURY CORPORATE REAL ESTATE JAVASCRIPT
 * Pure Vanilla JavaScript implementation with zero dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Scroll Effect
  const header = document.querySelector('.header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // 2. Mobile Navigation Drawer
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const mobileCloseBtn = document.querySelector('.mobile-close-btn');
  const mobileBackdrop = document.querySelector('.mobile-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const openMobileMenu = () => {
    mobileDrawer?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    mobileDrawer?.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburgerBtn?.addEventListener('click', openMobileMenu);
  mobileCloseBtn?.addEventListener('click', closeMobileMenu);
  mobileBackdrop?.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  // 3. Interactive Leadership Photograph Switcher
  const leaderPhoto = document.getElementById('leaderMainPhoto');
  const leaderBadge = document.getElementById('leaderBadgeText');
  const leaderContext = document.getElementById('leaderContextText');
  const thumbBtns = document.querySelectorAll('.thumb-btn');

  thumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const imgSrc = btn.getAttribute('data-img');
      const badgeText = btn.getAttribute('data-badge');
      const contextText = btn.getAttribute('data-context');

      if (leaderPhoto && imgSrc) {
        leaderPhoto.style.opacity = '0';
        setTimeout(() => {
          leaderPhoto.src = imgSrc;
          leaderPhoto.style.opacity = '1';
        }, 150);
      }
      if (leaderBadge && badgeText) leaderBadge.textContent = badgeText;
      if (leaderContext && contextText) leaderContext.textContent = contextText;
    });
  });

  // 4. Projects Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. SRA Process Interactive Steps
  const sraSteps = document.querySelectorAll('.sra-step-item');
  sraSteps.forEach(step => {
    step.addEventListener('click', () => {
      sraSteps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');
    });
  });

  // 6. Audience Pathway Selector in CTA
  const audienceCards = document.querySelectorAll('.audience-card');
  let selectedAudience = 'Landowners';

  audienceCards.forEach(card => {
    card.addEventListener('click', () => {
      audienceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectedAudience = card.getAttribute('data-audience') || 'Landowners';
    });
  });

  // 7. Global Consultation Modal
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalTriggers = document.querySelectorAll('[data-open-modal]');
  const modalInterestSelect = document.getElementById('modalInterest');
  const modalPathwayBadge = document.getElementById('modalPathwayBadge');
  const modalForm = document.getElementById('modalForm');
  const modalSuccess = document.getElementById('modalSuccess');

  const openModal = (interest = null, audience = null) => {
    if (modalOverlay) {
      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';

      if (modalInterestSelect && interest) {
        modalInterestSelect.value = interest;
      }
      if (modalPathwayBadge) {
        modalPathwayBadge.textContent = audience || selectedAudience || 'General Advisory';
      }
      if (modalForm) modalForm.style.display = 'block';
      if (modalSuccess) modalSuccess.style.display = 'none';
    }
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const interest = trigger.getAttribute('data-interest');
      const audience = trigger.getAttribute('data-audience') || selectedAudience;
      openModal(interest, audience);
    });
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = modalForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Transmitting Mandate...';
      submitBtn.disabled = true;
    }
    setTimeout(() => {
      if (modalForm) modalForm.style.display = 'none';
      if (modalSuccess) modalSuccess.style.display = 'block';
      if (submitBtn) {
        submitBtn.textContent = 'Submit Confidential Enquiry';
        submitBtn.disabled = false;
      }
    }, 700);
  });

  // 8. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  const contactSuccessAlert = document.getElementById('contactSuccessAlert');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Processing Submission...';
      submitBtn.disabled = true;
    }
    setTimeout(() => {
      if (contactForm) contactForm.style.display = 'none';
      if (contactSuccessAlert) contactSuccessAlert.style.display = 'block';
    }, 800);
  });

  // 9. WhatsApp Tooltip Dismiss
  const whatsappTooltipClose = document.querySelector('.whatsapp-tooltip-close');
  const whatsappTooltip = document.querySelector('.whatsapp-tooltip');
  whatsappTooltipClose?.addEventListener('click', () => {
    if (whatsappTooltip) whatsappTooltip.style.display = 'none';
  });

  // 10. Scroll to Top
  const backToTopBtn = document.querySelector('.footer-back-to-top');
  backToTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
