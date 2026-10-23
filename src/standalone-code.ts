// Standalone HTML template that matches the design exactly in a single file with embedded CSS and photos
export const standaloneHtmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MaintenanceUK | All-in-One UK Property Maintenance & Repairs</title>
  <meta name="description" content="Certified, fully insured property maintenance across the UK. Plumbing, electrical, handyman, and commercial facilities with rapid response.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
  <style>
    /* Reset & Design Tokens */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    :root {
      --primary: #0F172A;       /* Deep UK Navy */
      --primary-light: #1E293B; /* Slate Navy */
      --accent: #EA580C;        /* High-converting British Amber / Warm Orange */
      --accent-hover: #C2410C;
      --accent-soft: #FFEDD5;
      --emerald: #059669;       /* Verified Trust Green */
      --slate-50: #F8FAFC;
      --slate-100: #F1F5F9;
      --slate-200: #E2E8F0;
      --slate-300: #CBD5E1;
      --slate-600: #475569;
      --slate-700: #334155;
      --slate-900: #0F172A;
      --font-body: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      --font-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      --max-width: 1200px;
    }

    body {
      font-family: var(--font-body);
      color: var(--slate-700);
      background-color: var(--slate-50);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }

    h1, h2, h3, h4, .font-heading {
      font-family: var(--font-heading);
      color: var(--slate-900);
      letter-spacing: -0.025em;
      line-height: 1.2;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .container {
      max-width: var(--max-width);
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* Announcement Bar */
    .announcement-bar {
      background: #0B1120;
      color: #94A3B8;
      font-size: 0.75rem;
      padding: 0.45rem 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .announcement-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    /* Top Bar */
    .top-bar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255, 255, 255, 0.96);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--slate-200);
    }
    .top-bar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      gap: 2rem;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: 1.35rem;
      color: var(--primary);
      white-space: nowrap;
    }
    .brand-badge {
      background: var(--accent);
      color: white;
      font-size: 0.75rem;
      padding: 0.15rem 0.45rem;
      border-radius: 4px;
      font-weight: 700;
      letter-spacing: 0.05em;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 1.75rem;
      list-style: none;
    }
    .nav-links a {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--slate-600);
      transition: color 0.15s ease;
      white-space: nowrap;
    }
    .nav-links a:hover {
      color: var(--primary);
    }
    .top-action {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      white-space: nowrap;
    }
    .phone-link {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-weight: 700;
      font-size: 0.95rem;
      color: var(--primary);
    }
    .btn-primary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      background: var(--accent);
      color: #fff;
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: background-color 0.15s ease, transform 0.1s ease;
      white-space: nowrap;
    }
    .btn-primary:hover {
      background: var(--accent-hover);
      transform: translateY(-1px);
    }
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem;
      background: #fff;
      color: var(--primary);
      font-weight: 600;
      font-size: 0.95rem;
      border-radius: 8px;
      border: 1px solid var(--slate-200);
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .btn-secondary:hover {
      background: var(--slate-50);
      border-color: var(--slate-300);
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
      padding: 4.5rem 0 3.5rem 0;
      border-bottom: 1px solid var(--slate-200);
    }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 3.5rem;
      align-items: center;
    }
    .hero-meta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 1rem;
      background: #FFF7ED;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      border: 1px solid #FFEDD5;
    }
    .hero-title {
      font-size: clamp(2.25rem, 4vw, 3.5rem);
      font-weight: 800;
      line-height: 1.15;
      margin-bottom: 1.25rem;
      text-wrap: balance;
    }
    .hero-desc {
      font-size: 1.125rem;
      color: var(--slate-600);
      margin-bottom: 2rem;
      max-width: 580px;
    }
    .hero-ctas {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2.5rem;
    }
    .hero-trust-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid var(--slate-200);
      font-size: 0.85rem;
      color: var(--slate-600);
    }
    .hero-trust-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      color: var(--slate-900);
    }

    /* Photo Containers */
    .photo-card {
      position: relative;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid var(--slate-200);
      box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.08);
      background: #0F172A;
    }
    .photo-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.3s ease;
    }
    .photo-card:hover img {
      transform: scale(1.02);
    }
    .photo-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      z-index: 10;
      background: rgba(15, 23, 42, 0.85);
      color: #FBBF24;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0.25rem 0.6rem;
      border-radius: 4px;
      border: 1px solid rgba(251, 191, 36, 0.3);
      backdrop-filter: blur(4px);
    }
    .photo-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%);
      pointer-events: none;
    }
    .photo-caption {
      position: absolute;
      bottom: 14px;
      left: 16px;
      right: 16px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.85rem;
    }

    /* Quick Quote Box */
    .quote-card {
      background: #FFFFFF;
      border: 1px solid var(--slate-200);
      border-radius: 12px;
      padding: 1.75rem;
      box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05);
      margin-top: 1.5rem;
    }
    .quote-card-header {
      margin-bottom: 1.25rem;
    }
    .quote-card-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .quote-card-sub {
      font-size: 0.875rem;
      color: var(--slate-600);
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .form-label {
      display: block;
      font-size: 0.825rem;
      font-weight: 600;
      color: var(--slate-700);
      margin-bottom: 0.35rem;
    }
    .form-input, .form-select {
      width: 100%;
      padding: 0.65rem 0.85rem;
      font-family: inherit;
      font-size: 0.925rem;
      border: 1px solid var(--slate-200);
      border-radius: 6px;
      background: var(--slate-50);
      outline: none;
      transition: border-color 0.15s ease, background 0.15s ease;
    }
    .form-input:focus, .form-select:focus {
      border-color: var(--primary);
      background: #fff;
    }

    /* Accreditations Strip */
    .trust-strip {
      background: var(--primary);
      color: #fff;
      padding: 1.5rem 0;
    }
    .trust-strip-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;
    }
    .trust-badge {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .trust-badge-icon {
      width: 38px;
      height: 38px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.85rem;
      color: var(--accent);
    }
    .trust-badge-text strong {
      display: block;
      font-size: 0.9rem;
      letter-spacing: -0.01em;
    }
    .trust-badge-text span {
      font-size: 0.75rem;
      color: #94A3B8;
    }

    /* Section Structure */
    .section {
      padding: 5rem 0;
    }
    .section-header {
      text-align: center;
      max-width: 680px;
      margin: 0 auto 3.5rem auto;
    }
    .section-kicker {
      font-size: 0.85rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--accent);
      margin-bottom: 0.5rem;
    }
    .section-title {
      font-size: 2.25rem;
      font-weight: 800;
      margin-bottom: 1rem;
    }
    .section-desc {
      font-size: 1.05rem;
      color: var(--slate-600);
    }

    /* Services Grid with Photos */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
      gap: 2rem;
    }
    .service-card {
      background: #FFFFFF;
      border: 1px solid var(--slate-200);
      border-radius: 14px;
      overflow: hidden;
      transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
      display: flex;
      flex-direction: column;
    }
    .service-card:hover {
      transform: translateY(-4px);
      border-color: var(--slate-300);
      box-shadow: 0 12px 24px -6px rgba(15, 23, 42, 0.08);
    }
    .service-photo-wrap {
      height: 180px;
      position: relative;
      background: #1E293B;
      overflow: hidden;
    }
    .service-photo-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .service-body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
    .service-title {
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .service-desc {
      font-size: 0.925rem;
      color: var(--slate-600);
      margin-bottom: 1.25rem;
      flex-grow: 1;
    }
    .service-features {
      list-style: none;
      margin-bottom: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid var(--slate-100);
      font-size: 0.85rem;
    }
    .service-features li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.4rem;
      color: var(--slate-700);
    }
    .service-features li::before {
      content: "✓";
      color: var(--emerald);
      font-weight: 700;
    }
    .service-link {
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--accent);
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }

    /* About Section */
    .about-wrap {
      background: #FFFFFF;
      border: 1px solid var(--slate-200);
      border-radius: 16px;
      padding: 3.5rem;
    }
    .about-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 3.5rem;
      align-items: center;
    }
    .about-stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
    .stat-card {
      background: var(--slate-50);
      border: 1px solid var(--slate-200);
      border-radius: 10px;
      padding: 1.5rem;
    }
    .stat-number {
      font-family: var(--font-heading);
      font-size: 2.25rem;
      font-weight: 800;
      color: var(--primary);
      margin-bottom: 0.25rem;
      font-variant-numeric: tabular-nums;
    }
    .stat-label {
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--slate-600);
    }

    /* Why Choose Us */
    .why-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1.75rem;
    }
    .why-card {
      background: #FFFFFF;
      border: 1px solid var(--slate-200);
      border-radius: 12px;
      padding: 2rem;
    }
    .why-index {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--accent);
      margin-bottom: 0.75rem;
    }
    .why-title {
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .why-desc {
      font-size: 0.9rem;
      color: var(--slate-600);
    }

    /* Contact Section */
    .contact-card {
      background: #FFFFFF;
      border: 1px solid var(--slate-200);
      border-radius: 16px;
      overflow: hidden;
      display: grid;
      grid-template-columns: 1fr 1.2fr;
    }
    .contact-info-panel {
      background: var(--primary);
      color: #fff;
      padding: 3.5rem 3rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .contact-info-panel h3 {
      color: #fff;
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }
    .contact-info-panel p {
      color: #94A3B8;
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }
    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      font-size: 0.95rem;
    }
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .contact-item strong {
      color: #fff;
    }
    .contact-form-panel {
      padding: 3.5rem;
    }

    /* Reviews Section */
    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.75rem;
    }
    .review-card {
      background: #FFFFFF;
      border: 1px solid var(--slate-200);
      border-radius: 14px;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .reviewer-meta {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid var(--slate-100);
    }
    .reviewer-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 1px solid var(--slate-200);
    }

    /* Footer */
    footer {
      background: #0B1120;
      color: #94A3B8;
      padding: 4rem 0 2rem 0;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.875rem;
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 1.5fr repeat(3, 1fr);
      gap: 3rem;
      margin-bottom: 3.5rem;
    }
    .footer-col h4 {
      color: #fff;
      font-size: 0.95rem;
      font-weight: 700;
      margin-bottom: 1.25rem;
    }
    .footer-links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .footer-links a:hover {
      color: #fff;
    }
    .footer-bottom {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      font-size: 0.8rem;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .hero-grid, .about-grid, .contact-card {
        grid-template-columns: 1fr;
      }
      .nav-links {
        display: none;
      }
      .footer-grid {
        grid-template-columns: 1fr 1fr;
      }
      .about-wrap, .contact-form-panel {
        padding: 2rem;
      }
    }
    @media (max-width: 600px) {
      .footer-grid {
        grid-template-columns: 1fr;
      }
      .about-stats-grid {
        grid-template-columns: 1fr;
      }
      .top-action .phone-link {
        display: none;
      }
    }
  </style>
