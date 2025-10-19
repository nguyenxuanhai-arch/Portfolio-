// Small, progressive enhancements: reveal on scroll, animate skill bars, back-to-top toggle
(function () {
  'use strict';

  // Helpers
  const qs = (s, el = document) => el.querySelector(s);
  const qsa = (s, el = document) => Array.from(el.querySelectorAll(s));

  // Reveal elements on scroll
  const revealEls = qsa('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

    revealEls.forEach(el => io.observe(el));
  } else {
    // Fallback
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  // Animate skill bars when the skills section enters view
  const skillBars = qsa('.skill-progress');
  const skillsSection = qs('#skills');
  if ('IntersectionObserver' in window && skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger CSS transition by forcing reflow and applying width from inline CSS var
          skillBars.forEach((bar) => {
            const w = getComputedStyle(bar).getPropertyValue('--w') || '0%';
            // If width is not set, skip
            if (!w.trim()) return;
            // Set start at 0 then to target width for animation
            bar.style.width = '0%';
            // Force reflow
            void bar.offsetWidth;
            bar.style.width = w.trim();
          });
          skillsObserver.unobserve(skillsSection);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

    skillsObserver.observe(skillsSection);
  } else {
    // Fallback: immediately set width to target
    skillBars.forEach((bar) => {
      const w = getComputedStyle(bar).getPropertyValue('--w') || '0%';
      bar.style.width = w.trim();
    });
  }

  // Back-to-top visibility toggle
  const backToTop = qs('.back-to-top');
  if (backToTop) {
    const onScroll = () => {
      if (window.scrollY > 600) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
      } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
