(function() {
  // 1. Target head element
  const head = document.head || document.getElementsByTagName('head')[0];

  // 2. Inject FontAwesome icon stylesheet if missing
  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    head.appendChild(fa);
  }

  // 3. Inject standalone CSS styles (Fixes z-index stacking and overflow clipping)
  const styleId = 'wealthlanding-header-fixed-styles';
  let styleTag = document.getElementById(styleId);
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = styleId;
    head.appendChild(styleTag);
  }

  styleTag.textContent = `
    /* Prevent host page CSS from clipping dropdowns */
    #global-header-target,
    .wl-header-root,
    .wl-header-container,
    .wl-header-inner,
    .wl-nav-list,
    .wl-nav-item {
      overflow: visible !important;
      clip-path: none !important;
    }

    #global-header-target {
      position: relative !important;
      z-index: 999999 !important;
      width: 100% !important;
    }

    /* Sticky Dark Navigation Bar */
    .wl-header-root {
      position: sticky !important;
      top: 0 !important;
      z-index: 999999 !important;
      background-color: #0a1128 !important;
      border-bottom: 1px solid #1e293b !important;
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
      box-sizing: border-box !important;
    }
    .wl-header-container {
      max-width: 80rem !important;
      margin: 0 auto !important;
      padding: 0 1rem !important;
    }
    .wl-header-inner {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      height: 5rem !important;
    }

    /* Brand Logo */
    .wl-brand-link {
      display: flex !important;
      align-items: center !important;
      gap: 0.75rem !important;
      text-decoration: none !important;
    }
    .wl-brand-icon {
      width: 2.5rem !important;
      height: 2.5rem !important;
      border-radius: 0.75rem !important;
      background: linear-gradient(to top right, #047857, #059669, #34d399) !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      color: #ffffff !important;
      box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.2) !important;
    }
    .wl-brand-text {
      font-size: 1.25rem !important;
      font-weight: 800 !important;
      color: #ffffff !important;
      letter-spacing: -0.025em !important;
    }
    .wl-brand-accent { color: #34d399 !important; }
    .wl-brand-sub {
      display: block !important;
      font-size: 0.625rem !important;
      font-weight: 600 !important;
      letter-spacing: 0.05em !important;
      color: #94a3b8 !important;
      text-transform: uppercase !important;
      margin-top: -0.25rem !important;
    }

    /* Navigation Items */
    .wl-nav-list {
      display: none !important;
      align-items: center !important;
      gap: 0.25rem !important;
      margin: 0 !important;
      padding: 0 !important;
      list-style: none !important;
    }
    @media (min-width: 1024px) {
      .wl-nav-list { display: flex !important; }
    }

    .wl-nav-item {
      position: relative !important;
      padding: 1.5rem 0 !important;
    }
    .wl-nav-btn, .wl-nav-link-direct {
      display: flex !important;
      align-items: center !important;
      gap: 0.375rem !important;
      padding: 0.5rem 0.75rem !important;
      font-size: 0.875rem !important;
      font-weight: 700 !important;
      color: #f1f5f9 !important;
      background: transparent !important;
      border: none !important;
      border-radius: 0.5rem !important;
      cursor: pointer !important;
      text-decoration: none !important;
      transition: color 0.15s ease, background-color 0.15s ease !important;
    }
    .wl-nav-btn:hover, .wl-nav-link-direct:hover {
      color: #34d399 !important;
      background-color: rgba(30, 41, 59, 0.8) !important;
    }

    /* Mega Dropdown Box Floating ABOVE All Page Content */
    .wl-nav-mega {
      position: absolute !important;
      top: 100% !important;
      left: 50% !important;
      transform: translateX(-50%) translateY(0) !important;
      width: 900px !important;
      max-width: 92vw !important;
      background-color: #ffffff !important;
      border-radius: 1rem !important;
      border: 1px solid #e2e8f0 !important;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35) !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease !important;
      z-index: 9999999 !important;
      overflow: hidden !important;
      display: grid !important;
      grid-template-columns: 4fr 8fr !important;
      text-align: left !important;
      box-sizing: border-box !important;
    }

    /* Invisible hover bridge */
    .wl-nav-mega::before {
      content: "" !important;
      position: absolute !important;
      top: -20px !important;
      left: 0 !important;
      right: 0 !important;
      height: 20px !important;
      background: transparent !important;
    }

    /* Active Dropdown Visibility Rules */
    .wl-nav-item:hover .wl-nav-mega,
    .wl-nav-item:focus-within .wl-nav-mega,
    .wl-nav-mega.js-visible {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateX(-50%) translateY(4px) !important;
      pointer-events: auto !important;
    }

    /* Mega Menu Column Styles */
    .wl-mega-left {
      background-color: #f2f7f4 !important;
      padding: 1.5rem !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      border-right: 1px solid #e2e8f0 !important;
    }
    .wl-mega-right {
      padding: 1.5rem !important;
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 1.5rem !important;
      background-color: #ffffff !important;
      color: #1e293b !important;
    }
    .wl-mega-tag {
      font-size: 11px !important;
      font-weight: 800 !important;
      letter-spacing: 0.1em !important;
      color: #16a34a !important;
      text-transform: uppercase !important;
      margin-bottom: 0.5rem !important;
    }
    .wl-mega-title {
      font-size: 1.5rem !important;
      font-weight: 900 !important;
      color: #0f172a !important;
      margin: 0 0 0.75rem 0 !important;
      line-height: 1.2 !important;
    }
    .wl-mega-desc {
      font-size: 0.75rem !important;
      color: #475569 !important;
      line-height: 1.5 !important;
      margin: 0 !important;
    }
    .wl-mega-col-title {
      font-size: 0.75rem !important;
      font-weight: 800 !important;
      color: #0f172a !important;
      text-transform: uppercase !important;
      letter-spacing: 0.05em !important;
      margin-bottom: 0.5rem !important;
    }
    .wl-mega-list {
      list-style: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
    .wl-mega-list li {
      margin-bottom: 0.25rem !important;
    }
    .wl-mega-list a {
      display: block !important;
      padding: 0.25rem 0 !important;
      font-size: 0.75rem !important;
      color: #475569 !important;
      text-decoration: none !important;
      font-weight: 500 !important;
      transition: color 0.15s ease !important;
    }
    .wl-mega-list a:hover {
      color: #16a34a !important;
    }
    .wl-mega-card {
      display: block !important;
      padding: 0.625rem 0.875rem !important;
      margin: 0.375rem 0 !important;
      border-radius: 0.75rem !important;
      background-color: #eef8f3 !important;
      border: 1px solid #a7f3d0 !important;
      color: #0f5233 !important;
      font-weight: 700 !important;
      font-size: 0.75rem !important;
      text-decoration: none !important;
      transition: background-color 0.15s ease !important;
    }
    .wl-mega-card:hover {
      background-color: #d1fae5 !important;
    }

    /* Header Action Button */
    .wl-action-btn {
      display: none !important;
      align-items: center !important;
      gap: 0.5rem !important;
      padding: 0.625rem 1.25rem !important;
      font-size: 0.875rem !important;
      font-weight: 700 !important;
      color: #ffffff !important;
      background-color: #059669 !important;
      border-radius: 0.75rem !important;
      text-decoration: none !important;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
      transition: background-color 0.15s ease !important;
    }
    .wl-action-btn:hover {
      background-color: #10b981 !important;
    }
    @media (min-width: 640px) {
      .wl-action-btn { display: inline-flex !important; }
    }

    /* Mobile Navigation Drawer */
    .wl-mobile-toggle {
      display: flex !important;
      padding: 0.5rem !important;
      background: transparent !important;
      border: none !important;
      color: #cbd5e1 !important;
      font-size: 1.25rem !important;
      cursor: pointer !important;
    }
    @media (min-width: 1024px) {
      .wl-mobile-toggle { display: none !important; }
    }

    .wl-mobile-drawer {
      display: none;
      position: fixed !important;
      inset: 0 !important;
      z-index: 9999999 !important;
      background-color: rgba(15, 23, 42, 0.6) !important;
      backdrop-filter: blur(4px) !important;
    }
    .wl-mobile-drawer.js-open {
      display: block !important;
    }
    .wl-mobile-panel {
      position: absolute !important;
      right: 0 !important;
      top: 0 !important;
      bottom: 0 !important;
      width: 83.333% !important;
      max-width: 24rem !important;
      background-color: #ffffff !important;
      padding: 1.5rem !important;
      box-shadow: -10px 0 25px -5px rgba(0,0,0,0.3) !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: space-between !important;
      overflow-y: auto !important;
    }
  `;

  const headerHTML = `
    <header class="wl-header-root">
      <div class="wl-header-container">
        <div class="wl-header-inner">
          
          <!-- Logo -->
          <a href="/" class="wl-brand-link">
            <div class="wl-brand-icon">
              <i class="fa-solid fa-chart-line"></i>
            </div>
            <div>
              <span class="wl-brand-text">Wealth<span class="wl-brand-accent">Landing</span></span>
              <span class="wl-brand-sub">Lifetime Education</span>
            </div>
          </a>

          <!-- Desktop Navigation Items -->
          <nav>
            <ul class="wl-nav-list">
              
              <!-- Life Stages -->
              <li class="wl-nav-item">
                <button class="wl-nav-btn">
                  <span>Life Stages</span>
                  <i class="fa-solid fa-caret-down" style="font-size:10px;"></i>
                </button>
                <div class="wl-nav-mega">
                  <div class="wl-mega-left">
                    <div>
                      <div class="wl-mega-tag">WHERE AM I?</div>
                      <h3 class="wl-mega-title">Life Stages</h3>
                      <p class="wl-mega-desc">Start with your current chapter. See the financial priorities and decisions that matter most now.</p>
                    </div>
                    <div style="padding-top:1rem; border-top:1px solid #cbd5e1;">
                      <a href="/#life-stages-explorer" style="font-size:0.75rem; font-weight:700; color:#0f172a; text-decoration:none;">Explore all life stages &rarr;</a>
                    </div>
                  </div>
                  <div class="wl-mega-right">
                    <div>
                      <div class="wl-mega-col-title">STARTING OUT</div>
                      <ul class="wl-mega-list">
                        <li style="color:#94a3b8; font-weight:600; font-size:0.75rem; margin-bottom:0.25rem;">18–25 · Build foundation</li>
                        <li><a href="/curriculum/early-career-playbook.html">Budget & cash flow</a></li>
                        <li><a href="/curriculum/early-career-playbook.html">Credit & debt</a></li>
                        <li><a href="/curriculum/early-career-playbook.html">Start investing</a></li>
                      </ul>
                      <div class="wl-mega-col-title" style="margin-top:1.25rem;">FAMILY TO FREEDOM</div>
                      <ul class="wl-mega-list">
                        <li style="color:#94a3b8; font-weight:600; font-size:0.75rem; margin-bottom:0.25rem;">40–55 · Coordinate priorities</li>
                        <li style="color:#94a3b8; font-weight:600; font-size:0.75rem; margin-bottom:0.25rem;">55+ · Prepare for freedom</li>
                        <li>
                          <a href="/Retirement-simulator/Retirement_Gateway.html" class="wl-mega-card">
                            Start My Retirement
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div class="wl-mega-col-title">BUILDING & GROWING</div>
                      <ul class="wl-mega-list">
                        <li style="color:#94a3b8; font-weight:600; font-size:0.75rem; margin-bottom:0.25rem;">25–40 · Turn income into assets</li>
                        <li>
                          <a href="/tools.html" class="wl-mega-card">
                            Credit Card Rewards Optimizer
                          </a>
                        </li>
                        <li><a href="/curriculum/home-affordability-guide.html">Buy a home</a></li>
                        <li><a href="/investment/real_estate_vs_stocks_model.html">Real estate vs. index funds</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <!-- Goals & Decisions -->
              <li class="wl-nav-item">
                <button class="wl-nav-btn">
                  <span>Goals & Decisions</span>
                  <i class="fa-solid fa-caret-down" style="font-size:10px;"></i>
                </button>
                <div class="wl-nav-mega">
                  <div class="wl-mega-left">
                    <div>
                      <div class="wl-mega-tag">WHAT DO I WANT TO DO?</div>
                      <h3 class="wl-mega-title">Goals & Decisions</h3>
                      <p class="wl-mega-desc">Go directly to the financial question you are trying to answer.</p>
                    </div>
                  </div>
                  <div class="wl-mega-right">
                    <div>
                      <div class="wl-mega-col-title">MANAGE MONEY</div>
                      <ul class="wl-mega-list">
                        <li><a href="/tools.html">Manage my spending</a></li>
                        <li><a href="/tools.html#debt">Pay off debt</a></li>
                        <li><a href="/tools.html">Optimize rewards</a></li>
                      </ul>
                    </div>
                    <div>
                      <div class="wl-mega-col-title">BUILD ASSETS</div>
                      <ul class="wl-mega-list">
                        <li><a href="/curriculum/early-career-playbook.html">Start investing</a></li>
                        <li><a href="/curriculum/home-affordability-guide.html">Buy a home</a></li>
                        <li><a href="/investment/real_estate_vs_stocks_model.html">Real estate vs. index funds</a></li>
                        <li><a href="/Retirement-simulator/Retirement_Gateway.html">Plan my retirement</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <!-- Retirement -->
              <li class="wl-nav-item">
                <button class="wl-nav-btn">
                  <span>Retirement</span>
                  <i class="fa-solid fa-caret-down" style="font-size:10px;"></i>
                </button>
                <div class="wl-nav-mega">
                  <div class="wl-mega-left">
                    <div>
                      <div class="wl-mega-tag">CONNECTED JOURNEY</div>
                      <h3 class="wl-mega-title">Retirement</h3>
                      <p class="wl-mega-desc">Design the life first, test feasibility, then connect location, healthcare, financial and legacy decisions in one blueprint.</p>
                    </div>
                    <div style="padding-top:1rem; border-top:1px solid #cbd5e1;">
                      <a href="/Retirement-simulator/Retirement_Gateway.html" style="font-size:0.75rem; font-weight:700; color:#0f172a; text-decoration:none;">
                        Start My Retirement &rarr;
                      </a>
                    </div>
                  </div>
                  <div class="wl-mega-right">
                    <div>
                      <div class="wl-mega-col-title">START</div>
                      <ul class="wl-mega-list">
                        <li>
                          <a href="/Retirement-simulator/Retirement_Gateway.html" class="wl-mega-card">
                            Start My Retirement
                          </a>
                        </li>
                        <li><a href="/Retirement-simulator/building-your-retirement.html">Continue My Retirement</a></li>
                      </ul>
                      <div class="wl-mega-col-title" style="margin-top:1.25rem;">MY RETIREMENT</div>
                      <ul class="wl-mega-list">
                        <li>
                          <a href="/Retirement-simulator/building-your-retirement.html" class="wl-mega-card">
                            My Retirement Blueprint
                          </a>
                        </li>
                        <li><a href="/Retirement-simulator/Topic/Assets_lifestyle/Happy_retirement.html">Retirement stories</a></li>
                        <li><a href="/Retirement-simulator/building-your-retirement.html">Retirement guides</a></li>
                      </ul>
                    </div>
                    <div>
                      <div class="wl-mega-col-title">EXPLORE</div>
                      <ul class="wl-mega-list">
                        <li><a href="/Retirement-simulator/odyssey-exploration.html">Retirement Odyssey</a></li>
                        <li><a href="/Retirement-simulator/retirement_profiles.html">Retirement Profiles</a></li>
                        <li><a href="/Retirement-simulator/UScitymatcher.html">Explore U.S. locations</a></li>
                        <li><a href="/Retirement-simulator/RetiringOverseas.html">Explore living overseas</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <!-- Tools -->
              <li class="wl-nav-item">
                <button class="wl-nav-btn">
                  <span>Tools</span>
                  <i class="fa-solid fa-caret-down" style="font-size:10px;"></i>
                </button>
                <div class="wl-nav-mega">
                  <div class="wl-mega-left">
                    <div>
                      <div class="wl-mega-tag">RUN THE NUMBERS</div>
                      <h3 class="wl-mega-title">Tools</h3>
                      <p class="wl-mega-desc">Use a calculator, comparison model or optimizer when you already know which question you want to test.</p>
                    </div>
                    <div style="padding-top:1rem; border-top:1px solid #cbd5e1;">
                      <a href="/tools.html" style="font-size:0.75rem; font-weight:700; color:#0f172a; text-decoration:none;">
                        Explore all tools &rarr;
                        <span class="wl-pill-badge">REBUILD HUB</span>
                      </a>
                    </div>
                  </div>
                  <div class="wl-mega-right">
                    <div>
                      <div class="wl-mega-col-title">FEATURED</div>
                      <ul class="wl-mega-list">
                        <li>
                          <a href="/tools.html" class="wl-mega-card">
                            Credit Card Rewards Optimizer
                          </a>
                        </li>
                        <li>
                          <a href="/investment/real_estate_vs_stocks_model.html" class="wl-mega-card">
                            Real estate vs. index funds
                          </a>
                        </li>
                        <li><a href="/investment/index.html" class="wl-mega-card">Market and Investment</a></li>
                      </ul>
                      <div class="wl-mega-col-title" style="margin-top:1.25rem;">RETIREMENT TOOLS</div>
                      <ul class="wl-mega-list">
                        <li><a href="/Retirement-simulator/OptimizeRoth.html">Roth strategy</a></li>
                        <li><a href="/Retirement-simulator/UScitymatcher.html">U.S. City Matcher</a></li>
                        <li><a href="/Retirement-simulator/RetiringOverseas.html">Retiring Overseas</a></li>
                        <li><a href="/Retirement-simulator/healthcare_us_strategy.html">US healthcare strategy</a></li>
                        <li><a href="/Retirement-simulator/healthcare_international_comparison.html">International healthcare strategy</a></li>
                      </ul>
                    </div>
                    <div>
                      <div class="wl-mega-col-title">MONEY & INVESTING</div>
                      <ul class="wl-mega-list">
                        <li><a href="/tools.html#debt">Debt payoff</a></li>
                        <li><a href="/tools.html#compound">Compound growth</a></li>
                        <li><a href="/curriculum/home-affordability-guide.html">Home affordability</a></li>
                        <li><a href="/tools.html">Investment tools</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <!-- Learn -->
              <li class="wl-nav-item">
                <button class="wl-nav-btn">
                  <span>Learn</span>
                  <i class="fa-solid fa-caret-down" style="font-size:10px;"></i>
                </button>
                <div class="wl-nav-mega">
                  <div class="wl-mega-left">
                    <div>
                      <div class="wl-mega-tag">LEARNING LIBRARY</div>
                      <h3 class="wl-mega-title">Learn</h3>
                      <p class="wl-mega-desc">Clear explainers and guides for every life stage.</p>
                    </div>
                  </div>
                  <div class="wl-mega-right">
                    <div>
                      <div class="wl-mega-col-title">GUIDES</div>
                      <ul class="wl-mega-list">
                        <li><a href="/curriculum/early-career-playbook.html">Early Career Playbook</a></li>
                        <li><a href="/curriculum/home-affordability-guide.html">Home Buying Guide</a></li>
                        <li><a href="/curriculum/tax-efficient-portfolio.html">Tax-Efficient Investing</a></li>
                      </ul>
                    </div>
                    <div>
                      <div class="wl-mega-col-title">CASE STUDIES</div>
                      <ul class="wl-mega-list">
                        <li><a href="/Retirement-simulator/Topic/Assets_lifestyle/Happy_retirement.html">Happy Retirement</a></li>
                        <li><a href="/simulator.html">Tax & Roth Simulator</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </nav>

          <!-- Right Action CTA -->
          <div>
            <button id="wlMobileMenuBtn" class="wl-mobile-toggle" aria-label="Open Mobile Menu">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>

        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div id="wlMobileDrawer" class="wl-mobile-drawer">
      <div class="wl-mobile-panel">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid #f1f5f9;">
            <span style="font-size:1rem; font-weight:800; color:#0f172a;">WealthLanding Menu</span>
            <button id="wlCloseMobileDrawerBtn" style="background:none; border:none; color:#64748b; font-size:1.25rem; cursor:pointer;">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div style="display:flex; flex-direction:column; gap:1.25rem; text-align:left;">
            <div>
              <div style="font-weight:800; font-size:0.75rem; color:#047857; text-transform:uppercase; margin-bottom:0.5rem;">Life Stages</div>
              <div style="padding-left:0.5rem; border-left:2px solid #f1f5f9; display:flex; flex-direction:column; gap:0.35rem; font-size:0.8rem;">
                <a href="/curriculum/early-career-playbook.html" style="color:#334155; font-weight:600; text-decoration:none;">🌱 Starting Out (18-25)</a>
                <a href="/curriculum/home-affordability-guide.html" style="color:#334155; font-weight:600; text-decoration:none;">🚀 Building & Growing (25-40)</a>
                <a href="/curriculum/tax-efficient-portfolio.html" style="color:#334155; font-weight:600; text-decoration:none;">🛡️ Family & Peak (40-55)</a>
                <a href="/Retirement-simulator/Retirement_Gateway.html" style="color:#334155; font-weight:600; text-decoration:none;">🏖️ Pre-Retirement (55+)</a>
              </div>
            </div>

            <div>
              <div style="font-weight:800; font-size:0.75rem; color:#047857; text-transform:uppercase; margin-bottom:0.5rem;">Goals & Tools</div>
              <div style="padding-left:0.5rem; border-left:2px solid #f1f5f9; display:flex; flex-direction:column; gap:0.35rem; font-size:0.8rem;">
                <a href="/tools.html" style="color:#334155; font-weight:600; text-decoration:none;">Tools & Calculators</a>
                <a href="/investment/real_estate_vs_stocks_model.html" style="color:#334155; font-weight:600; text-decoration:none;">Real Estate vs Stocks</a>
                <a href="/Retirement-simulator/Retirement_Gateway.html" style="color:#334155; font-weight:600; text-decoration:none;">Retirement Gateway</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  function renderHeader() {
    let target = document.getElementById('global-header-target');
    
    if (!target) {
      target = document.createElement('div');
      target.id = 'global-header-target';
      if (document.body.firstChild) {
        document.body.insertBefore(target, document.body.firstChild);
      } else {
        document.body.appendChild(target);
      }
    }

    target.style.position = 'relative';
    target.style.zIndex = '999999';
    target.style.overflow = 'visible';

    target.innerHTML = headerHTML;

    // Mobile Drawer Handlers
    const mobileBtn = document.getElementById('wlMobileMenuBtn');
    const closeBtn = document.getElementById('wlCloseMobileDrawerBtn');
    const drawer = document.getElementById('wlMobileDrawer');

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', function() {
        drawer.classList.add('js-open');
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', function() {
        drawer.classList.remove('js-open');
      });
    }

    // Touch/Click Toggle Support for Dropdowns
    document.querySelectorAll('.wl-nav-item > .wl-nav-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const megaMenu = this.nextElementSibling;
        if (!megaMenu) return;

        const isVisible = megaMenu.classList.contains('js-visible');

        document.querySelectorAll('.wl-nav-mega').forEach(function(menu) {
          menu.classList.remove('js-visible');
        });

        if (!isVisible) {
          megaMenu.classList.add('js-visible');
        }
      });
    });

    // Close Dropdown Menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.wl-nav-item')) {
        document.querySelectorAll('.wl-nav-mega').forEach(function(menu) {
          menu.classList.remove('js-visible');
        });
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHeader);
  } else {
    renderHeader();
  }
})();
