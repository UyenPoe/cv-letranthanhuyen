/**
 * ============================================================================
 * CASE STUDY RENDERER (CS01 - CS12)
 * Dynamically populates and translates Case Study pages from data.js
 * ============================================================================
 */

(function () {
  "use strict";

  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) return;

  function renderCaseStudy() {
    const slug = document.body.getAttribute("data-project-slug");
    if (!slug) return;

    const lang = localStorage.getItem("uyen_cv_lang") || "vi";
    const idx = DATA.projects.findIndex((p) => p.slug === slug);
    if (idx === -1) return;

    const proj = DATA.projects[idx];
    const prevProj = DATA.projects[(idx - 1 + DATA.projects.length) % DATA.projects.length];
    const nextProj = DATA.projects[(idx + 1) % DATA.projects.length];
    const t = DATA.i18n[lang].caseStudy;
    const cs = proj.caseStudy;

    // CS01: Project Hero
    const badgeEl = document.getElementById("csBadge");
    if (badgeEl) badgeEl.textContent = proj.badge[lang];

    const roleHeroEl = document.getElementById("csHeroRole");
    if (roleHeroEl) roleHeroEl.textContent = proj.role[lang];

    const leadEl = document.getElementById("csLead");
    if (leadEl) leadEl.textContent = proj.shortDesc[lang];

    // CS02: Project Overview
    const overviewEl = document.getElementById("csOverviewText");
    if (overviewEl) overviewEl.textContent = cs.overview[lang];

    // CS03: My Role
    const myRoleList = document.getElementById("csMyRoleList");
    if (myRoleList) {
      myRoleList.innerHTML = cs.myRole[lang].map((item) => `<li>${item}</li>`).join("");
    }

    // CS04: Technology Stack
    const techList = document.getElementById("csTechStack");
    if (techList) {
      techList.innerHTML = proj.techStack
        .map(
          (tech) => `
        <span class="skill-tech-badge">
          <span class="badge-dot" aria-hidden="true"></span>
          ${tech}
        </span>
      `
        )
        .join("");
    }

    // CS05: Key Features (Distinguishing Completed vs In Development)
    const featuresGrid = document.getElementById("csFeaturesGrid");
    if (featuresGrid) {
      featuresGrid.innerHTML = cs.features
        .map(
          (f) => `
        <div class="cs-feature-item">
          <div class="cs-feature-top">
            <h3 class="cs-feature-name">${f.name[lang]}</h3>
            <span class="cs-status-pill ${f.status === "done" ? "done" : "in-progress"}">
              ${f.status === "done" ? t.statusDone : t.statusDev}
            </span>
          </div>
          <p style="font-size:var(--fs-small);color:var(--text-secondary);">${f.desc[lang]}</p>
        </div>
      `
        )
        .join("");
    }

    // CS06: Challenges & Solutions
    const challengesWrap = document.getElementById("csChallengesWrap");
    if (challengesWrap) {
      challengesWrap.innerHTML = cs.challenges
        .map(
          (c) => `
        <div class="cs-challenge-card">
          <div>
            <div class="cs-challenge-label problem">${t.problemLabel}</div>
            <p style="font-size:var(--fs-small);color:#E5E7EB;">${c.problem[lang]}</p>
          </div>
          <div>
            <div class="cs-challenge-label solution">${t.solutionLabel}</div>
            <p style="font-size:var(--fs-small);color:#D1FAE5;">${c.solution[lang]}</p>
          </div>
        </div>
      `
        )
        .join("");
    }

    // CS08: SEO & Performance
    const seoList = document.getElementById("csSeoList");
    if (seoList) {
      seoList.innerHTML = cs.seoPerformance[lang].map((item) => `<li>${item}</li>`).join("");
    }

    // CS09: Results
    const resultsGrid = document.getElementById("csResultsGrid");
    if (resultsGrid) {
      resultsGrid.innerHTML = cs.results
        .map(
          (r) => `
        <div class="cs-result-metric">
          <div class="cs-result-value">${r.value}</div>
          <div class="cs-result-caption">${r.caption[lang]}</div>
        </div>
      `
        )
        .join("");
    }

    // CS11: Previous / Next Project Navigation
    const prevLink = document.getElementById("csPrevProject");
    if (prevLink && prevProj) {
      prevLink.href = `${prevProj.slug}.html`;
      prevLink.innerHTML = `
        <span class="cs-nav-dir">${t.prevProject}</span>
        <span class="cs-nav-name">${prevProj.title}</span>
        <span style="font-size:0.8rem;color:var(--text-secondary);">${prevProj.domain}</span>
      `;
    }

    const nextLink = document.getElementById("csNextProject");
    if (nextLink && nextProj) {
      nextLink.href = `${nextProj.slug}.html`;
      nextLink.innerHTML = `
        <span class="cs-nav-dir">${t.nextProject}</span>
        <span class="cs-nav-name">${nextProj.title}</span>
        <span style="font-size:0.8rem;color:var(--text-secondary);">${nextProj.domain}</span>
      `;
    }
  }

  document.addEventListener("DOMContentLoaded", renderCaseStudy);
  window.addEventListener("portfolio:langchange", renderCaseStudy);
})();