</head>
<body>

  <!-- Announcement Bar -->
  <div class="announcement-bar">
    <div class="container announcement-inner">
      <div>✓ UK-Wide 24/7 Rapid Emergency Response Active · Average dispatch: <strong>45–60 mins</strong></div>
      <div>Helpline: <strong style="color: #fff;">0800 456 7890</strong> · Gas Safe Reg #618923</div>
    </div>
  </div>

  <!-- Top Bar Contract -->
  <header class="top-bar">
    <div class="container top-bar-inner">
      <a href="#" class="brand">
        Maintenance<span style="color: var(--accent);">UK</span>
        <span class="brand-badge">24/7</span>
      </a>

      <nav class="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#why-us">Why Choose Us</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>

      <div class="top-action">
        <a href="tel:08004567890" class="phone-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          0800 456 7890
        </a>
        <a href="#contact" class="btn-primary">Get a Free Quote</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-grid">
        <div>
          <div class="hero-meta">
            ★ Rated 4.9/5 by 1,800+ UK Property Owners
          </div>
          <h1 class="hero-title">
            Premium Property Maintenance & Emergency Repairs Across the UK
          </h1>
          <p class="hero-desc">
            The single trusted partner for UK homeowners, landlords, and commercial estate managers. Gas Safe, NICEIC certified engineers with guaranteed 60-minute emergency dispatch.
          </p>
          <div class="hero-ctas">
            <a href="#contact" class="btn-primary" style="padding: 0.9rem 1.8rem; font-size: 1rem;">
              Get a Free Quote
            </a>
            <a href="tel:08004567890" class="btn-secondary" style="padding: 0.9rem 1.8rem; font-size: 1rem;">
              Emergency Callout
            </a>
          </div>

          <div class="hero-trust-row">
            <div class="hero-trust-item">
              <span style="color: var(--emerald);">✓</span> £5M Public Liability
            </div>
            <div class="hero-trust-item">
              <span style="color: var(--emerald);">✓</span> Gas Safe & NICEIC
            </div>
            <div class="hero-trust-item">
              <span style="color: var(--emerald);">✓</span> 60-Min Emergency SLA
            </div>
            <div class="hero-trust-item">
              <span style="color: var(--emerald);">✓</span> No Hidden Callout Fees
            </div>
          </div>
        </div>

        <!-- Right Side: Hero Photo & Quick Rate Box -->
        <div>
          <div class="photo-card" style="height: 250px;">
            <span class="photo-badge">Vetted & Gas Safe</span>
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Professional UK Maintenance Engineer and Fleet Van"
              referrerpolicy="no-referrer"
              onerror="this.style.display='none';"
            />
            <div class="photo-overlay"></div>
            <div class="photo-caption">
              <div>
                <strong>UK Fleet Response</strong><br>
                <span style="font-size: 0.75rem; color: #cbd5e1;">London · Midlands · North West · Scotland</span>
              </div>
              <span style="background: var(--emerald); padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem;">
                60-Min SLA
              </span>
            </div>
          </div>

          <!-- Quick Quote Box -->
          <div class="quote-card">
            <div class="quote-card-header">
              <h3 class="quote-card-title">Instant Maintenance Quote</h3>
              <p class="quote-card-sub">Fixed transparent rates with no obligation.</p>
            </div>
            <form onsubmit="event.preventDefault(); alert('Thank you! Reference #MUK-84920 generated. Our local dispatch manager will call you within 15 minutes.');">
              <div class="form-group">
                <label class="form-label">Service Required</label>
                <select class="form-select" required>
                  <option value="plumbing">Plumbing & Heating (Boiler, Leaks)</option>
                  <option value="electrical">Electrical & Rewiring (EICR, Fuse Box)</option>
                  <option value="handyman">General Handyman & Carpentry</option>
                  <option value="commercial">Commercial Estate Facilities</option>
                  <option value="emergency">Emergency Rapid Response</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">UK Postcode</label>
                <input type="text" class="form-input" placeholder="e.g. SW1A 1AA or M1 1AE" required>
              </div>
              <button type="submit" class="btn-primary" style="width: 100%; padding: 0.85rem;">
                Calculate Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Accreditations Strip -->
  <section class="trust-strip">
    <div class="container trust-strip-inner">
      <div class="trust-badge">
        <div class="trust-badge-icon">GS</div>
        <div class="trust-badge-text">
          <strong>Gas Safe Register</strong>
          <span>Reg. #618923</span>
        </div>
      </div>
      <div class="trust-badge">
        <div class="trust-badge-icon">NI</div>
        <div class="trust-badge-text">
          <strong>NICEIC Approved</strong>
          <span>Domestic & Commercial</span>
        </div>
      </div>
      <div class="trust-badge">
        <div class="trust-badge-icon">TM</div>
        <div class="trust-badge-text">
          <strong>TrustMark Endorsed</strong>
          <span>Govt Quality Scheme</span>
        </div>
      </div>
      <div class="trust-badge">
        <div class="trust-badge-icon">SC</div>
        <div class="trust-badge-text">
          <strong>SafeContractor</strong>
          <span>Health & Safety Verified</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Grid with Photos -->
  <section id="services" class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-kicker">Our Comprehensive Trades</div>
        <h2 class="section-title">All-in-One Property Maintenance Services</h2>
        <p class="section-desc">
          From scheduled preventative care to 24/7 emergency callouts, our fully licensed engineers handle every aspect of property maintenance.
        </p>
      </div>

      <div class="services-grid">
        <!-- Service 1: Plumbing -->
        <div class="service-card">
          <div class="service-photo-wrap">
            <span class="photo-badge">Gas Safe #618923</span>
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80"
              alt="Plumbing and Heating Services"
              referrerpolicy="no-referrer"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="service-body">
            <h3 class="service-title">Plumbing & Heating</h3>
            <p class="service-desc">
              Gas Safe registered engineers for boiler breakdowns, radiator power flushes, leak repairs, and CP12 landlord gas certificates.
            </p>
            <ul class="service-features">
              <li>Boiler repairs & annual servicing</li>
              <li>Emergency burst pipe repairs</li>
              <li>Landlord Gas Safety (CP12)</li>
              <li>Bathroom installs & unblocking</li>
            </ul>
            <a href="#contact" class="service-link">Book Plumber →</a>
          </div>
        </div>

        <!-- Service 2: Electrical -->
        <div class="service-card">
          <div class="service-photo-wrap">
            <span class="photo-badge">NICEIC 18th Edition</span>
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
              alt="Electrical and Rewiring Services"
              referrerpolicy="no-referrer"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="service-body">
            <h3 class="service-title">Electrical & Rewiring</h3>
            <p class="service-desc">
              NICEIC certified electricians delivering residential and commercial electrical testing, installations, and fault clearance.
            </p>
            <ul class="service-features">
              <li>EICR landlord certificates</li>
              <li>Consumer unit / fuse box upgrades</li>
              <li>Lighting design & LED retrofits</li>
              <li>Emergency electrical fault-finding</li>
            </ul>
            <a href="#contact" class="service-link">Book Electrician →</a>
          </div>
        </div>

        <!-- Service 3: Handyman -->
        <div class="service-card">
          <div class="service-photo-wrap">
            <span class="photo-badge">Multi-Trade Guild</span>
            <img
              src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&w=800&q=80"
              alt="General Handyman and Carpentry"
              referrerpolicy="no-referrer"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="service-body">
            <h3 class="service-title">General Handyman</h3>
            <p class="service-desc">
              Skilled multi-trade specialists for general repairs, carpentry, painting, tiling, lock changes, and tenant move-in refreshes.
            </p>
            <ul class="service-features">
              <li>Door hanging & lock replacements</li>
              <li>Drywall repairs & interior painting</li>
              <li>Silicone resealing & regrouting</li>
              <li>Flatpack assembly & hanging fixtures</li>
            </ul>
            <a href="#contact" class="service-link">Book Handyman →</a>
          </div>
        </div>

        <!-- Service 4: Commercial Maintenance -->
        <div class="service-card">
          <div class="service-photo-wrap">
            <span class="photo-badge">SafeContractor</span>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
              alt="Commercial Facilities Management"
              referrerpolicy="no-referrer"
              onerror="this.style.display='none';"
            />
          </div>
          <div class="service-body">
            <h3 class="service-title">Commercial Maintenance</h3>
            <p class="service-desc">
              Bespoke facilities management for retail units, corporate offices, and property management portfolios with SLA-backed response.
            </p>
            <ul class="service-features">
              <li>Planned Preventative Maintenance (PPM)</li>
              <li>Statutory compliance management</li>
              <li>Dedicated key account manager</li>
              <li>Priority 24/7 disaster recovery</li>
            </ul>
            <a href="#contact" class="service-link">Enquire Commercial →</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- About Us Section -->
  <section id="about" class="section" style="background: var(--slate-100);">
    <div class="container">
      <div class="about-wrap">
        <div class="about-grid">
          <div>
            <div class="section-kicker">About MaintenanceUK</div>
            <h2 class="section-title">Reliable, Fully Insured Property Care You Can Count On</h2>
            <p style="font-size: 1.05rem; color: var(--slate-600); margin-bottom: 1.5rem;">
              Founded to eliminate the frustration of unreliable trades, MaintenanceUK provides homeowners, estate agents, and commercial facility managers with a single accountable partner.
            </p>
            <p style="font-size: 0.95rem; color: var(--slate-600); margin-bottom: 2rem;">
              Every engineer on our roster is vetted, background-checked, and carries £5,000,000 in public liability coverage. Whether fixing a late-night leak in Kensington or managing facilities across nationwide multi-site portfolios, our transparent pricing and 60-minute dispatch standard ensure total peace of mind.
            </p>
            <div style="display: flex; gap: 1rem;">
              <a href="#contact" class="btn-primary">Speak With an Advisor</a>
              <a href="#why-us" class="btn-secondary">Our Standards</a>
            </div>
          </div>

          <div class="photo-card" style="height: 340px;">
            <span class="photo-badge">Certified Field Engineers</span>
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80"
              alt="MaintenanceUK qualified engineer on site"
              referrerpolicy="no-referrer"
              onerror="this.style.display='none';"
            />
            <div class="photo-overlay"></div>
            <div class="photo-caption">
              <div>
                <strong>Uniformed & Vetted Operatives</strong><br>
                <span style="font-size: 0.75rem; color: #cbd5e1;">Gas Safe #618923 · NICEIC Approved</span>
              </div>
              <span style="background: var(--accent); padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 700; font-size: 0.75rem;">
                £5M Cover
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section id="why-us" class="section">
    <div class="container">
      <div class="section-header">
        <div class="section-kicker">Why Property Owners Choose Us</div>
        <h2 class="section-title">The Gold Standard in UK Property Care</h2>
        <p class="section-desc">
          We combine local, trusted tradespeople with enterprise-grade operational management and transparent British accountability.
        </p>
      </div>

      <div class="why-grid">
        <div class="why-card">
          <div class="why-index">01. TRANSPARENCY</div>
          <h3 class="why-title">No Hidden Callout Charges</h3>
          <p class="why-desc">
            You receive clear upfront pricing before work begins. No inflated travel fees, no surprises, and fully itemised VAT receipts for easy tax filing.
          </p>
        </div>

        <div class="why-card">
          <div class="why-index">02. ACCREDITED</div>
          <h3 class="why-title">Certified Local Trades</h3>
          <p class="why-desc">
            All trades are vetted, insured, Gas Safe registered, and NICEIC approved. Our local vans carry standard parts for first-visit resolution.
          </p>
        </div>

        <div class="why-card">
          <div class="why-index">03. GUARANTEE</div>
          <h3 class="why-title">100% Satisfaction Guarantee</h3>
          <p class="why-desc">
            Every repair is covered by our comprehensive 12-month workmanship guarantee. If anything is imperfect, our team returns and corrects it at zero charge.
          </p>
        </div>

        <div class="why-card">
          <div class="why-index">04. RESPONSIVE</div>
          <h3 class="why-title">24/7 Rapid Response</h3>
          <p class="why-desc">
            Property emergencies do not wait for business hours. Our UK dispatch center operates 24/7/365 with tracked arrival times directly to your mobile.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Reviews Section with Photos -->
  <section id="reviews" class="section" style="background: var(--slate-100);">
    <div class="container">
      <div class="section-header">
        <div class="section-kicker">Client Feedback</div>
        <h2 class="section-title">Trusted by UK Homeowners & Landlords</h2>
        <p class="section-desc">
          Rated 4.9/5 by over 1,840 verified property owners and facility managers across the UK.
        </p>
      </div>

      <div class="reviews-grid">
        <div class="review-card">
          <p style="font-size: 0.95rem; font-style: italic; color: var(--slate-600); margin-bottom: 1rem;">
            "MaintenanceUK handles all my landlord certificates and tenant repair tickets. When a boiler failed in winter, an engineer was on site in 48 minutes with Vaillant parts in the van."
          </p>
          <div class="reviewer-meta">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" alt="Marcus Vance" class="reviewer-avatar" referrerpolicy="no-referrer">
            <div>
              <strong style="color: var(--slate-900); display: block; font-size: 0.9rem;">Marcus Vance</strong>
              <span style="font-size: 0.75rem; color: var(--slate-600);">Private Landlord (14 Units) · Manchester</span>
            </div>
          </div>
        </div>

        <div class="review-card">
          <p style="font-size: 0.95rem; font-style: italic; color: var(--slate-600); margin-bottom: 1rem;">
            "Finding reliable trades in South West London used to be impossible. MaintenanceUK gave a fixed upfront price to upgrade our fuse box and rewire the kitchen. Finished cleanly on time."
          </p>
          <div class="reviewer-meta">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="Eleanor Campbell" class="reviewer-avatar" referrerpolicy="no-referrer">
            <div>
              <strong style="color: var(--slate-900); display: block; font-size: 0.9rem;">Eleanor Campbell</strong>
              <span style="font-size: 0.75rem; color: var(--slate-600);">Homeowner · Richmond, London</span>
            </div>
          </div>
        </div>

        <div class="review-card">
          <p style="font-size: 0.95rem; font-style: italic; color: var(--slate-600); margin-bottom: 1rem;">
            "We retained MaintenanceUK for PPM across 4 storefronts. Response times and compliance paperwork are exemplary. Having one contact saves us 15 hours every month."
          </p>
          <div class="reviewer-meta">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80" alt="Alistair Hughes" class="reviewer-avatar" referrerpolicy="no-referrer">
            <div>
              <strong style="color: var(--slate-900); display: block; font-size: 0.9rem;">Alistair Hughes</strong>
              <span style="font-size: 0.75rem; color: var(--slate-600);">Operations Director · Birmingham</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <div class="container">
      <div class="contact-card">
        <!-- Info Column -->
        <div class="contact-info-panel">
          <div>
            <h3>Get in Touch With Our UK Dispatch Team</h3>
            <p>
              Request a free upfront quotation or book an emergency technician. Available 24 hours a day, 7 days a week.
            </p>
            <div class="contact-details">
              <div class="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <div>
                  <span style="font-size: 0.8rem; color: #94A3B8; display: block;">Emergency Hotline</span>
                  <strong>0800 456 7890</strong>
                </div>
              </div>
              <div class="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                <div>
                  <span style="font-size: 0.8rem; color: #94A3B8; display: block;">Email Enquiries</span>
                  <strong>enquiries@maintenanceuk.com</strong>
                </div>
              </div>
              <div class="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div>
                  <span style="font-size: 0.8rem; color: #94A3B8; display: block;">Head Office</span>
                  <strong>124 City Road, London, EC1V 2NX</strong>
                </div>
              </div>
            </div>
          </div>
          <div style="font-size: 0.8rem; color: #64748B; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem; margin-top: 2rem;">
            MaintenanceUK Ltd · Registered in England & Wales #09482710
          </div>
        </div>

        <!-- Form Column -->
        <div class="contact-form-panel">
          <h3 style="font-size: 1.5rem; margin-bottom: 0.25rem;">Request Your Free Quote</h3>
          <p style="font-size: 0.875rem; color: var(--slate-600); margin-bottom: 1.5rem;">
            Fill in your details below and a dispatch coordinator will confirm within 15 minutes.
          </p>

          <form onsubmit="event.preventDefault(); alert('Quote Request Received! Reference #MUK-84920. Our local maintenance coordinator will contact you shortly.');">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Full Name</label>
                <input type="text" class="form-input" placeholder="e.g. David Harrison" required>
              </div>
              <div class="form-group">
                <label class="form-label">Phone Number</label>
                <input type="tel" class="form-input" placeholder="07911 123456" required>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Email Address</label>
                <input type="email" class="form-input" placeholder="david@example.co.uk" required>
              </div>
              <div class="form-group">
                <label class="form-label">Postcode / City</label>
                <input type="text" class="form-input" placeholder="e.g. SW1A 1AA / London" required>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div class="form-group">
                <label class="form-label">Trade Required</label>
                <select class="form-select">
                  <option>Plumbing & Heating</option>
                  <option>Electrical & Rewiring</option>
                  <option>General Handyman Repairs</option>
                  <option>Commercial Facilities Management</option>
                  <option>Emergency Service</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Urgency</label>
                <select class="form-select">
                  <option>Emergency (Within 2 Hours)</option>
                  <option>Same Day / Next Day</option>
                  <option>This Week</option>
                  <option>Planning Ahead / Flexible</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Project or Repair Details</label>
              <textarea class="form-input" rows="3" placeholder="Please describe the issue or work needed (e.g. boiler pressure drop, consumer unit replacement, rental turnaround)..."></textarea>
            </div>

            <button type="submit" class="btn-primary" style="width: 100%; padding: 0.85rem; font-size: 1rem;">
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <div class="brand" style="color: #fff; margin-bottom: 1rem;">
            Maintenance<span style="color: var(--accent);">UK</span>
          </div>
          <p style="font-size: 0.875rem; line-height: 1.6; margin-bottom: 1.5rem;">
            The UK's premier property maintenance network. Accredited trades, 24/7 rapid dispatch, and 100% guaranteed workmanship for residential and commercial estates.
          </p>
          <div style="font-size: 0.8rem; color: #64748B;">
            Emergency Hotline: 0800 456 7890 (24 Hours)
          </div>
        </div>

        <div class="footer-col">
          <h4>Core Services</h4>
          <ul class="footer-links">
            <li><a href="#services">Plumbing & Heating</a></li>
            <li><a href="#services">Electrical & NICEIC</a></li>
            <li><a href="#services">Handyman Services</a></li>
            <li><a href="#services">Landlord Safety CP12/EICR</a></li>
            <li><a href="#services">Commercial Maintenance</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Coverage Hubs</h4>
          <ul class="footer-links">
            <li><a href="#">Greater London & South East</a></li>
            <li><a href="#">Birmingham & West Midlands</a></li>
            <li><a href="#">Manchester & North West</a></li>
            <li><a href="#">Leeds & Yorkshire</a></li>
            <li><a href="#">Bristol & South West</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Compliance & Legal</h4>
          <ul class="footer-links">
            <li><a href="#">Gas Safe Reg #618923</a></li>
            <li><a href="#">NICEIC Approved Contractor</a></li>
            <li><a href="#">£5M Insurance Verification</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © 2026 MaintenanceUK Ltd. All rights reserved. MaintenanceUk.com
        </div>
        <div>
          Registered in England & Wales Company No. 09482710 · VAT Reg GB 294 8839 12
        </div>
      </div>
    </div>
  </footer>

</body>
</html>
`;
