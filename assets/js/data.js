/**
 * ============================================================================
 * CENTRALIZED DATA STORE (VI / EN) - PERSONAL CV & PORTFOLIO
 * Author: Lê Trần Thanh Uyên (Web & SEO Specialist)
 * Note: Chỉnh sửa file này để cập nhật thông tin cá nhân, kỹ năng, kinh nghiệm
 *       và toàn bộ 6 dự án Case Study trên website mà không cần sửa nhiều nơi.
 * ============================================================================
 */

window.PORTFOLIO_DATA = {
  profile: {
    fullName: "Lê Trần Thanh Uyên",
    shortName: "THANH UYEN",
    birthDate: "18/01/1986",
    birthYear: "1986",
    roleTitle: "WEB & SEO SPECIALIST · GRAPHIC & UI/UX DESIGN",
    subRoles: "WORDPRESS · WEB DEVELOPER · SEO · GRAPHIC & UI/UX DESIGN",
    availableByDefault: true, // true: Sẵn sàng nhận việc | false: Đang bận dự án
    email: "thanhuyenletran@gmail.com",
    phone: "0706 700 528",
    zalo: "https://zalo.me/0706700528",
    github: "https://github.com/UyenPoe",
    location: {
      vi: "TP. Hồ Chí Minh, Việt Nam",
      en: "Ho Chi Minh City, Vietnam"
    },
    cvUrl: "assets/docs/CV-Le-Tran-Thanh-Uyen.pdf"
  },

  i18n: {
    vi: {
      nav: {
        home: "Trang chủ",
        about: "Giới thiệu",
        skills: "Kỹ năng",
        experience: "Kinh nghiệm",
        projects: "Dự án",
        contact: "Liên hệ"
      },
      status: {
        available: "Sẵn sàng nhận việc",
        busy: "Đang trong dự án",
        tooltip: "Nhấn để bật/tắt trạng thái sẵn sàng nhận cơ hội việc làm"
      },
      hero: {
        badge: "PORTFOLIO",
        pillars: "WORDPRESS · WEB DEVELOPER · SEO · GRAPHIC & UI/UX DESIGN",
        greeting: "Lê Trần Thanh Uyên — Chuyên viên Web & SEO",
        titleHtml: "I <span class=\"text-accent\">build</span>, <span class=\"text-accent\">manage</span> &amp; <span class=\"text-accent\">optimize</span> websites for real growth.",
        subtitleTag: "Personal CV & Portfolio Website — Xây dựng, Quản trị & Tối ưu Website tăng trưởng bền vững",
        description: "Kết hợp tư duy lập trình giao diện (WordPress, Laravel), quản trị hạ tầng hệ thống ổn định và phương pháp SEO kỹ thuật bài bản để giúp doanh nghiệp sở hữu website nhanh, chuẩn SEO và chuyển đổi hiệu quả.",
        ctaContact: "Contact Me →",
        ctaWork: "View My Work",
        ctaDownload: "Tải CV (PDF)",
        targetLabel: "Vị trí ứng tuyển:",
        role1: "Website Administrator",
        role2: "SEO Specialist",
        role3: "WordPress Developer",
        role4: "Graphic & UI/UX Designer",
        scrollDown: "Cuộn xuống"
      },
      about: {
        eyebrow: "01 · ABOUT ME",
        title: "Sự giao thoa giữa Lập trình Web, Quản trị Hệ thống & Tối ưu SEO",
        subtitle: "Không chỉ dừng lại ở việc tạo ra một giao diện đẹp, mình tập trung vào khả năng vận hành ổn định, tốc độ tải trang và thứ hạng tìm kiếm tự nhiên (Organic Traffic).",
        p1: "Xin chào! Mình là <strong>Lê Trần Thanh Uyên</strong>. Trong quá trình trực tiếp phát triển, vận hành và tối ưu hóa nhiều hệ thống website thuộc các lĩnh vực <strong>Thẩm mỹ viện, Sàn đánh giá & Review làm đẹp, Thương mại điện tử</strong>, mình nhận ra rằng một website thành công cần sự phối hợp chặt chẽ giữa mã nguồn sạch, hạ tầng máy chủ an toàn và cấu trúc SEO chuẩn mực.",
        p2: "Với nền tảng vừa hiểu sâu kỹ thuật <strong>WordPress / PHP / Laravel</strong>, vừa nắm vững <strong>On-page & Technical SEO</strong> cùng quy trình <strong>Quản trị Hosting, Domain, Bảo mật & Hiệu năng</strong>, mình có thể đảm nhận trọn vẹn vòng đời của một website hoặc phối hợp nhịp nhàng giữa đội ngũ Kỹ thuật (Dev) và Marketing (SEO/Content).",
        pillar1Title: "Website Administrator & IT Support – Quản trị Web & Kỹ thuật IT",
        pillar1Desc: "Quản lý Hosting/VPS, Domain/DNS, bảo mật, sao lưu. Lắp ráp, cài đặt và khắc phục sự cố máy tính PC/Laptop, thiết lập mạng văn phòng LAN/Wi-Fi và máy in.",
        pillar2Title: "SEO Specialist – Chuyên viên SEO Website",
        pillar2Desc: "Kiểm toán Technical SEO, cấu trúc Schema JSON-LD, Sitemap, tối ưu On-page, nghiên cứu từ khóa và theo dõi Search Console / GA4.",
        pillar3Title: "WordPress Developer – Lập trình viên WordPress",
        pillar3Desc: "Tùy biến Theme/Child Theme, xây dựng Custom Post Type, ACF, tích hợp WooCommerce và tối ưu truy vấn cơ sở dữ liệu.",
        pillar4Title: "Graphic & UI/UX Design – Thiết kế Đồ họa & UI/UX",
        pillar4Desc: "Thiết kế giao diện UI/UX trực quan, hiện đại cho website, app, phần mềm trên Desktop, Mobile, Tablet và thiết kế bộ nhận diện thương hiệu chuyên nghiệp bằng Photoshop, Illustrator.",
        stat1Num: "7+",
        stat1Label: "Dự án Website thực tế",
        stat2Num: "3",
        stat2Label: "Mảng chuyên môn cốt lõi",
        stat3Num: "90+",
        stat3Label: "Mục tiêu Lighthouse Score",
        stat4Num: "100%",
        stat4Label: "Chuẩn Responsive & SEO",
        domainsTitle: "Lĩnh vực đã triển khai thực tế",
        domain1: "Thẩm mỹ & Phòng khám (Beauty & Clinic)",
        domain2: "Thương mại điện tử (E-commerce)",
        domain3: "Cổng thông tin & Review đánh giá",
        domain4: "Nội thất & Thiết bị cao cấp",
        domain5: "Tài chính & Vay tín chấp (Finance & Loans)",
        objectiveTitle: "Định hướng nghề nghiệp",
        objectiveText: "Trở thành nhân sự nòng cốt trong vai trò Website Administrator / SEO Specialist / WordPress Developer, trực tiếp nâng cao hiệu suất kỹ thuật và tăng trưởng lưu lượng truy cập tự nhiên bền vững cho hệ sinh thái website của doanh nghiệp."
      },
      skills: {
        eyebrow: "02 · PROFESSIONAL SKILLS",
        title: "Năng lực Chuyên môn, Công nghệ & Thiết kế",
        subtitle: "Phân nhóm theo 5 trụ cột thực chiến từ Lập trình Web, Quản trị, SEO đến Thiết kế Đồ họa (Photoshop, Illustrator) & UI/UX Web Design.",
        filterAll: "Tất cả nhóm (5)",
        filterWeb: "Website Development",
        filterWp: "WordPress Development",
        filterSeo: "SEO Website",
        filterAdmin: "Website Administration & IT Support",
        filterDesign: "Graphic & UI/UX Design"
      },
      experience: {
        eyebrow: "03 · WORK EXPERIENCE",
        title: "Kinh nghiệm Làm việc & Triển khai Dự án",
        subtitle: "Lộ trình làm việc thực tế gắn liền với quản trị hệ thống website, phát triển WordPress/Laravel và tối ưu hóa công cụ tìm kiếm.",
        expandAll: "Mở rộng tất cả",
        collapseAll: "Thu gọn tất cả",
        btnExpand: "Xem chi tiết",
        btnCollapse: "Thu gọn",
        responsibilitiesLabel: "Trách nhiệm chính:",
        resultsLabel: "Kết quả & Đóng góp thực tế:"
      },
      projects: {
        eyebrow: "04 · FEATURED PROJECTS",
        title: "Dự án Thực tế & Case Study Chuyên sâu",
        subtitle: "Danh sách các hệ thống website thực tế đã tham gia xây dựng, quản trị và tối ưu SEO. Nhấn 'View Case Study' để xem chi tiết kiến trúc và giải pháp kỹ thuật.",
        filterAll: "All Projects",
        filterWp: "WordPress",
        filterLaravel: "Laravel",
        filterSeo: "SEO",
        filterEcom: "E-commerce",
        filterLanding: "Landing Page",
        btnCaseStudy: "View Case Study",
        btnLiveSite: "Live Website ↗"
      },
      contact: {
        eyebrow: "05 · CONTACT & CV",
        title: "Liên hệ Tuyển dụng & Hợp tác",
        subtitle: "Sẵn sàng trao đổi trực tiếp về cơ hội hợp tác ở vị trí Website Administrator, SEO Specialist hoặc WordPress Developer.",
        birthLabel: "Ngày sinh",
        emailLabel: "Email liên hệ",
        phoneLabel: "Điện thoại / Zalo",
        zaloLabel: "Kênh Zalo",
        githubLabel: "GitHub Profile",
        btnSendMail: "Gửi Email ngay",
        btnCopyMail: "Sao chép Email",
        btnDownloadCv: "Tải hồ sơ CV (PDF)",
        btnDownloadPortfolio: "Tải Portfolio Dự án (PDF)",
        formTitle: "Gửi tin nhắn nhanh cho Thanh Uyên",
        formSubtitle: "Điền thông tin bên dưới để mở trình gửi email nhanh với nội dung được định dạng sẵn.",
        labelName: "Họ tên / Quý công ty",
        placeholderName: "Nhập tên của bạn hoặc tên doanh nghiệp...",
        labelEmail: "Email phản hồi",
        placeholderEmail: "hr@company.com",
        labelRole: "Vị trí quan tâm",
        roleOpt1: "Website Administrator – Quản trị Website",
        roleOpt2: "SEO Specialist – Chuyên viên SEO",
        roleOpt3: "WordPress Developer – Lập trình viên WordPress",
        roleOpt4: "Graphic & UI/UX Designer – Thiết kế Đồ họa & Web",
        roleOpt5: "Trao đổi dự án / Khác",
        labelMessage: "Nội dung trao đổi",
        placeholderMessage: "Xin chào Thanh Uyên, chúng tôi ấn tượng với hồ sơ của bạn và muốn mời bạn trao đổi thêm về vị trí...",
        btnSubmitForm: "Soạn & Gửi Email →",
        toastCopied: "Đã sao chép địa chỉ Email vào bộ nhớ tạm!"
      },
      caseStudy: {
        backToPortfolio: "← Quay về danh sách dự án",
        cs01Tag: "CS01 · PROJECT HERO",
        cs02Tag: "CS02 · PROJECT OVERVIEW",
        cs02Title: "Tổng quan & Mục tiêu Dự án",
        cs03Tag: "CS03 · MY ROLE",
        cs03Title: "Vai trò & Trách nhiệm Cá nhân",
        cs04Tag: "CS04 · TECHNOLOGY STACK",
        cs04Title: "Công nghệ & Công cụ Sử dụng",
        cs05Tag: "CS05 · KEY FEATURES",
        cs05Title: "Chức năng Chính Đã Thực hiện",
        statusDone: "Đã hoàn thành",
        statusDev: "Đang phát triển",
        cs06Tag: "CS06 · CHALLENGES & SOLUTIONS",
        cs06Title: "Vấn đề Kỹ thuật & Giải pháp",
        problemLabel: "Thách thức / Vấn đề",
        solutionLabel: "Giải pháp Triển khai",
        cs07Tag: "CS07 · PROJECT GALLERY",
        cs07Title: "Giao diện Đa thiết bị (Desktop · Tablet · Mobile)",
        cs08Tag: "CS08 · SEO & PERFORMANCE",
        cs08Title: "Tối ưu SEO Kỹ thuật & Hiệu năng",
        cs09Tag: "CS09 · RESULTS",
        cs09Title: "Kết quả Đạt được & Bằng chứng",
        cs10Tag: "CS10 · EXTERNAL LINKS",
        cs10Title: "Liên kết Thực tế & Tài nguyên",
        prevProject: "← Dự án trước",
        nextProject: "Dự án tiếp theo →"
      }
    },

    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      status: {
        available: "Available for Work",
        busy: "Currently in Project",
        tooltip: "Click to manually toggle work availability status"
      },
      hero: {
        badge: "PORTFOLIO",
        pillars: "WORDPRESS · WEB DEVELOPER · SEO · GRAPHIC & UI/UX DESIGN",
        greeting: "Le Tran Thanh Uyen — Web & SEO Specialist",
        titleHtml: "I <span class=\"text-accent\">build</span>, <span class=\"text-accent\">manage</span> &amp; <span class=\"text-accent\">optimize</span> websites for real growth.",
        subtitleTag: "Personal CV & Portfolio Website",
        description: "Bridging clean frontend/CMS development (WordPress, Laravel), reliable website administration, and data-driven Technical SEO to deliver fast, secure, and high-converting digital products.",
        ctaContact: "Contact Me →",
        ctaWork: "View My Work",
        ctaDownload: "Download CV (PDF)",
        targetLabel: "Target Roles:",
        role1: "Website Administrator",
        role2: "SEO Specialist",
        role3: "WordPress Developer",
        role4: "Graphic & UI/UX Designer",
        scrollDown: "Scroll Down"
      },
      about: {
        eyebrow: "01 · ABOUT ME",
        title: "Where Web Engineering Meets Website Operations & Technical SEO",
        subtitle: "Beyond crafting clean interfaces, I focus on operational stability, Core Web Vitals speed, and sustainable organic search visibility.",
        p1: "Hello! I'm <strong>Le Tran Thanh Uyen</strong>. Through hands-on experience building, managing, and optimizing production websites across <strong>Beauty Clinics, Review Portals, and E-commerce platforms</strong>, I understand that real digital growth requires clean code, secure hosting infrastructure, and sound SEO architecture.",
        p2: "Combining practical expertise in <strong>WordPress / PHP / Laravel</strong> with <strong>On-page & Technical SEO</strong> and <strong>Hosting, Domain, Security & Performance Administration</strong>, I can own the full website lifecycle or bridge the gap seamlessly between Engineering and Marketing teams.",
        pillar1Title: "Website Administrator & IT Support",
        pillar1Desc: "Managing Hosting/VPS, DNS, web security, combined with PC assembly, OS/software setup, internal LAN network, and IT helpdesk support.",
        pillar2Title: "SEO Specialist",
        pillar2Desc: "Executing Technical SEO audits, JSON-LD Schema, XML Sitemaps, On-page optimization, keyword mapping, and Search Console / GA4 tracking.",
        pillar3Title: "WordPress Developer",
        pillar3Desc: "Developing custom themes/child themes, Custom Post Types (CPT), ACF fields, WooCommerce stores, and database query optimization.",
        pillar4Title: "Graphic & UI/UX Design",
        pillar4Desc: "Designing intuitive and modern UI/UX layouts for websites, software, and apps across Desktop, Tablet, and Mobile, and crafting professional brand identity with Photoshop and Illustrator.",
        stat1Num: "7+",
        stat1Label: "Production Websites",
        stat2Num: "3",
        stat2Label: "Core Specializations",
        stat3Num: "90+",
        stat3Label: "Target Lighthouse Score",
        stat4Num: "100%",
        stat4Label: "Responsive & SEO-Ready",
        domainsTitle: "Industry Domains Delivered",
        domain1: "Aesthetics & Beauty Clinics",
        domain2: "E-commerce & Retail",
        domain3: "Review & Directory Portals",
        domain4: "Luxury Interior & Stone Sinks",
        domain5: "Finance & Quick Loans",
        objectiveTitle: "Career Objective",
        objectiveText: "To contribute as a dedicated Website Administrator, SEO Specialist, or WordPress Developer—improving technical reliability, page speed, and long-term organic search growth."
      },
      skills: {
        eyebrow: "02 · PROFESSIONAL SKILLS",
        title: "Technical Stack, Administration & Design",
        subtitle: "Organized into 5 practical pillars bridging web development, server operations, technical SEO, and creative Graphic (Photoshop, Illustrator) & UI/UX Web Design.",
        filterAll: "All Pillars (5)",
        filterWeb: "Website Development",
        filterWp: "WordPress Development",
        filterSeo: "SEO Website",
        filterAdmin: "Website Administration & IT Support",
        filterDesign: "Graphic & UI/UX Design"
      },
      experience: {
        eyebrow: "03 · WORK EXPERIENCE",
        title: "Professional Experience & Project Delivery",
        subtitle: "A practical track record across website administration, WordPress/Laravel development, and technical search engine optimization.",
        expandAll: "Expand All",
        collapseAll: "Collapse All",
        btnExpand: "Show Details",
        btnCollapse: "Hide Details",
        responsibilitiesLabel: "Key Responsibilities:",
        resultsLabel: "Key Deliverables & Impact:"
      },
      projects: {
        eyebrow: "04 · FEATURED PROJECTS",
        title: "Production Portfolio & In-Depth Case Studies",
        subtitle: "Real-world websites built, managed, and optimized. Click 'View Case Study' to inspect architecture, role, challenges, and SEO results.",
        filterAll: "All Projects",
        filterWp: "WordPress",
        filterLaravel: "Laravel",
        filterSeo: "SEO",
        filterEcom: "E-commerce",
        filterLanding: "Landing Page",
        btnCaseStudy: "View Case Study",
        btnLiveSite: "Live Website ↗"
      },
      contact: {
        eyebrow: "05 · CONTACT & CV",
        title: "Let's Connect for Opportunities",
        subtitle: "Open for interviews and discussions regarding Website Administrator, SEO Specialist, or WordPress Developer roles.",
        birthLabel: "Date of Birth",
        emailLabel: "Email Address",
        phoneLabel: "Phone / Zalo",
        zaloLabel: "Zalo Chat",
        githubLabel: "GitHub Profile",
        btnSendMail: "Send Email Now",
        btnCopyMail: "Copy Email",
        btnDownloadCv: "Download CV (PDF)",
        btnDownloadPortfolio: "Download Portfolio (PDF)",
        formTitle: "Send a Quick Message",
        formSubtitle: "Fill out the fields below to open your default mail client with a pre-formatted recruitment message.",
        labelName: "Your Name / Company",
        placeholderName: "Enter your name or company name...",
        labelEmail: "Reply-to Email",
        placeholderEmail: "hr@company.com",
        labelRole: "Target Position",
        roleOpt1: "Website Administrator",
        roleOpt2: "SEO Specialist",
        roleOpt3: "WordPress Developer",
        roleOpt4: "Graphic & UI/UX Designer",
        roleOpt5: "Project Collaboration / Other",
        labelMessage: "Message",
        placeholderMessage: "Hi Thanh Uyen, we reviewed your portfolio and would love to schedule an interview for...",
        btnSubmitForm: "Compose & Send Email →",
        toastCopied: "Email address copied to clipboard!"
      },
      caseStudy: {
        backToPortfolio: "← Back to Portfolio",
        cs01Tag: "CS01 · PROJECT HERO",
        cs02Tag: "CS02 · PROJECT OVERVIEW",
        cs02Title: "Project Overview & Objectives",
        cs03Tag: "CS03 · MY ROLE",
        cs03Title: "My Role & Responsibilities",
        cs04Tag: "CS04 · TECHNOLOGY STACK",
        cs04Title: "Technology Stack & Tools",
        cs05Tag: "CS05 · KEY FEATURES",
        cs05Title: "Key Features Implemented",
        statusDone: "Completed",
        statusDev: "In Development",
        cs06Tag: "CS06 · CHALLENGES & SOLUTIONS",
        cs06Title: "Technical Challenges & Solutions",
        problemLabel: "Challenge / Issue",
        solutionLabel: "Implemented Solution",
        cs07Tag: "CS07 · PROJECT GALLERY",
        cs07Title: "Multi-Device Preview (Desktop · Tablet · Mobile)",
        cs08Tag: "CS08 · SEO & PERFORMANCE",
        cs08Title: "Technical SEO & Performance Optimization",
        cs09Tag: "CS09 · RESULTS",
        cs09Title: "Results & Verified Outcomes",
        cs10Tag: "CS10 · EXTERNAL LINKS",
        cs10Title: "External Links & Resources",
        prevProject: "← Previous Project",
        nextProject: "Next Project →"
      }
    }
  },

  skills: [
    {
      id: "web-dev",
      category: "web",
      title: {
        vi: "Website Development",
        en: "Website Development"
      },
      desc: {
        vi: "Xây dựng giao diện chuẩn Semantic HTML5, Responsive đa thiết bị và phát triển tính năng backend/MVC với PHP & Laravel.",
        en: "Building semantic, responsive frontend interfaces and developing structured MVC web applications with PHP & Laravel."
      },
      items: [
        "HTML5 / Semantic Markup",
        "CSS3 / Flexbox / Grid",
        "JavaScript (ES6+)",
        "PHP 8.x",
        "Laravel Framework (MVC)",
        "MySQL / Database Design",
        "Responsive Web Design",
        "Git & GitHub Pages"
      ]
    },
    {
      id: "wp-dev",
      category: "wp",
      title: {
        vi: "WordPress Development",
        en: "WordPress Development"
      },
      desc: {
        vi: "Phát triển và tùy biến sâu hệ thống WordPress: từ Theme, Custom Post Type, ACF cho tới cửa hàng WooCommerce hoàn chỉnh.",
        en: "Customizing and engineering WordPress ecosystems: custom themes, Custom Post Types, ACF schemas, and WooCommerce stores."
      },
      items: [
        "Custom Plugin Dev (Tối ưu Content SEO & Schema)",
        "Custom Theme & Child Theme",
        "Plugin Integration & Customization",
        "Custom Post Type (CPT) & Taxonomies",
        "Advanced Custom Fields (ACF)",
        "WooCommerce E-commerce",
        "Elementor / Flatsome UX Builder",
        "WordPress Hooks (Actions & Filters)",
        "WP Speed & Database Cleanup"
      ]
    },
    {
      id: "seo-web",
      category: "seo",
      title: {
        vi: "SEO Website",
        en: "SEO Website"
      },
      desc: {
        vi: "Tối ưu toàn diện On-page & Technical SEO, tự phát triển Plugin WordPress tối ưu hóa nội dung giúp website đạt thứ hạng bền vững.",
        en: "Comprehensive On-page and Technical SEO execution, developing custom WordPress plugins for content optimization to maximize organic search rankings."
      },
      items: [
        "Lập trình Plugin Tối ưu Content SEO (Auto TOC & Score)",
        "On-page SEO & Heading Architecture (H1–H3)",
        "Technical SEO Audit & Crawlability",
        "Schema Markup (JSON-LD: Person, Product, FAQ, LocalBusiness)",
        "XML Sitemap & Robots.txt Configuration",
        "Google Search Console & Indexing",
        "Google Analytics 4 (GA4) & Tag Manager",
        "Internal Linking & Topic Cluster",
        "Canonical URL & Open Graph Meta"
      ]
    },
    {
      id: "web-admin",
      category: "admin",
      title: {
        vi: "Website Administration & IT Support",
        en: "Website Administration & IT Support"
      },
      desc: {
        vi: "Quản trị hạ tầng Hosting, Domain, bảo mật web, kết hợp kỹ năng lắp ráp, cài đặt máy tính và hỗ trợ kỹ thuật IT nội bộ.",
        en: "End-to-end administration of hosting environments, domains, web security, combined with PC assembly, OS installation, and internal IT support."
      },
      items: [
        "Lắp ráp máy tính PC & Nâng cấp linh kiện (Mainboard, CPU, RAM, SSD, VGA)",
        "Cài đặt hệ điều hành (Windows 10/11, macOS, Linux) & Phần mềm làm việc",
        "Xử lý sự cố phần cứng, phần mềm (Troubleshooting PC/Laptop/Mạng)",
        "Thiết lập mạng nội bộ LAN, Wi-Fi, Router & chia sẻ máy in văn phòng",
        "Hosting / cPanel / DirectAdmin / VPS",
        "Domain, DNS & Cloudflare CDN",
        "Database Management (phpMyAdmin / MySQL)",
        "Automated Backup & Disaster Recovery",
        "Website Security, SSL/HTTPS & Firewall",
        "Core Web Vitals (LCP, INP, CLS)",
        "WebP/AVIF Image Optimization & Caching",
        "Uptime Monitoring & Bug Fixing"
      ]
    },
    {
      id: "graphic-uiux",
      category: "design",
      title: {
        vi: "Graphic & UI/UX Web Design",
        en: "Graphic & UI/UX Web Design"
      },
      desc: {
        vi: "Sáng tạo ấn phẩm đồ họa quảng cáo, xử lý hình ảnh sản phẩm với Photoshop/Illustrator và thiết kế giao diện web UI/UX hiện đại, tối ưu trải nghiệm tương tác.",
        en: "Designing visual brand assets, marketing campaigns, photo manipulation with Photoshop/Illustrator, and modern user-centric web UI/UX layouts."
      },
      items: [
        "Thiết kế UI/UX Web, App & Phần mềm trực quan",
        "Figma UI Design, Bố cục & Giao diện tương tác",
        "Thiết kế chuẩn Responsive 3 nền tảng (Desktop, Tablet, Mobile)",
        "Gia tăng tính thẩm mỹ và nhận diện cho sản phẩm số",
        "Adobe Photoshop (Banner, Poster, Retouching, Color Grading)",
        "Adobe Illustrator (Vector Logo, Icons, Brand Identity, In ấn)",
        "Nghiên cứu hành vi người dùng, Usability Testing & Tối ưu CRO",
        "Web Graphic & Core Web Vitals Optimization (WebP, SVG siêu nhẹ)"
      ]
    }
  ],

  experiences: [
    {
      id: "exp-1",
      period: "2024 – Present",
      role: {
        vi: "Website Administrator & Technical SEO Specialist",
        en: "Website Administrator & Technical SEO Specialist"
      },
      company: {
        vi: "Hệ sinh thái Website Thẩm mỹ & Review Làm đẹp (WangSun Luxury, Sàn Thẩm Mỹ, Review Làm Đẹp, Đánh Giá Thẩm Mỹ)",
        en: "Beauty & Aesthetic Web Ecosystem (WangSun Luxury, San Tham My, Review Lam Dep, Danh Gia Tham My)"
      },
      summary: {
        vi: "Chịu trách nhiệm quản trị vận hành, phát triển tính năng WordPress và tối ưu hóa SEO kỹ thuật cho chuỗi website chuyên ngành thẩm mỹ và cổng thông tin đánh giá làm đẹp.",
        en: "Managing infrastructure, developing custom WordPress directory features, and executing Technical SEO across a network of aesthetic clinic and beauty review websites."
      },
      responsibilities: {
        vi: [
          "Quản trị trực tiếp Hosting, Domain, DNS Cloudflare, chứng chỉ SSL và lịch sao lưu định kỳ cho chuỗi 4+ website WordPress đang hoạt động.",
          "Thiết kế cấu trúc Custom Post Type (CPT) và bộ lọc chuyên mục cho các trang Review / Sàn Thẩm Mỹ, giúp người dùng tra cứu dịch vụ và cơ sở thẩm mỹ nhanh chóng.",
          "Thực hiện Technical SEO Audit: chuẩn hóa cấu trúc URL, thẻ Heading H1–H3, Schema JSON-LD (LocalBusiness, MedicalWebPage, Review, FAQ), Sitemap.xml và Robots.txt.",
          "Tối ưu tốc độ tải trang (chuyển đổi ảnh WebP/AVIF, cấu hình LiteSpeed/WP Rocket Cache, lazy loading) và theo dõi chỉ số trên Google Search Console."
        ],
        en: [
          "Administered Hosting, Domain, Cloudflare DNS, SSL certificates, and automated backup routines for 4+ live WordPress websites.",
          "Engineered Custom Post Types (CPT) and taxonomy filtering for beauty directory & review portals, enabling fast clinic and service lookup.",
          "Conducted Technical SEO audits: standardized URL structures, H1–H3 hierarchies, JSON-LD Schema (LocalBusiness, Review, FAQ), XML Sitemaps, and Robots.txt.",
          "Optimized Core Web Vitals (WebP/AVIF conversion, caching layers, lazy loading) and monitored indexation health via Google Search Console."
        ]
      },
      results: {
        vi: "Hệ thống vận hành ổn định (Uptime > 99.8%), cấu trúc On-page & Schema đạt chuẩn kiểm tra Rich Results, cải thiện rõ rệt tốc độ tải trang trên thiết bị di động.",
        en: "Maintained >99.8% uptime, achieved valid Rich Results Schema across key templates, and significantly improved mobile page load performance."
      },
      tech: ["WordPress", "Technical SEO", "Adobe Photoshop", "Adobe Illustrator", "UI/UX Web Design", "Schema JSON-LD", "cPanel / Hosting", "WebP & Core Web Vitals"]
    },
    {
      id: "exp-2",
      period: "2023 – 2024",
      role: {
        vi: "WordPress & E-commerce Web Developer",
        en: "WordPress & E-commerce Web Developer"
      },
      company: {
        vi: "Dự án Thương mại điện tử & Nội thất cao cấp (Stone Sinks Vietnam & các website bán hàng)",
        en: "E-commerce & Luxury Interior Web Projects (Stone Sinks Vietnam & Retail Sites)"
      },
      summary: {
        vi: "Xây dựng và tùy biến website thương mại điện tử trưng bày và bán sản phẩm chậu đá tự nhiên cao cấp, kết hợp tối ưu SEO sản phẩm.",
        en: "Built and customized e-commerce product catalogs and brand websites for natural stone sinks and retail businesses, integrated with product SEO."
      },
      responsibilities: {
        vi: [
          "Triển khai giao diện WordPress & WooCommerce chuẩn Responsive trên Desktop, Tablet và Mobile cho thương hiệu Stone Sinks (stonesinks.vn).",
          "Cấu hình danh mục sản phẩm, thuộc tính kỹ thuật (kích thước, chất liệu đá tự nhiên), bộ lọc sản phẩm và luồng đặt hàng / liên hệ báo giá.",
          "Tối ưu SEO danh mục và trang chi tiết sản phẩm (Product Schema, BreadcrumbList, tối ưu thẻ Alt ảnh sản phẩm độ phân giải cao).",
          "Bàn giao tài liệu hướng dẫn quản trị nội dung, đăng sản phẩm chuẩn SEO và bảo mật tài khoản quản trị."
        ],
        en: [
          "Developed responsive WordPress & WooCommerce storefronts across Desktop, Tablet, and Mobile for Stone Sinks (stonesinks.vn).",
          "Configured product catalogs, technical attributes (dimensions, stone materials), filtering, and quotation/checkout inquiry flows.",
          "Optimized category and product pages for search engines (Product Schema, BreadcrumbList, high-res image compression and alt tags).",
          "Delivered administrator documentation for content updates, SEO-friendly product publishing, and security best practices."
        ]
      },
      results: {
        vi: "Hoàn thiện website trưng bày sản phẩm chuyên nghiệp, hiển thị sắc nét hình ảnh chất liệu đá tự nhiên mà vẫn giữ dung lượng trang nhẹ, dễ dàng mở rộng danh mục.",
        en: "Delivered a fast, visually refined e-commerce catalog showcasing high-resolution stone textures while keeping page weight minimal."
      },
      tech: ["WordPress", "WooCommerce", "Adobe Photoshop", "UI/UX Web Design", "Product SEO", "Image Optimization", "Hosting Admin"]
    },
    {
      id: "exp-3",
      period: "2022 – 2023",
      role: {
        vi: "WordPress Developer (Tự Code Theme từ đầu) & UI/UX Designer",
        en: "WordPress Developer (Custom Theme from scratch) & UI/UX Designer"
      },
      company: {
        vi: "Hệ sinh thái Tài Chính Tài Thành (taichinhtaithanh.com & smartphone.taichinhtaithanh.com)",
        en: "Tai Chinh Tai Thanh Web Ecosystem (taichinhtaithanh.com & smartphone.taichinhtaithanh.com)"
      },
      summary: {
        vi: "Trực tiếp tự lập trình toàn bộ giao diện (Custom WordPress Theme từ đầu, không dùng theme dựng sẵn) cho website bán lẻ điện thoại smartphone.taichinhtaithanh.com và thiết kế Landing Page tài chính Blogspot taichinhtaithanh.com.",
        en: "Engineered a custom WordPress theme from scratch (no bloated pre-built themes) for smartphone retail portal smartphone.taichinhtaithanh.com and crafted the high-converting Blogspot landing page taichinhtaithanh.com."
      },
      responsibilities: {
        vi: [
          "Tự lập trình Theme WordPress từ đầu (Custom Theme Development) chuẩn mã nguồn sạch, tối ưu hóa tốc độ tải trang và trải nghiệm người dùng Mobile-first.",
          "Xây dựng các chức năng lọc điện thoại theo hãng, mức giá, bộ nhớ RAM/ROM, module giỏ hàng và đặt hàng trực tuyến.",
          "Thiết kế Landing Page taichinhtaithanh.com bằng Google Blogspot (Custom XML / CSS3 / JS) tối ưu chuyển đổi (CRO), bảng tính khoản vay tương tác và lead form.",
          "Thiết kế banner flash sale, icon thông số kỹ thuật chuẩn vector bằng Illustrator và Photoshop.",
          "Triển khai mã nguồn lên hosting cPanel thực tế (smartphone.taichinhtaithanh.com), tối ưu On-page SEO và kiểm thử luồng người dùng."
        ],
        en: [
          "Engineered a lightweight custom WordPress theme from scratch with clean, semantic markup and mobile-first responsive architecture.",
          "Implemented e-commerce catalog filtering by brand, price range, RAM/ROM specs, shopping cart, and quick ordering flow.",
          "Designed the high-converting financial landing page taichinhtaithanh.com on Google Blogspot with an interactive loan calculator and lead capture forms.",
          "Designed promotional flash sale banners and vector spec iconography using Illustrator and Photoshop.",
          "Deployed the custom theme to production cPanel hosting (smartphone.taichinhtaithanh.com) and performed end-to-end QA testing."
        ]
      },
      results: {
        vi: "Vận hành thành công website bán lẻ điện thoại với theme tự code siêu nhẹ, đạt điểm PageSpeed 90+ và Landing Page Blogspot tối ưu chuyển đổi cao.",
        en: "Successfully launched the retail storefront powered by a bloat-free custom WordPress theme achieving 90+ PageSpeed alongside the high-converting Blogspot landing page."
      },
      tech: ["WordPress Custom Theme", "PHP", "MySQL", "WooCommerce", "Blogspot XML", "UI/UX Design", "HTML5/CSS3", "JavaScript", "Adobe Photoshop", "Illustrator"]
    },
    {
      id: "exp-4",
      period: "2017 – 2022",
      role: {
        vi: "Senior SEO Specialist & Industrial Web Administrator",
        en: "Senior SEO Specialist & Industrial Web Administrator"
      },
      company: {
        vi: "Cụm Doanh Nghiệp Cơ Khí Thới An & Cân Hoàng Thiên (cautructhoian.vn, hoangthienscale.com, thoianscale.com, canhoangthien.com)",
        en: "Thoi An Mechanical & Hoang Thien Scale Enterprise Network (cautructhoian.vn, hoangthienscale.com, thoianscale.com, canhoangthien.com)"
      },
      summary: {
        vi: "Phụ trách chiến lược SEO tổng thể, quản trị website và thiết kế ấn phẩm B2B cho 4 website chuyên ngành thiết bị nâng hạ công nghiệp (cầu trục, cổng trục, palang) và hệ thống cân điện tử (trạm cân ô tô xe tải 20-120 tấn, cân sàn, cân bồn, loadcell).",
        en: "Spearheaded end-to-end B2B SEO strategies, web infrastructure, and digital catalog designs for 4 industrial machinery websites specializing in heavy lifting overhead cranes, hoists, and electronic truck scale systems."
      },
      responsibilities: {
        vi: [
          "Xây dựng ma trận từ khóa B2B kỹ thuật cao (cầu trục dầm đơn/dầm đôi, cổng trục, pa lăng xích/cáp, trạm cân xe tải 80-100 tấn, cân sàn điện tử, cảm biến lực loadcell).",
          "Tối ưu On-page & Technical SEO: cấu trúc danh mục sản phẩm chuẩn hóa, tối ưu tốc độ tải trang, khai báo Schema Organization / Product và chuẩn hóa sitemap phân nhánh.",
          "Triển khai Local SEO Google Maps / Google Business Profile cho cả 2 doanh nghiệp tại Quận 12 (TP.HCM), phủ sóng tiếp cận khách hàng nhà máy tại TP.HCM, Bình Dương, Đồng Nai, Long An.",
          "Chụp ảnh thực tế tại nhà xưởng, sử dụng Photoshop & Illustrator thiết kế catalogue thông số kỹ thuật (Spec Sheets), banner khuyến mãi và hồ sơ năng lực công ty tham gia đấu thầu.",
          "Quản trị hạ tầng hosting cPanel, bảo mật WordPress, xử lý chứng chỉ SSL và duy trì vận hành ổn định liên tục trong 5 năm."
        ],
        en: [
          "Developed comprehensive B2B keyword taxonomy targeting heavy industrial equipment (overhead cranes, gantry cranes, electric hoists, 80-120T truck scales, industrial floor scales, loadcells).",
          "Executed On-page & Technical SEO: structured product specs hierarchy, Core Web Vitals, JSON-LD Organization/Product schemas, and optimized crawl budgets.",
          "Managed Google Business Profile / Local SEO optimization for facilities in District 12 (HCMC), capturing industrial plant leads across HCMC, Binh Duong, Dong Nai, and Long An.",
          "Captured on-site workshop photos; utilized Photoshop & Illustrator to design technical spec catalogs, B2B banners, and company bidding credentials.",
          "Administered cPanel hosting infrastructure, WordPress security hardening, SSL compliance, and system stability across 5 continuous years."
        ]
      },
      results: {
        vi: "Đưa hơn 150+ từ khóa cốt lõi ngành cầu trục và cân điện tử lọt Top 1 – Top 5 Google Search, duy trì thứ hạng bền vững suốt 5 năm, tạo nguồn khách hàng B2B và hợp đồng lắp đặt trạm cân giá trị cao.",
        en: "Ranked 150+ primary industrial keywords into Google Top 1–5, maintaining sustained organic visibility over 5 years and generating high-value B2B enterprise inquiries."
      },
      tech: ["WordPress", "B2B Technical SEO", "Local SEO Google Maps", "Adobe Photoshop", "Adobe Illustrator", "Product Catalog", "Hosting cPanel", "Keyword Research"]
    }
  ],

  projects: [
    {
      slug: "tai-chinh-tai-thanh",
      title: "Tài Chính Tài Thành",
      domain: "taichinhtaithanh.com",
      liveUrl: "https://www.taichinhtaithanh.com",
      githubUrl: "https://github.com/UyenPoe",
      categories: ["web", "seo", "landingpage"],
      badge: {
        vi: "Blogspot · Landing Page",
        en: "Blogspot · Landing Page"
      },
      role: {
        vi: "Frontend Developer (Blogspot XML / HTML / CSS) & CRO Specialist",
        en: "Frontend Developer (Blogspot XML / HTML / CSS) & CRO Specialist"
      },
      shortDesc: {
        vi: "Landing Page tài chính & vay tín chấp nhanh 24h xây dựng trên Google Blogspot: thiết kế giao diện tối ưu chuyển đổi (CRO), bảng tính khoản vay tương tác và lead form trực tuyến.",
        en: "High-converting financial loan consultation landing page built on Google Blogspot featuring an interactive loan calculator, lead capture forms, and mobile-first responsive design."
      },
      techStack: ["Blogspot / Blogger", "Custom XML", "HTML5/CSS3", "JavaScript", "CRO Landing Page", "Loan Calculator", "Google CDN", "On-Page SEO"],
      images: {
        hero: "assets/images/projects/tai-chinh-tai-thanh.webp",
        desktop: "assets/images/projects/tai-chinh-tai-thanh.webp",
        tablet: "assets/images/projects/tai-chinh-tai-thanh-tablet.webp",
        mobile: "assets/images/projects/tai-chinh-tai-thanh-mobile.webp"
      },
      caseStudy: {
        overview: {
          vi: "Tài Chính Tài Thành (taichinhtaithanh.com) là dự án thiết kế và triển khai Landing Page tư vấn giải pháp tài chính và vay tín chấp nhanh 24h. Nền tảng được xây dựng bằng cách tùy biến sâu template XML của Google Blogspot (Blogger), tận dụng hạ tầng máy chủ Google Server Engine (GSE) miễn phí trọn đời nhưng có tốc độ tải trang cực nhanh, chứng chỉ bảo mật SSL tự động và uptime 100%. Trọng tâm của landing page là tối ưu hóa tỷ lệ chuyển đổi (CRO), thu hút khách hàng để lại thông tin tư vấn và ước tính khoản vay trực tiếp.",
          en: "Tai Chinh Tai Thanh (taichinhtaithanh.com) is a high-converting financial and personal loan landing page. Developed by customizing Google Blogspot's XML template, it leverages Google's global CDN and server infrastructure for lightning-fast loading, automatic SSL, and 100% uptime. The design focuses on Conversion Rate Optimization (CRO), lead generation, and interactive loan estimations."
        },
        myRole: {
          vi: [
            "Thiết kế cấu trúc giao diện Landing Page chuyên nghiệp, phối màu theo tone Xanh Tài Chính (#0b5bb5) và Vàng Amber (#f59e0b) tạo độ uy tín cao.",
            "Tùy biến mã nguồn Google Blogspot XML Template, viết HTML5/CSS3 tùy biến sạch và tích hợp JavaScript cho các hiệu ứng tương tác.",
            "Lập trình module Ước tính khoản vay (Loan Calculator) và Biểu mẫu đăng ký tư vấn (Lead Form) gửi dữ liệu tức thì.",
            "Tối ưu On-page SEO cho các từ khóa dịch vụ tài chính, gắn thẻ Canonical, Open Graph và cấu hình tên miền riêng www.taichinhtaithanh.com trỏ về Blogspot qua DNS CNAME."
          ],
          en: [
            "Designed a conversion-centric financial landing page layout using trust-building blue (#0b5bb5) and amber (#f59e0b) color palettes.",
            "Customized Google Blogspot XML templates with clean semantic HTML5, modular CSS3, and lightweight vanilla JavaScript.",
            "Programmed the interactive Loan Calculator widget and lead capture consultation form.",
            "Optimized On-page SEO, canonical URLs, social Open Graph tags, and custom domain DNS mapping on Blogspot."
          ]
        },
        features: [
          {
            name: { vi: "Biểu mẫu Đăng ký Tư vấn (Lead Capture Form)", en: "Lead Capture Consultation Form" },
            desc: { vi: "Biểu mẫu thu thập nhu cầu vay và thông tin liên hệ được tối ưu vị trí (Above the Fold & Sticky CTA) giúp tối đa hóa tỷ lệ chuyển đổi.", en: "Conversion-optimized lead capture form positioned above-the-fold with sticky call-to-action triggers." },
            status: "done"
          },
          {
            name: { vi: "Công cụ Ước tính Khoản vay (Loan Calculator)", en: "Interactive Loan Calculator" },
            desc: { vi: "Tiện ích tính toán số tiền trả góp hàng tháng theo thời gian vay và lãi suất thực tế bằng JavaScript mượt mà.", en: "Dynamic client-side loan estimation widget calculating monthly installment payments and interest rates." },
            status: "done"
          },
          {
            name: { vi: "Quy trình Giải ngân 4 Bước Minh bạch", en: "Transparent 4-Step Loan Process" },
            desc: { vi: "Trình bày trực quan lộ trình xét duyệt hồ sơ từ Đăng ký, Thẩm định, Duyệt hạn mức đến Nhận tiền trong 24h.", en: "Step-by-step visual roadmap from application to disbursement within 24 hours." },
            status: "done"
          },
          {
            name: { vi: "Hạ tầng Google Cloud & Tên miền Riêng", en: "Google CDN & Custom Domain Mapping" },
            desc: { vi: "Cấu hình tên miền taichinhtaithanh.com trỏ về Blogspot qua DNS CNAME/A Records, kích hoạt HTTPS miễn phí và uptime tuyệt đối.", en: "Custom domain DNS CNAME mapping to Google Blogspot with automatic SSL certificates and 100% uptime." },
            status: "done"
          }
        ],
        challenges: [
          {
            problem: {
              vi: "Mẫu giao diện mặc định của Blogspot chứa nhiều mã nguồn thừa, CSS/JS widget nặng làm giảm điểm hiệu năng PageSpeed.",
              en: "Default Blogspot XML templates contain legacy widgets and unoptimized CSS/JS assets degrading Core Web Vitals."
            },
            solution: {
              vi: "Tự viết lại template XML Blogspot từ đầu (Clean Slate XML), loại bỏ hoàn toàn các widget không cần thiết và tối ưu hóa CSS nội dòng.",
              en: "Built a custom lightweight XML template from scratch, purging bloatware widgets and inlining critical CSS."
            }
          },
          {
            problem: {
              vi: "Nền tảng Blogspot không có backend PHP để xử lý lưu trữ form đăng ký tư vấn của khách hàng vào database riêng.",
              en: "Google Blogspot lacks native server-side scripting to process and store custom contact form leads in a database."
            },
            solution: {
              vi: "Tích hợp JavaScript chuyển hướng dữ liệu form về webhook/Google Sheets tự động và hỗ trợ nút gọi Hotline / Zalo tức thì.",
              en: "Integrated client-side JavaScript routing form submissions to secure webhooks / Google Sheets alongside direct Zalo/Hotline CTAs."
            }
          }
        ],
        seoPerformance: {
          vi: [
            "Tối ưu On-page SEO cho các từ khóa cốt lõi: 'vay tín chấp nhanh', 'giải pháp tài chính', 'vay tiêu dùng 24h'.",
            "Cấu trúc thẻ tiêu đề chuẩn mực (H1 Hero, H2 cho các gói vay, H3 cho câu hỏi thường gặp FAQ).",
            "Tốc độ tải trang đạt 95+ trên Google PageSpeed Insights nhờ hạ tầng máy chủ toàn cầu của Google (GSE).",
            "Cấu hình Canonical URL và thẻ meta Open Graph tối ưu hiển thị khi chia sẻ liên kết trên Zalo/Facebook."
          ],
          en: [
            "On-page optimization for target search terms: quick personal loan, flexible financial solutions, 24h consultation.",
            "Semantic heading hierarchy (H1 Hero, H2 for loan packages, H3 for FAQ items).",
            "PageSpeed score 95+ backed by Google Server Engine (GSE) edge network.",
            "Configured Canonical URLs and Open Graph social preview meta tags for Zalo and Facebook sharing."
          ]
        },
        results: [
          { value: "100%", caption: { vi: "Uptime tuyệt đối nhờ hạ tầng Google", en: "100% Uptime backed by Google Infrastructure" } },
          { value: "95+", caption: { vi: "Điểm PageSpeed Mobile & Desktop", en: "PageSpeed Insights Score on Mobile & Desktop" } },
          { value: "CRO", caption: { vi: "Tối ưu hóa tỷ lệ chuyển đổi khách hàng", en: "Conversion-optimized lead capture layout" } }
        ]
      }
    },
    {
      slug: "smartphone-ecommerce",
      title: "Smartphone E-commerce",
      domain: "smartphone.taichinhtaithanh.com",
      liveUrl: "https://smartphone.taichinhtaithanh.com",
      githubUrl: "https://github.com/UyenPoe",
      categories: ["wordpress", "ecommerce"],
      badge: {
        vi: "WordPress · Tự Code Theme",
        en: "WordPress · Custom Theme"
      },
      role: {
        vi: "WordPress Developer (Tự Code Theme từ đầu) & UI/UX Designer",
        en: "WordPress Developer (Custom Theme from scratch) & UI/UX Designer"
      },
      shortDesc: {
        vi: "Hệ thống website thương mại điện tử bán lẻ điện thoại thông minh được tự lập trình toàn bộ WordPress Theme từ đầu: mã nguồn sạch, tối ưu bộ lọc thông số, giỏ hàng, đặt hàng và đạt điểm PageSpeed 90+.",
        en: "Full-featured smartphone e-commerce platform with a 100% custom-coded WordPress theme from scratch, featuring multi-attribute filtering, shopping cart, and 90+ PageSpeed score."
      },
      techStack: ["WordPress", "Custom Theme", "PHP", "MySQL", "WooCommerce", "UI/UX Web Design", "Adobe Photoshop", "Adobe Illustrator", "JavaScript", "HTML5/CSS3"],
      images: {
        hero: "assets/images/projects/smartphone-ecommerce.webp",
        desktop: "assets/images/projects/smartphone-ecommerce.webp",
        tablet: "assets/images/projects/smartphone-ecommerce-tablet.webp",
        mobile: "assets/images/projects/smartphone-ecommerce-mobile.webp"
      },
      caseStudy: {
        overview: {
          vi: "Smartphone E-commerce (smartphone.taichinhtaithanh.com) là dự án xây dựng hệ thống website bán lẻ thiết bị di động trực tuyến trên nền tảng WordPress với toàn bộ Theme được tự lập trình từ đầu (Custom WordPress Theme Development). Việc tự code theme hoàn toàn từ đầu giúp loại bỏ mã nguồn thừa, tối đa hóa hiệu năng và mang lại trải nghiệm mua sắm mượt mà trên cả máy tính lẫn điện thoại.",
          en: "Smartphone E-commerce (smartphone.taichinhtaithanh.com) is an online mobile retail platform built on WordPress with a 100% custom-coded theme from scratch. Avoiding bloated off-the-shelf themes ensured zero bloatware, maximum performance, and a streamlined mobile-first checkout experience."
        },
        myRole: {
          vi: [
            "Tự thiết kế và lập trình toàn bộ mã nguồn giao diện (Custom WordPress Theme) chuẩn HTML5/CSS3/JavaScript kết hợp template PHP tùy biến.",
            "Tích hợp WooCommerce, cấu hình biến thể sản phẩm (màu sắc, bộ nhớ dung lượng), bộ lọc thuộc tính kỹ thuật và luồng giỏ hàng/thanh toán mượt mà.",
            "Tối ưu hóa tốc độ tải trang Core Web Vitals, nén ảnh WebP và cấu hình bộ nhớ đệm giúp website tải dưới 1.5s.",
            "Thiết kế banner chương trình khuyến mãi, logo và icon thông số kỹ thuật (chip, pin, camera) chuẩn vector bằng Illustrator."
          ],
          en: [
            "Architected and coded the entire custom WordPress theme from scratch using clean PHP templates, modular CSS3, and lightweight JavaScript.",
            "Integrated WooCommerce with variable products (colors, storage options), specification filtering, and frictionless checkout flows.",
            "Optimized Core Web Vitals with WebP asset pipelines and caching, achieving sub-1.5s load times.",
            "Designed promotional banners and vector spec iconography using Adobe Illustrator & Photoshop."
          ]
        },
        features: [
          {
            name: { vi: "Danh mục & Bộ lọc Điện thoại thông minh", en: "Dynamic Smartphone Catalog & Filtering" },
            desc: { vi: "Phân loại theo hãng (Apple, Samsung, Xiaomi...), lọc theo khoảng giá và tìm kiếm từ khóa tức thì.", en: "Categorized by brand with price range filtering and instant keyword search." },
            status: "done"
          },
          {
            name: { vi: "Trang chi tiết cấu hình & Biến thể sản phẩm", en: "Detailed Specs & Product Variants" },
            desc: { vi: "Hiển thị thông số kỹ thuật chi tiết, hình ảnh sản phẩm, giá bán và chương trình khuyến mãi.", en: "Displays technical specifications, product galleries, pricing, and active promotions." },
            status: "done"
          },
          {
            name: { vi: "Giỏ hàng AJAX & Luồng đặt hàng (Checkout)", en: "Shopping Cart & Order Checkout" },
            desc: { vi: "Thêm/sửa/xóa sản phẩm trong giỏ hàng, tính tổng tiền tự động và lưu thông tin đơn hàng vào MySQL.", en: "Add/update/remove cart items, auto-calculate totals, and persist customer orders in MySQL." },
            status: "done"
          },
          {
            name: { vi: "Hệ thống Quản trị (Admin CRUD)", en: "Admin Management Panel (CRUD)" },
            desc: { vi: "Quản lý danh sách sản phẩm, cập nhật giá, trạng thái tồn kho và duyệt đơn đặt hàng.", en: "Manage product listings, pricing updates, stock status, and customer order fulfillment." },
            status: "done"
          }
        ],
        challenges: [
          {
            problem: {
              vi: "Truy vấn danh sách sản phẩm kèm nhiều thông tin thương hiệu và khuyến mãi dễ gây chậm trang chủ khi số lượng mẫu máy tăng lên.",
              en: "Querying product listings with related brand and promotion data caused N+1 query overhead on catalog pages."
            },
            solution: {
              vi: "Tối ưu truy vấn dữ liệu trong Laravel kết hợp đánh chỉ mục (Index) các cột tìm kiếm chính trong MySQL và phân trang hợp lý.",
              en: "Optimized database queries in Laravel alongside MySQL indexing on foreign keys and search columns with pagination."
            }
          },
          {
            problem: {
              vi: "Triển khai dự án Laravel lên Shared Hosting cần cấu hình thư mục public và phân quyền storage chuẩn xác.",
              en: "Deploying a Laravel directory structure onto shared hosting required secure public root mapping and storage permissions."
            },
            solution: {
              vi: "Cấu hình chuẩn .htaccess, liên kết symbolic link cho storage và thiết lập biến môi trường .env an toàn trên server sản xuất.",
              en: "Configured custom .htaccess routing rules, storage symlinks, and secured production .env variables."
            }
          }
        ],
        seoPerformance: {
          vi: [
            "Tối ưu URL thân thiện (Slug hóa tên sản phẩm điện thoại: /san-pham/iphone-15-pro-max...).",
            "Chuẩn hóa cấu trúc thẻ Heading H1 cho tên sản phẩm, H2 cho thông số kỹ thuật và đánh giá.",
            "Nén hình ảnh sản phẩm và sử dụng lazy loading cho danh sách sản phẩm dài trên thiết bị di động."
          ],
          en: [
            "Implemented SEO-friendly product slugs (/san-pham/iphone-15-pro-max...).",
            "Structured semantic H1 tags for product titles and H2 tags for technical specifications.",
            "Compressed product thumbnails and enabled native lazy loading for mobile catalog grids."
          ]
        },
        results: [
          { value: "MVC", caption: { vi: "Kiến trúc Laravel rõ ràng, dễ bảo trì", en: "Clean, maintainable Laravel MVC architecture" } },
          { value: "100%", caption: { vi: "Tương thích Mobile & Desktop", en: "Fully responsive across Mobile & Desktop" } },
          { value: "Live", caption: { vi: "Vận hành thực tế trên tên miền riêng", en: "Deployed live on production subdomain" } }
        ]
      }
    },

    {
      slug: "wangsun-luxury",
      title: "WangSun Luxury",
      domain: "vienthammywangsun.com",
      liveUrl: "https://vienthammywangsun.com",
      githubUrl: "https://github.com/UyenPoe",
      categories: ["wordpress", "seo"],
      badge: {
        vi: "WordPress · Flatsome Theme",
        en: "WordPress · Flatsome Theme"
      },
      role: {
        vi: "WordPress Developer (Flatsome Child Theme) · Web Admin · SEO Specialist",
        en: "WordPress Developer (Flatsome Child Theme) · Web Admin · SEO Specialist"
      },
      shortDesc: {
        vi: "Website thương hiệu Viện Thẩm Mỹ WangSun Luxury – Tùy biến chuyên sâu Flatsome Child Theme sang trọng, tối ưu tốc độ tải trang, chuẩn SEO dịch vụ thẩm mỹ.",
        en: "Official brand website for WangSun Luxury Aesthetic Institute — deeply customized Flatsome Child Theme, fast load times, local/service SEO, and lead conversion forms."
      },
      techStack: ["WordPress", "Flatsome Theme (Child Theme)", "UI/UX Web Design", "Adobe Photoshop", "Adobe Illustrator", "On-page & Technical SEO", "Schema JSON-LD", "WebP Optimization"],
      images: {
        hero: "assets/images/projects/wangsun-luxury.webp",
        desktop: "assets/images/projects/wangsun-luxury.webp",
        tablet: "assets/images/projects/wangsun-luxury-tablet.webp",
        mobile: "assets/images/projects/wangsun-luxury-mobile.webp"
      },
      caseStudy: {
        overview: {
          vi: "WangSun Luxury (vienthammywangsun.com) là website chính thức của Viện Thẩm Mỹ WangSun, nơi giới thiệu các công nghệ làm đẹp, đội ngũ chuyên gia và kết quả khách hàng thực tế. Dự án sử dụng nền tảng WordPress kết hợp tùy biến chuyên sâu Child Theme trên Flatsome Theme (theme duy nhất trong hệ thống dùng Flatsome để tối ưu UX Builder và tốc độ dựng trang sang trọng), tối ưu tốc độ tải cực nhanh trên di động và cấu trúc chuẩn SEO dịch vụ thẩm mỹ.",
          en: "WangSun Luxury (vienthammywangsun.com) is the official web presence for WangSun Aesthetic Clinic, showcasing beauty technologies, medical specialists, and client transformations. Built on WordPress with an in-depth custom Flatsome Child Theme (the sole project utilizing Flatsome for its luxury UX Builder layout capabilities), optimized for fast mobile speed and local/service SEO."
        },
        myRole: {
          vi: [
            "Tùy biến chuyên sâu giao diện Flatsome Theme (Child Theme) theo nhận diện thương hiệu WangSun Luxury hoàng gia và quản trị toàn bộ hệ thống Hosting/Domain.",
            "Cấu trúc hóa danh mục dịch vụ thẩm mỹ, landing page chuyển đổi và tích hợp nút gọi nhanh / Zalo / form đăng ký tư vấn.",
            "Thực hiện tối ưu On-page SEO, Technical SEO, khai báo Schema MedicalClinic / LocalBusiness và theo dõi hiệu suất trên Google Search Console."
          ],
          en: [
            "Deeply customized the Flatsome Child Theme to match WangSun Luxury brand guidelines and managed hosting/domain infrastructure.",
            "Structured service landing pages, before/after galleries, and integrated instant call/Zalo/consultation lead capture.",
            "Executed On-page and Technical SEO, deployed MedicalClinic/LocalBusiness Schema, and monitored search performance in GSC."
          ]
        },
        features: [
          {
            name: { vi: "Landing Page Dịch vụ Thẩm mỹ Chuyên sâu", en: "High-Converting Service Landing Pages" },
            desc: { vi: "Trình bày quy trình, ưu điểm công nghệ, hình ảnh Trước - Sau và bảng câu hỏi thường gặp (FAQ).", en: "Showcases treatment steps, technology benefits, Before/After galleries, and structured FAQs." },
            status: "done"
          },
          {
            name: { vi: "Hệ thống Thu thập Lead & Tư vấn Đa kênh", en: "Multi-Channel Lead Capture & CTA" },
            desc: { vi: "Tích hợp form đặt lịch hẹn, nút chat Zalo và gọi hotline nổi thông minh trên Mobile.", en: "Integrated appointment booking forms and sticky mobile Zalo/Hotline action buttons." },
            status: "done"
          },
          {
            name: { vi: "Cấu trúc Tin tức & Kiến thức Làm đẹp chuẩn SEO", en: "SEO-Optimized Beauty Knowledge Hub" },
            desc: { vi: "Tự động tạo mục lục bài viết (Table of Contents), bài viết liên quan và thẻ Schema Article.", en: "Auto-generated Table of Contents, related service links, and Article/FAQ Schema markup." },
            status: "done"
          },
          {
            name: { vi: "Bảo mật & Sao lưu Tự động", en: "Security Hardening & Automated Backups" },
            desc: { vi: "Cấu hình SSL/HTTPS, chống spam bình luận/form và sao lưu dữ liệu định kỳ.", en: "Configured HTTPS/SSL, anti-spam protection on forms, and scheduled off-site backups." },
            status: "done"
          }
        ],
        challenges: [
          {
            problem: {
              vi: "Website ngành thẩm mỹ sử dụng rất nhiều hình ảnh chất lượng cao và banner lớn, dễ làm giảm điểm LCP (Largest Contentful Paint) trên Mobile.",
              en: "High-resolution aesthetic photography and hero banners risked slowing down Mobile LCP (Largest Contentful Paint)."
            },
            solution: {
              vi: "Chuyển đổi toàn bộ ảnh sang định dạng WebP, áp dụng preload cho ảnh Hero chính, trì hoãn (defer) JavaScript không quan trọng và bật bộ nhớ đệm cấp máy chủ.",
              en: "Converted media assets to WebP, preloaded the primary hero image, deferred non-critical JS, and enabled server-level page caching."
            }
          }
        ],
        seoPerformance: {
          vi: [
            "Triển khai Schema JSON-LD cho LocalBusiness, FAQPage và BreadcrumbList.",
            "Cấu hình XML Sitemap tự động cập nhật và tối ưu Robots.txt ngăn thu thập các URL rác tham số.",
            "Tối ưu Meta Title, Meta Description và Open Graph giúp chia sẻ link đẹp mắt trên Zalo và Facebook."
          ],
          en: [
            "Implemented JSON-LD Schema for LocalBusiness, FAQPage, and BreadcrumbList.",
            "Configured dynamic XML Sitemaps and refined Robots.txt to prevent parameter bloat.",
            "Optimized Meta Titles, Descriptions, and Open Graph tags for rich sharing on Zalo and Facebook."
          ]
        },
        results: [
          { value: "WebP", caption: { vi: "100% ảnh dịch vụ tối ưu dung lượng", en: "100% media assets optimized in WebP" } },
          { value: "Chuẩn SEO", caption: { vi: "Index nhanh & hiển thị Rich Snippets", en: "Fast indexing & Rich Snippet eligibility" } },
          { value: "99.9%", caption: { vi: "Hoạt động ổn định, bảo mật SSL", en: "High availability with full SSL security" } }
        ]
      }
    },

    {
      slug: "san-tham-my",
      title: "Sàn Thẩm Mỹ",
      domain: "santhammy.com",
      liveUrl: "https://santhammy.com",
      githubUrl: "https://github.com/UyenPoe",
      categories: ["laravel", "seo", "web"],
      badge: {
        vi: "Laravel · Directory Portal · SEO",
        en: "Laravel · Directory Portal · SEO"
      },
      role: {
        vi: "Laravel Developer · Technical SEO Specialist · Web Admin",
        en: "Laravel Developer · Technical SEO Specialist · Web Admin"
      },
      shortDesc: {
        vi: "Cổng thông tin & sàn tổng hợp các cơ sở thẩm mỹ viện, bệnh viện thẩm mỹ và dịch vụ làm đẹp uy tín, xây dựng trên nền tảng Laravel Framework, tối ưu cấu trúc dữ liệu lớn và SEO tổng thể.",
        en: "Comprehensive directory portal aggregating aesthetic clinics and beauty services built on Laravel Framework, optimized for large-scale data architecture and holistic SEO."
      },
      techStack: ["Laravel Framework", "PHP", "MySQL", "MVC Architecture", "REST API", "Technical SEO", "Schema Markup", "Database Optimization"],
      images: {
        hero: "assets/images/projects/san-tham-my.webp",
        desktop: "assets/images/projects/san-tham-my.webp",
        tablet: "assets/images/projects/san-tham-my-tablet.webp",
        mobile: "assets/images/projects/san-tham-my-mobile.webp"
      },
      caseStudy: {
        overview: {
          vi: "Sàn Thẩm Mỹ (santhammy.com) được định vị là chuyên trang kết nối và tra cứu thông tin về các thẩm mỹ viện, phòng khám và dịch vụ làm đẹp trên toàn quốc. Dự án được phát triển trên nền tảng Laravel Framework với kiến trúc MVC chuẩn mực, đòi hỏi cách tổ chức cơ sở dữ liệu MySQL khoa học (theo Khu vực/Tỉnh thành, Nhóm dịch vụ, Thương hiệu) để người dùng dễ tìm kiếm và công cụ tìm kiếm dễ dàng lập chỉ mục hàng ngàn trang nội dung.",
          en: "San Tham My (santhammy.com) serves as a centralized directory connecting users with verified aesthetic clinics and beauty services nationwide. Engineered on Laravel Framework with structured MVC architecture, the platform required a scalable database taxonomy (by Location, Service Category, and Brand) for both user discovery and large-scale search engine indexation."
        },
        myRole: {
          vi: [
            "Xây dựng kiến trúc backend MVC trên nền tảng Laravel Framework, thiết kế mô hình cơ sở dữ liệu MySQL phân cấp cho danh bạ cơ sở thẩm mỹ.",
            "Tối ưu hệ thống Routing chuẩn SEO, loại bỏ tham số động, xây dựng liên kết nội bộ theo mô hình Topic Cluster giữa bài viết kiến thức và hồ sơ cơ sở thẩm mỹ.",
            "Tối ưu truy vấn cơ sở dữ liệu MySQL, cấu hình caching giúp phản hồi máy chủ TTFB < 0.4s và theo dõi tăng trưởng từ khóa trên Google Search Console."
          ],
          en: [
            "Architected backend MVC structure on Laravel Framework, designing scalable MySQL database models for nationwide clinic directory listings.",
            "Engineered SEO-friendly clean routing, eliminated dynamic query strings, and implemented Topic Cluster internal links connecting beauty guides with clinic profiles.",
            "Optimized MySQL database queries and caching to maintain fast server response TTFB < 0.4s while tracking visibility via Google Search Console."
          ]
        },
        features: [
          {
            name: { vi: "Hệ thống Danh bạ Cơ sở Thẩm mỹ (Laravel Directory)", en: "Aesthetic Clinic Directory System (Laravel)" },
            desc: { vi: "Hồ sơ chi tiết từng viện thẩm mỹ: địa chỉ, dịch vụ thế mạnh, giấy phép, bảng giá tham khảo và đánh giá được tổ chức trên cơ sở dữ liệu phân cấp.", en: "Detailed clinic profiles featuring locations, core services, licensing info, pricing guides, and user reviews organized on structured relational database." },
            status: "done"
          },
          {
            name: { vi: "Phân loại Đa chiều theo Khu vực & Dịch vụ", en: "Multi-Faceted Location & Service Taxonomies" },
            desc: { vi: "Tra cứu nhanh cơ sở làm đẹp theo Quận/Huyện, Tỉnh/Thành phố và nhóm dịch vụ chuyên sâu với bộ định tuyến (Routing) chuẩn SEO.", en: "Filter and browse clinics by city/district and specialized treatment categories via clean SEO-friendly routing." },
            status: "done"
          },
          {
            name: { vi: "Bố cục So sánh & Xếp hạng Top Uy tín", en: "Top-Rated Comparison & Ranking Templates" },
            desc: { vi: "Mẫu bài viết chuẩn hóa cho dạng 'Top N địa chỉ thẩm mỹ...' giúp tăng tỷ lệ nhấp (CTR) và thời gian onsite.", en: "Standardized 'Top N Clinics' templates engineered for high organic CTR and dwell time." },
            status: "done"
          },
          {
            name: { vi: "Bộ lọc Nâng cao AJAX & Caching", en: "Advanced AJAX Multi-Filter & Caching" },
            desc: { vi: "Nâng cấp trải nghiệm lọc kết hợp nhiều tiêu chí nhanh chóng, tối ưu truy vấn không làm nghẽn máy chủ.", en: "Enhancing multi-criteria filtering with optimized database queries and low server overhead." },
            status: "done"
          }
        ],
        challenges: [
          {
            problem: {
              vi: "Website dạng cổng thông tin có hàng ngàn URL phân cấp theo tỉnh thành/quận huyện rất dễ bị trùng lặp nội dung hoặc lãng phí Crawl Budget.",
              en: "Directory portals with thousands of location/service URLs often suffer from thin/duplicate archive pages and crawl budget waste."
            },
            solution: {
              vi: "Xử lý Canonical URL động theo logic phân tầng trong Laravel Controller, loại bỏ URL rác và gắn Schema ItemList / LocalBusiness giúp Googlebot lập chỉ mục 100% trang chính.",
              en: "Generated dynamic Canonical URLs via Laravel Controller logic, eliminated redundant archive parameters, and implemented ItemList / LocalBusiness Schema for 100% clean indexation."
            }
          }
        ],
        seoPerformance: {
          vi: [
            "Xây dựng cấu trúc Silo / Topic Cluster rõ ràng cho từng nhóm dịch vụ thẩm mỹ trên nền tảng Laravel Routing.",
            "Tối ưu hóa Breadcrumbs tự động và Schema ItemList cho các trang danh sách xếp hạng cơ sở thẩm mỹ.",
            "Kiểm soát lỗi 404, xử lý chuyển hướng 301 tự động và tối ưu tốc độ phản hồi máy chủ (TTFB < 0.4s)."
          ],
          en: [
            "Built Silo / Topic Cluster architectures across major aesthetic service verticals using clean Laravel Routing.",
            "Implemented automated BreadcrumbList and ItemList Schema for directory ranking pages.",
            "Monitored 404 logs, automated 301 redirects, and maintained fast server Time to First Byte (TTFB < 0.4s)."
          ]
        },
        results: [
          { value: "Silo SEO", caption: { vi: "Kiến trúc danh mục chuẩn SEO tổng thể", en: "Scalable Silo SEO site architecture" } },
          { value: "Laravel MVC", caption: { vi: "Quản lý dữ liệu cổng thông tin trên Laravel", en: "Structured directory portal on Laravel MVC" } },
          { value: "TTFB < 0.4s", caption: { vi: "Tốc độ phản hồi máy chủ cực nhanh", en: "Ultra-fast server response time" } }
        ]
      }
    },

    {
      slug: "review-lam-dep",
      title: "Review Làm Đẹp",
      domain: "review-lamdep.com",
      liveUrl: "https://review-lamdep.com",
      githubUrl: "https://github.com/UyenPoe",
      categories: ["wordpress", "seo"],
      badge: {
        vi: "WordPress (Tự Code Theme) · Content SEO",
        en: "WordPress (Custom Theme) · Content SEO"
      },
      role: {
        vi: "WordPress Developer (Tự Code Theme) · SEO Specialist",
        en: "WordPress Developer (Custom Theme) · SEO Specialist"
      },
      shortDesc: {
        vi: "Chuyên trang đánh giá dịch vụ làm đẹp và mỹ phẩm chuẩn E-E-A-T với theme tự lập trình siêu nhẹ, tối ưu hóa On-page và tốc độ đọc bài.",
        en: "Beauty & skincare review publication with custom-coded lightweight theme engineered around Google's E-E-A-T guidelines."
      },
      techStack: ["WordPress", "Custom Theme", "UI/UX Web Design", "Adobe Photoshop", "On-page SEO", "E-E-A-T Optimization", "Schema Review & FAQ", "Core Web Vitals"],
      images: {
        hero: "assets/images/projects/review-lam-dep.webp",
        desktop: "assets/images/projects/review-lam-dep.webp",
        tablet: "assets/images/projects/review-lam-dep-tablet.webp",
        mobile: "assets/images/projects/review-lam-dep-mobile.webp"
      },
      caseStudy: {
        overview: {
          vi: "Review Làm Đẹp (review-lamdep.com) là website chuyên cung cấp thông tin đánh giá khách quan về các xu hướng thẩm mỹ, mỹ phẩm và kinh nghiệm làm đẹp. Website sử dụng theme WordPress tự code từ đầu để tối ưu điểm Core Web Vitals, tập trung mạnh vào tiêu chuẩn E-E-A-T của Google, giao diện đọc bài rõ ràng và tốc độ tải trang tức thì.",
          en: "Review Lam Dep (review-lamdep.com) is an editorial beauty review platform with a custom-coded theme from scratch prioritizing Core Web Vitals, Google's E-E-A-T signals, and instant page loads."
        },
        myRole: {
          vi: [
            "Tự lập trình giao diện bài viết chuẩn SEO (Custom WordPress Theme), hộp thông tin tác giả/người kiểm duyệt nội dung (Author Box) tăng độ tin cậy E-E-A-T.",
            "Nghiên cứu từ khóa, lập kế hoạch cấu trúc nội dung (Content Outline) và kiểm duyệt tiêu chuẩn On-page trước khi xuất bản.",
            "Quản trị kỹ thuật WordPress, tối ưu hóa cơ sở dữ liệu và khắc phục các vấn đề thu thập dữ liệu trên Google Search Console."
          ],
          en: [
            "Engineered custom WordPress theme templates for review articles, including Author/Reviewer attribution boxes to reinforce E-E-A-T signals.",
            "Conducted keyword research, structured content outlines, and audited On-page SEO compliance prior to publication.",
            "Maintained WordPress core/plugins, optimized database tables, and resolved indexing issues in Google Search Console."
          ]
        },
        features: [
          {
            name: { vi: "Giao diện Bài viết Đánh giá (Review Layout)", en: "Structured Editorial Review Layout" },
            desc: { vi: "Hộp tóm tắt ưu/nhược điểm, điểm đánh giá, mục lục tự động và bảng so sánh trực quan.", en: "Pros/cons summary boxes, rating badges, automatic Table of Contents, and comparison tables." },
            status: "done"
          },
          {
            name: { vi: "Chuẩn hóa Tín hiệu E-E-A-T", en: "E-E-A-T Trust Signal Integration" },
            desc: { vi: "Hiển thị thông tin người biên tập, ngày cập nhật mới nhất, trang giới thiệu và chính sách biên tập rõ ràng.", en: "Displays author bios, last-updated timestamps, editorial policies, and transparent trust pages." },
            status: "done"
          },
          {
            name: { vi: "Tối ưu Hóa Hình ảnh & Lazy Load", en: "Automated Media Compression & Lazy Load" },
            desc: { vi: "Đảm bảo bài viết dài có nhiều ảnh minh họa vẫn cuộn mượt và đạt điểm CLS = 0.", en: "Ensures image-heavy review articles scroll smoothly with zero Cumulative Layout Shift (CLS)." },
            status: "done"
          }
        ],
        challenges: [
          {
            problem: {
              vi: "Các bài viết review dài thường có nhiều ảnh và bảng biểu, dễ bị vỡ khung trên màn hình điện thoại nhỏ.",
              en: "Long-form review articles with wide comparison tables and multiple images often caused horizontal overflow on small mobile screens."
            },
            solution: {
              vi: "Viết CSS tùy chỉnh cho bảng cuộn ngang mượt mà (responsive table wrapper) và cố định tỷ lệ khung hình (aspect-ratio) cho toàn bộ ảnh trong bài viết.",
              en: "Engineered responsive scrollable table wrappers and enforced explicit image aspect ratios to prevent mobile overflow and layout shifts."
            }
          }
        ],
        seoPerformance: {
          vi: [
            "Tối ưu cấu trúc Heading H1–H3 mạch lạc, giúp Google dễ dàng trích xuất Featured Snippet.",
            "Cấu hình Schema Article, FAQPage và BreadcrumbList đầy đủ.",
            "Loại bỏ CSS/JS dư thừa từ các plugin không cần thiết để giữ DOM gọn nhẹ."
          ],
          en: [
            "Structured logical H1–H3 hierarchies to target Google Featured Snippets.",
            "Deployed Article, FAQPage, and BreadcrumbList JSON-LD structured data.",
            "Dequeued unused plugin CSS/JS assets to keep DOM size and render-blocking resources minimal."
          ]
        },
        results: [
          { value: "E-E-A-T", caption: { vi: "Chuẩn hóa cấu trúc nội dung tin cậy", en: "Standardized trust & editorial signals" } },
          { value: "0 CLS", caption: { vi: "Bố cục ổn định, không nhảy khung hình", en: "Zero layout shift on article pages" } },
          { value: "On-page", caption: { vi: "Tối ưu 100% checklist SEO bài viết", en: "100% On-page SEO checklist compliance" } }
        ]
      }
    },

    {
      slug: "danh-gia-tham-my",
      title: "Đánh Giá Thẩm Mỹ",
      domain: "danhgiathammy.com",
      liveUrl: "https://danhgiathammy.com",
      githubUrl: "https://github.com/UyenPoe",
      categories: ["wordpress", "seo"],
      badge: {
        vi: "WordPress (Tự Code Theme) · SEO",
        en: "WordPress (Custom Theme) · SEO"
      },
      role: {
        vi: "WordPress Developer (Tự Code Theme) · Web Admin · SEO Specialist",
        en: "WordPress Developer (Custom Theme) · Web Admin · SEO Specialist"
      },
      shortDesc: {
        vi: "Nền tảng tổng hợp đánh giá chất lượng dịch vụ thẩm mỹ với theme tự lập trình tối ưu cấu trúc chuyên mục, tốc độ truy cập và quản trị bảo mật.",
        en: "Aesthetic service review and rating portal with custom-coded theme — engineered for fast navigation, structured reviews, and secure hosting operations."
      },
      techStack: ["WordPress", "Custom Theme", "PHP", "Technical SEO", "Sitemap & Robots", "Cloudflare DNS", "Security & Backup"],
      images: {
        hero: "assets/images/projects/danh-gia-tham-my.webp",
        desktop: "assets/images/projects/danh-gia-tham-my.webp",
        tablet: "assets/images/projects/danh-gia-tham-my-tablet.webp",
        mobile: "assets/images/projects/danh-gia-tham-my-mobile.webp"
      },
      caseStudy: {
        overview: {
          vi: "Đánh Giá Thẩm Mỹ (danhgiathammy.com) là chuyên trang cung cấp góc nhìn đa chiều và đánh giá chi tiết về các dịch vụ phẫu thuật thẩm mỹ, nha khoa và chăm sóc da. Website được xây dựng nhằm mang lại nguồn thông tin tham khảo có cấu trúc rõ ràng cho khách hàng trước khi quyết định lựa chọn cơ sở làm đẹp.",
          en: "Danh Gia Tham My (danhgiathammy.com) provides structured evaluations and multi-angle reviews of cosmetic surgery, dental aesthetics, and dermatology services, helping consumers make informed decisions."
        },
        myRole: {
          vi: [
            "Quản trị toàn diện website: cài đặt, cấu hình bảo mật, sao lưu dữ liệu, theo dõi uptime và xử lý sự cố phát sinh.",
            "Tùy biến giao diện trang chủ, trang chuyên mục và mẫu bài viết đánh giá để tối ưu hóa tỷ lệ giữ chân người dùng (Engagement).",
            "Triển khai đồng bộ chiến lược SEO kỹ thuật và liên kết nội bộ thông minh."
          ],
          en: [
            "Managed full website operations: server setup, security hardening, scheduled backups, uptime monitoring, and troubleshooting.",
            "Customized homepage, category archives, and review post templates to maximize reader engagement and lower bounce rates.",
            "Executed technical SEO optimizations and contextual internal linking."
          ]
        },
        features: [
          {
            name: { vi: "Cấu trúc Chuyên mục Thẩm mỹ Chuyên biệt", en: "Specialized Aesthetic Category Hubs" },
            desc: { vi: "Phân chia rõ ràng: Thẩm mỹ Mắt, Mũi, Hàm mặt, Nha khoa, Chăm sóc da & Spa.", en: "Organized into dedicated hubs: Facial Aesthetics, Rhinoplasty, Dental, and Dermatology/Spa." },
            status: "done"
          },
          {
            name: { vi: "Khung Đánh giá Tiêu chí Rõ ràng", en: "Multi-Criteria Evaluation Blocks" },
            desc: { vi: "Trình bày trực quan theo tiêu chí: Cơ sở vật chất, Đội ngũ bác sĩ, Công nghệ và Chi phí.", en: "Visual breakdown across Facilities, Medical Team, Technology, and Cost Transparency." },
            status: "done"
          },
          {
            name: { vi: "Hệ thống Tìm kiếm & Gợi ý Bài viết", en: "Smart Search & Related Content Engine" },
            desc: { vi: "Gợi ý các bài đánh giá cùng khu vực hoặc cùng dịch vụ ở cuối mỗi bài viết.", en: "Recommends relevant regional and service-specific reviews to boost pages per session." },
            status: "done"
          }
        ],
        challenges: [
          {
            problem: {
              vi: "Cần đảm bảo website hoạt động ổn định, chống các cuộc tấn công brute-force vào trang đăng nhập wp-admin và spam bình luận.",
              en: "Needed to protect the portal against automated wp-admin brute-force attacks and comment spam without hurting page speed."
            },
            solution: {
              vi: "Thay đổi đường dẫn đăng nhập mặc định, giới hạn số lần đăng nhập sai, cấu hình tường lửa Cloudflare WAF và lọc spam tự động nhẹ nhàng.",
              en: "Secured login endpoints, enforced rate limiting, configured Cloudflare WAF rules, and deployed lightweight server-side anti-spam filtering."
            }
          }
        ],
        seoPerformance: {
          vi: [
            "Chuẩn hóa thẻ Meta Title, Description, Open Graph và Canonical cho toàn bộ chuyên mục.",
            "Tối ưu tốc độ phản hồi DOM và nén tài nguyên tĩnh (Gzip/Brotli).",
            "Theo dõi và xử lý triệt để các lỗi thu thập dữ liệu trong Google Search Console."
          ],
          en: [
            "Standardized Meta Titles, Descriptions, Open Graph tags, and Canonical URLs site-wide.",
            "Enabled Gzip/Brotli compression and minimized DOM complexity.",
            "Proactively resolved coverage and mobile usability warnings in Google Search Console."
          ]
        },
        results: [
          { value: "Secure", caption: { vi: "Bảo mật nhiều lớp & sao lưu định kỳ", en: "Multi-layer security & automated backups" } },
          { value: "90+", caption: { vi: "Điểm SEO & Accessibility cao", en: "High SEO & Accessibility audit scores" } },
          { value: "Clean UX", caption: { vi: "Điều hướng chuyên mục trực quan", en: "Intuitive category navigation" } }
        ]
      }
    },

    {
      slug: "stone-sinks",
      title: "Stone Sinks Vietnam",
      domain: "stonesinks.vn",
      liveUrl: "https://stonesinks.vn",
      githubUrl: "https://github.com/UyenPoe",
      categories: ["wordpress", "ecommerce", "seo"],
      badge: {
        vi: "WordPress (Tự Code Theme) · WooCommerce",
        en: "WordPress (Custom Theme) · WooCommerce"
      },
      role: {
        vi: "WordPress Developer (Tự Code Theme) · WooCommerce · SEO Specialist",
        en: "WordPress Developer (Custom Theme) · WooCommerce · SEO Specialist"
      },
      shortDesc: {
        vi: "Website thương mại điện tử & catalog trưng bày sản phẩm chậu đá tự nhiên cao cấp (Stone Sinks) tự lập trình theme từ đầu, tối ưu hình ảnh sắc nét và SEO sản phẩm.",
        en: "Luxury natural stone sink e-commerce catalog (stonesinks.vn) with custom-coded theme from scratch, combining high-resolution product presentation with WooCommerce and Product SEO."
      },
      techStack: ["WordPress", "Custom Theme", "WooCommerce", "UI/UX Web Design", "Adobe Photoshop", "Product Schema", "On-page SEO", "WebP High-Res", "Hosting & Domain"],
      images: {
        hero: "assets/images/projects/stone-sinks.webp",
        desktop: "assets/images/projects/stone-sinks.webp",
        tablet: "assets/images/projects/stone-sinks-tablet.webp",
        mobile: "assets/images/projects/stone-sinks-mobile.webp"
      },
      caseStudy: {
        overview: {
          vi: "Stone Sinks (stonesinks.vn) là website thương hiệu và thương mại điện tử chuyên cung cấp các dòng chậu rửa bằng đá tự nhiên thủ công (Lavabo đá cuội, đá cẩm thạch, đá granite, đá onyx) phục vụ resort, biệt thự và xuất khẩu. Dự án yêu cầu giao diện tôn vinh vẻ đẹp mộc mạc nhưng sang trọng của đá tự nhiên, đồng thời tối ưu SEO cho cả từ khóa tiếng Việt và định hướng khách hàng B2B/B2C.",
          en: "Stone Sinks (stonesinks.vn) is an e-commerce and brand showcase for handcrafted natural stone washbasins (river stone, marble, granite, onyx) serving resorts, villas, and export markets. The site balances artisanal luxury aesthetics with WooCommerce catalog management and Product SEO."
        },
        myRole: {
          vi: [
            "Xây dựng và tùy biến hệ thống WordPress + WooCommerce phù hợp với đặc thù sản phẩm nội thất đá tự nhiên.",
            "Cấu trúc hóa danh mục sản phẩm theo chất liệu đá, kiểu dáng và ứng dụng không gian tắm.",
            "Tối ưu hóa SEO hình ảnh (Image SEO), Product Schema và quản trị vận hành kỹ thuật cho tên miền stonesinks.vn."
          ],
          en: [
            "Developed and customized the WordPress + WooCommerce storefront tailored for architectural stone products.",
            "Structured product taxonomies by stone material, basin style, and architectural application.",
            "Executed Image SEO, Product Schema markup, and technical hosting administration for stonesinks.vn."
          ]
        },
        features: [
          {
            name: { vi: "Catalog Sản phẩm WooCommerce Chuyên biệt", en: "Specialized WooCommerce Product Catalog" },
            desc: { vi: "Trình bày chi tiết kích thước, trọng lượng, chất liệu đá, bộ sưu tập ảnh góc chụp thực tế và mã sản phẩm (SKU).", en: "Displays exact dimensions, weight, stone origin, multi-angle galleries, and SKU tracking." },
            status: "done"
          },
          {
            name: { vi: "Tích hợp Đặt hàng & Yêu cầu Báo giá Dự án", en: "Order & B2B Project Quotation Flow" },
            desc: { vi: "Hỗ trợ cả khách mua lẻ trực tiếp và kiến trúc sư / chủ thầu gửi yêu cầu báo giá số lượng lớn.", en: "Supports both retail purchases and B2B bulk quotation requests for architects and contractors." },
            status: "done"
          },
          {
            name: { vi: "Tối ưu SEO Hình ảnh Sản phẩm (Image SEO)", en: "High-Res Product Image SEO" },
            desc: { vi: "Chuẩn hóa tên file, thẻ Alt, kích thước WebP sắc nét giúp sản phẩm xuất hiện nổi bật trên Google Images.", en: "Standardized file naming, descriptive alt attributes, and lossless WebP compression to capture Google Images traffic." },
            status: "done"
          }
        ],
        challenges: [
          {
            problem: {
              vi: "Khách hàng mua chậu đá tự nhiên cần xem ảnh phóng to (Zoom) cực kỳ chi tiết vân đá, nhưng ảnh gốc dung lượng lớn làm trang tải chậm.",
              en: "Buyers needed high-magnification zoom to inspect natural stone veining, but raw high-res photos bloated page size."
            },
            solution: {
              vi: "Sử dụng cơ chế srcset responsive images kết hợp nén WebP chất lượng cao: hiển thị ảnh vừa khít khung nhìn khi duyệt danh mục và chỉ tải ảnh độ phân giải lớn khi người dùng nhấn phóng to.",
              en: "Implemented responsive srcset attributes with high-fidelity WebP compression, loading full-resolution textures on-demand during lightbox zoom."
            }
          }
        ],
        seoPerformance: {
          vi: [
            "Tích hợp Product Schema, Offer và BreadcrumbList chuẩn WooCommerce.",
            "Tối ưu tốc độ tải trang danh mục sản phẩm và cấu trúc URL ngắn gọn, giàu từ khóa.",
            "Đảm bảo hiển thị tương thích hoàn hảo trên iPad/Tablet để đội ngũ kinh doanh trình chiếu trực tiếp cho khách hàng."
          ],
          en: [
            "Integrated WooCommerce Product, Offer, and BreadcrumbList JSON-LD Schema.",
            "Optimized category load speeds and clean, keyword-rich URL slugs.",
            "Perfected Tablet/iPad responsiveness for sales presentations with interior designers."
          ]
        },
        results: [
          { value: "B2B & B2C", caption: { vi: "Đáp ứng cả bán lẻ & báo giá dự án", en: "Supports both retail & B2B project quotes" } },
          { value: "Image SEO", caption: { vi: "Hiển thị sắc nét, tối ưu tìm kiếm hình ảnh", en: "High-clarity visuals optimized for Google Images" } },
          { value: "Woo", caption: { vi: "Quản lý kho & sản phẩm dễ dàng", en: "Streamlined WooCommerce catalog management" } }
        ]
      }
    },
    {
      slug: "cautruc-thietbican-b2b",
      title: "Cầu Trục Thới An & Cân Điện Tử Hoàng Thiên",
      domain: "cautructhoian.vn · hoangthienscale.com",
      liveUrl: "https://cautructhoian.vn",
      githubUrl: "https://github.com/UyenPoe",
      categories: ["web", "seo"],
      badge: {
        vi: "WordPress (Tự Code Theme B2B) · SEO",
        en: "WordPress (Custom Theme B2B) · SEO"
      },
      role: {
        vi: "Senior SEO Specialist & Industrial Web Administrator",
        en: "Senior SEO Specialist & Industrial Web Administrator"
      },
      shortDesc: {
        vi: "Quản trị hệ thống và triển khai chiến dịch SEO B2B tổng thể cho cụm 4 website thiết bị nâng hạ & cân điện tử công nghiệp: cautructhoian.vn, hoangthienscale.com, thoianscale.com, canhoangthien.com. Tự lập trình theme B2B chuẩn SEO, đưa hơn 150+ từ khóa cốt lõi vào Top 1–5 Google.",
        en: "Managed web systems and executed full-scale B2B SEO campaigns across 4 industrial websites (cautructhoian.vn, hoangthienscale.com, thoianscale.com, canhoangthien.com) with custom B2B themes, ranking 150+ core keywords into Google Top 1–5."
      },
      techStack: ["WordPress (Tự Code Theme B2B)", "Technical SEO", "Local SEO Maps", "Schema Markup", "Adobe Photoshop", "Illustrator", "B2B Catalog", "cPanel"],
      images: {
        hero: "assets/images/projects/hoangthien-scale.webp",
        desktop: "assets/images/projects/cautruc-thoian.webp",
        tablet: "assets/images/projects/can-hoangthien.webp",
        mobile: "assets/images/projects/thoian-scale.webp"
      },
      caseStudy: {
        overview: {
          vi: "Dự án quản trị kỹ thuật và triển khai chiến dịch SEO B2B tổng thể cho cụm 2 doanh nghiệp công nghiệp nặng tại Quận 12, TP.HCM: Công ty TNHH Cơ Khí & Thiết Bị Công Nghiệp Thới An (cautructhoian.vn, thoianscale.com) và Công ty TNHH Thiết Bị Công Nghiệp và Tự Động Hóa Hoàng Thiên (hoangthienscale.com, canhoangthien.com). Đặc thù ngành B2B thiết bị công nghiệp đòi hỏi độ chính xác cao về mặt kỹ thuật, nội dung chuẩn xác và tối ưu tìm kiếm địa phương (Local SEO) để tiếp cận các nhà máy, xí nghiệp tại các khu công nghiệp trọng điểm phía Nam.",
          en: "Technical administration and comprehensive B2B SEO execution for two heavy machinery enterprises in District 12, HCMC: Thoi An Mechanical & Industrial Equipment (cautructhoian.vn, thoianscale.com) and Hoang Thien Industrial & Automation Equipment (hoangthienscale.com, canhoangthien.com). B2B SEO required high technical precision and targeted Local SEO for factories across southern industrial parks."
        },
        myRole: {
          vi: [
            "Quy hoạch kiến trúc website, danh mục sản phẩm thiết bị nâng hạ (cầu trục dầm đơn/dầm đôi, cổng trục, bán cổng trục, pa lăng cáp/xích) và cân điện tử (trạm cân xe tải 20-120 tấn, cân sàn, cân bồn, loadcell).",
            "Thực hiện Technical SEO toàn diện: tối ưu Crawl Budget, khắc phục liên kết gãy 404, tối ưu tốc độ tải trang, cấu hình thẻ Canonical và Sitemap.",
            "Tối ưu Local SEO Google Maps / Google My Business tại TP.HCM, nâng cao tỷ lệ hiển thị trên Google Map Pack khu vực các KCN phía Nam.",
            "Trực tiếp chụp ảnh thực tế tại xưởng gia công cơ khí, retouching ảnh lắp dựng cầu trục và trạm cân bằng Photoshop; thiết kế catalogue thông số kỹ thuật bằng Illustrator.",
            "Quản trị hạ tầng máy chủ cPanel, sao lưu cơ sở dữ liệu định kỳ và bảo mật hệ thống vận hành liên tục 5 năm (2017 – 2022)."
          ],
          en: [
            "Structured website taxonomy for lifting machinery (overhead cranes, gantry cranes, hoists) and electronic scales (20-120T truck scales, floor scales, loadcells).",
            "Executed full Technical SEO: crawl budget optimization, fixing 404 errors, load speed acceleration, canonicalization, and XML sitemaps.",
            "Optimized Local SEO / Google Business Profile, dominating Google Map Pack for manufacturing hubs across southern Vietnam.",
            "Captured factory workshop photos, retouched crane/scale installation visuals with Photoshop, and designed technical spec sheets in Illustrator.",
            "Administered cPanel hosting, database backups, and security hardening throughout 5 years (2017–2022)."
          ]
        },
        features: [
          {
            name: { vi: "Hệ thống Danh mục Thiết bị Nâng hạ & Cân B2B", en: "B2B Lifting Machinery & Scale Catalog" },
            desc: { vi: "Phân cấp danh mục khoa học theo tải trọng (1T-50T), khẩu độ dầm, thông số kỹ thuật chi tiết giúp khách hàng doanh nghiệp dễ dàng tra cứu.", en: "Hierarchical classification by capacity (1T-50T), span width, and technical specs for enterprise procurement." },
            status: "done"
          },
          {
            name: { vi: "Tối ưu Local SEO Google Maps cho Nhà Xưởng", en: "Local SEO Google Maps for Industrial Workshops" },
            desc: { vi: "Xác minh và tối ưu hồ sơ Google Business Profile tại KDC Thới An, Quận 12; thu hút khách hàng tìm kiếm dịch vụ cơ khí & lắp đặt trạm cân tại chỗ.", en: "Verified and optimized Google Business Profiles in District 12, driving factory inquiries and localized inbound calls." },
            status: "done"
          },
          {
            name: { vi: "Ấn phẩm Catalogue & Bản vẽ Thông số Kỹ thuật", en: "Digital Spec Catalog & Technical Drawings" },
            desc: { vi: "Thiết kế bộ ấn phẩm catalogue sản phẩm, tài liệu hồ sơ chào thầu sắc nét bằng Illustrator & Photoshop, tích hợp bản xem PDF tải về nhanh.", en: "Designed crisp downloadable product catalogs and tender proposal documents using Illustrator & Photoshop." },
            status: "done"
          },
          {
            name: { vi: "Hạ tầng Vận hành Bền vững 5 Năm", en: "5-Year High Availability Web Infrastructure" },
            desc: { vi: "Quản trị cPanel, sao lưu tự động định kỳ, duy trì uptime trên 99.9% cho cả 4 website công nghiệp suốt giai đoạn 2017 - 2022.", en: "Maintained >99.9% uptime with automated database backups across all 4 industrial websites throughout 2017–2022." },
            status: "done"
          }
        ],
        challenges: [
          {
            problem: {
              vi: "Ngành thiết bị cơ khí công nghiệp nặng có chu kỳ mua hàng dài, khách hàng B2B đòi hỏi thông số kỹ thuật khắt khe và độ tin cậy tuyệt đối trước khi liên hệ.",
              en: "Heavy industrial equipment involves long procurement cycles, demanding high technical accuracy and proven credibility."
            },
            solution: {
              vi: "Xây dựng các trang nội dung chuyên sâu với hình ảnh công trình thực tế, bảng thông số kỹ thuật tiêu chuẩn TCVN/ISO, bảng giá ước tính và chứng chỉ xuất xứ linh kiện rõ ràng.",
              en: "Created in-depth product pages showcasing actual on-site installation photos, TCVN/ISO standard spec tables, and clear component origin certifications."
            }
          }
        ],
        seoPerformance: {
          vi: [
            "Đưa hơn 150+ từ khóa cốt lõi (cầu trục dầm đơn, cầu trục dầm đôi, cổng trục, trạm cân xe tải, cân sàn điện tử, loadcell...) vào Top 1–5 Google.",
            "Duy trì thứ hạng ổn định liên tục qua nhiều bản cập nhật thuật toán lớn của Google từ 2017 đến 2022.",
            "Tỷ lệ truy cập tự nhiên (Organic Traffic) mang lại 80% số lượng khách hàng liên hệ báo giá làm cầu trục và trạm cân xe tải mới."
          ],
          en: [
            "Ranked 150+ core keywords (overhead cranes, gantry cranes, truck scales, floor scales, loadcells) into Google Top 1–5.",
            "Maintained ranking resilience across numerous Google Core Algorithm updates from 2017 to 2022.",
            "Organic Search delivered 80% of new inbound quotation requests for crane systems and truck scale installations."
          ]
        },
        results: [
          { value: "150+ Top", caption: { vi: "Từ khóa thiết bị công nghiệp Top 1-5", en: "Industrial keywords in Top 1-5" } },
          { value: "5 Năm", caption: { vi: "Duy trì thứ hạng bền vững 2017 - 2022", en: "Sustained high rankings 2017 - 2022" } },
          { value: "4 Sites", caption: { vi: "Quản trị & tối ưu đồng bộ 4 website B2B", en: "Simultaneously managed 4 B2B websites" } }
        ]
      }
    }
  ]
};
