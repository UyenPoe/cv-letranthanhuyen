/**
 * ============================================================================
 * MAIN APPLICATION LOGIC - ONE PAGE CV & PORTFOLIO
 * Handles: i18n (VI/EN), Status Toggle, Mobile Menu, Scroll Spy,
 *          Skills Filter, Experience Expand/Collapse, Projects Filter,
 *          Copy Email Toast, Quick Mailto Form, Intersection Observer.
 * ============================================================================
 */

(function () {
  "use strict";

  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) return;

  // State Management
  let currentLang = localStorage.getItem("uyen_cv_lang") || "vi";
  let isAvailable = localStorage.getItem("uyen_cv_available") !== null
    ? localStorage.getItem("uyen_cv_available") === "true"
    : DATA.profile.availableByDefault;
  let currentSkillFilter = "all";
  let currentProjectFilter = "all";
  let allExpExpanded = true;

  // Helper: Get nested i18n key
  function getText(path, lang = currentLang) {
    return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : null), DATA.i18n[lang]);
  }

  // Helper: SVG Icons for Skill Pillars
  function getSkillIcon(category) {
    const icons = {
      web: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      wp: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
      seo: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><polyline points="8 11 10 13 14 9"></polyline></svg>`,
      admin: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
      design: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>`
    };
    return icons[category] || icons.web;
  }

  // 1. Render Work Availability Status
  function renderStatusBadge() {
    const btn = document.getElementById("statusToggleBtn");
    const textEl = document.getElementById("statusText");
    if (!btn || !textEl) return;

    const statusObj = DATA.i18n[currentLang].status;
    btn.classList.toggle("is-busy", !isAvailable);
    btn.setAttribute("aria-pressed", String(isAvailable));
    btn.setAttribute("title", statusObj.tooltip);
    textEl.textContent = isAvailable ? statusObj.available : statusObj.busy;
  }

  // 2. Render Static i18n Elements
  function applyTranslations() {
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getText(key);
      if (val !== null) el.textContent = val;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const val = getText(key);
      if (val !== null) el.innerHTML = val;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getText(key);
      if (val !== null) el.setAttribute("placeholder", val);
    });

    // Update Language Buttons active state
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isAct = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("active", isAct);
      btn.setAttribute("aria-pressed", String(isAct));
    });

    renderStatusBadge();
    renderSkills();
    renderExperiences();
    renderProjects();
  }

  // 3. Render Professional Skills (4 Groups, Filterable)
  function renderSkills() {
    const grid = document.getElementById("skillsGrid");
    if (!grid) return;

    const filtered = currentSkillFilter === "all"
      ? DATA.skills
      : DATA.skills.filter((s) => s.category === currentSkillFilter);

    grid.innerHTML = filtered
      .map(
        (group) => `
      <article class="skill-group-card" data-category="${group.category}">
        <div class="skill-group-header">
          <div class="skill-group-icon" aria-hidden="true">
            ${getSkillIcon(group.category)}
          </div>
          <h3 class="skill-group-title">${group.title[currentLang]}</h3>
        </div>
        <p class="skill-group-desc">${group.desc[currentLang]}</p>
        <div class="skill-tags-wrap">
          ${group.items
            .map(
              (item) => `
            <span class="skill-tech-badge">
              <span class="badge-dot" aria-hidden="true"></span>
              ${item}
            </span>
          `
            )
            .join("")}
        </div>
      </article>
    `
      )
      .join("");
  }

  // 4. Render Work Experience Timeline
  function renderExperiences() {
    const container = document.getElementById("experienceTimeline");
    const toggleAllBtn = document.getElementById("toggleAllExpBtn");
    if (!container) return;

    const t = DATA.i18n[currentLang].experience;
    if (toggleAllBtn) {
      toggleAllBtn.textContent = allExpExpanded ? t.collapseAll : t.expandAll;
    }

    container.innerHTML = DATA.experiences
      .map(
        (exp) => `
      <article class="timeline-item ${allExpExpanded ? "" : "is-collapsed"}" data-exp-id="${exp.id}">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div>
              <span class="timeline-period">${exp.period}</span>
              <h3 class="timeline-role">${exp.role[currentLang]}</h3>
              <p class="timeline-company">${exp.company[currentLang]}</p>
            </div>
            <button type="button" class="timeline-expand-btn" data-toggle-exp="${exp.id}" aria-expanded="${allExpExpanded}">
              <span>${allExpExpanded ? t.btnCollapse : t.btnExpand}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
          </div>
          <p class="timeline-summary">${exp.summary[currentLang]}</p>
          <div class="timeline-details">
            <div>
              <strong style="font-size:0.88rem;color:var(--text-primary);display:block;margin-bottom:0.45rem;">${t.responsibilitiesLabel}</strong>
              <ul class="timeline-list">
                ${exp.responsibilities[currentLang].map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div class="timeline-results-box">
              <strong>${t.resultsLabel}</strong> ${exp.results[currentLang]}
            </div>
            <div class="timeline-tech-tags">
              ${exp.tech.map((tag) => `<span class="tech-mini-tag">${tag}</span>`).join("")}
            </div>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }

  // 5. Render Featured Projects Grid
  function renderProjects() {
    const grid = document.getElementById("projectsGrid");
    if (!grid) return;

    const t = DATA.i18n[currentLang].projects;
    const filtered = currentProjectFilter === "all"
      ? DATA.projects
      : DATA.projects.filter((p) => p.categories.includes(currentProjectFilter));

    grid.innerHTML = filtered
      .map(
        (proj) => `
      <article class="project-card" data-slug="${proj.slug}">
        <a href="projects/${proj.slug}.html" class="project-thumb-wrap" aria-label="${proj.title} Case Study">
          <img src="${proj.images.hero}" alt="${proj.title} - ${proj.domain}" width="640" height="400" loading="lazy" />
          <span class="project-type-badge">${proj.badge[currentLang]}</span>
          <span class="project-domain-pill">${proj.domain}</span>
        </a>
        <div class="project-body">
          <h3 class="project-title">
            <a href="projects/${proj.slug}.html">${proj.title}</a>
          </h3>
          <p class="project-role">${proj.role[currentLang]}</p>
          <p class="project-desc">${proj.shortDesc[currentLang]}</p>
          <div class="project-tech-stack">
            ${proj.techStack.slice(0, 5).map((tech) => `<span class="tech-mini-tag">${tech}</span>`).join("")}
          </div>
          <div class="project-actions">
            <a href="projects/${proj.slug}.html" class="btn-card btn-primary">
              <span>${t.btnCaseStudy}</span>
            </a>
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-secondary">
              <span>${t.btnLiveSite}</span>
            </a>
          </div>
        </div>
      </article>
    `
      )
      .join("");
  }

  // 6. Toast Notification Helper
  function showToast(message) {
    const toast = document.getElementById("toastNotification");
    const toastMsg = document.getElementById("toastMessage");
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }

  // 7. Event Listeners Initialization
  function initEvents() {
    // Language Switcher
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (lang && lang !== currentLang) {
          currentLang = lang;
          localStorage.setItem("uyen_cv_lang", currentLang);
          applyTranslations();
          window.dispatchEvent(new CustomEvent("portfolio:langchange", { detail: { lang: currentLang } }));
        }
      });
    });

    // Manual Availability Status Toggle
    const statusBtn = document.getElementById("statusToggleBtn");
    if (statusBtn) {
      statusBtn.addEventListener("click", () => {
        isAvailable = !isAvailable;
        localStorage.setItem("uyen_cv_available", String(isAvailable));
        renderStatusBadge();
      });
    }

    // Mobile Hamburger Menu
    const menuToggle = document.getElementById("menuToggleBtn");
    const mainNav = document.getElementById("mainNav");
    if (menuToggle && mainNav) {
      menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      });

      mainNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mainNav.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });

      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && mainNav.classList.contains("is-open")) {
          mainNav.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.focus();
        }
      });
    }

    // Skills Filter Bar
    const skillFilterBar = document.getElementById("skillsFilterBar");
    if (skillFilterBar) {
      skillFilterBar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        currentSkillFilter = btn.getAttribute("data-skill-filter") || "all";
        skillFilterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
        renderSkills();
      });
    }

    // Experience Timeline Individual & All Expand/Collapse
    const expTimeline = document.getElementById("experienceTimeline");
    if (expTimeline) {
      expTimeline.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-toggle-exp]");
        if (!btn) return;
        const item = btn.closest(".timeline-item");
        if (!item) return;

        const isCollapsed = item.classList.toggle("is-collapsed");
        const expanded = !isCollapsed;
        btn.setAttribute("aria-expanded", String(expanded));
        const t = DATA.i18n[currentLang].experience;
        const span = btn.querySelector("span");
        if (span) span.textContent = expanded ? t.btnCollapse : t.btnExpand;
      });
    }

    const toggleAllExpBtn = document.getElementById("toggleAllExpBtn");
    if (toggleAllExpBtn) {
      toggleAllExpBtn.addEventListener("click", () => {
        allExpExpanded = !allExpExpanded;
        renderExperiences();
      });
    }

    // Projects Filter Bar
    const projectFilterBar = document.getElementById("projectsFilterBar");
    if (projectFilterBar) {
      projectFilterBar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        currentProjectFilter = btn.getAttribute("data-project-filter") || "all";
        projectFilterBar.querySelectorAll(".filter-btn").forEach((b) => b.classList.toggle("active", b === btn));
        renderProjects();
      });
    }

    // Copy Email Button
    const copyEmailBtn = document.getElementById("copyEmailBtn");
    if (copyEmailBtn) {
      copyEmailBtn.addEventListener("click", async () => {
        const email = DATA.profile.email;
        try {
          await navigator.clipboard.writeText(email);
        } catch (_) {
          const input = document.createElement("input");
          input.value = email;
          document.body.appendChild(input);
          input.select();
          document.execCommand("copy");
          document.body.removeChild(input);
        }
        showToast(DATA.i18n[currentLang].contact.toastCopied);
      });
    }

    // Quick Contact Form (Static-safe mailto composer for GitHub Pages)
    const contactForm = document.getElementById("quickContactForm");
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (document.getElementById("contactName")?.value || "").trim();
        const senderEmail = (document.getElementById("contactEmail")?.value || "").trim();
        const role = (document.getElementById("contactRole")?.value || "").trim();
        const message = (document.getElementById("contactMessage")?.value || "").trim();

        const subject = encodeURIComponent(`[Portfolio Contact] ${role} - ${name}`);
        const body = encodeURIComponent(
          `Họ tên / Công ty: ${name}\nEmail liên hệ: ${senderEmail}\nVị trí quan tâm: ${role}\n\nNội dung:\n${message}`
        );
        window.location.href = `mailto:${DATA.profile.email}?subject=${subject}&body=${body}`;
      });
    }

    // Back to Top Button with Scroll Progress Ring
    const backToTopBtn = document.getElementById("backToTopBtn");
    const progressCircle = document.getElementById("scrollProgressCircle");
    const circumference = 2 * Math.PI * 18; // ~113.097

    function updateBackToTop() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (backToTopBtn) {
        backToTopBtn.classList.toggle("is-visible", scrollY > 280);
      }
      if (progressCircle && docHeight > 0) {
        const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);
        const offset = circumference - progress * circumference;
        progressCircle.style.strokeDashoffset = offset;
      }
    }

    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Sticky Header & Scroll Spy
    const header = document.getElementById("siteHeader");
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".main-nav .nav-link[href^='#']");

    function onScroll() {
      const scrollY = window.scrollY;
      if (header) {
        header.classList.toggle("is-scrolled", scrollY > 24);
      }
      updateBackToTop();

      if (sections.length && navLinks.length) {
        let currentSectionId = "home";
        sections.forEach((sec) => {
          const top = sec.offsetTop - 130;
          if (scrollY >= top) {
            currentSectionId = sec.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          const href = link.getAttribute("href");
          link.classList.toggle("active", href === `#${currentSectionId}`);
        });
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Intersection Observer for Reveal Animations
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && revealEls.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => observer.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  }

  // Initialize on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations();
    initEvents();
  });
})();
