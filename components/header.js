(function() {
  // 1. Inject mandatory CSS & FontAwesome dependencies if missing in the host page
  const head = document.head;

  if (!document.querySelector('link[href*="font-awesome"]')) {
    const fa = document.createElement('link');
    fa.rel = 'stylesheet';
    fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    head.appendChild(fa);
  }

  if (!window.tailwind && !document.querySelector('script[src*="tailwindcss"]')) {
    const tw = document.createElement('script');
    tw.src = 'https://cdn.tailwindcss.com';
    head.appendChild(tw);
  }

  // Standalone CSS fallback so dropdowns work reliably on any page regardless of CSS loading order
  const styleTag = document.createElement('style');
  styleTag.id = 'wealthlanding-header-styles';
  styleTag.textContent = `
    /* Mega Menu Dropdown Core Styling */
    .wl-nav-mega {
      position: absolute !important;
      top: 100% !important;
      left: 50% !important;
      transform: translateX(-50%) translateY(10px) !important;
      width: 900px !important;
      max-width: 92vw !important;
      background-color: #ffffff !important;
      border-radius: 1rem !important;
      border: 1px solid #e2e8f0 !important;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease !important;
      z-index: 9999 !important;
    }

    /* Hover & Active Display Rules */
    .wl-nav-group:hover .wl-nav-mega,
    .wl-nav-group:focus-within .wl-nav-mega,
    .wl-nav-mega.js-visible {
      opacity: 1 !important;
      visibility: visible !important;
      transform: translateX(-50%) translateY(0) !important;
      pointer-events: auto !important;
    }

    /* Ensure text styling inside mega menu */
    .wl-nav-mega h3, .wl-nav-mega h5, .wl-nav-mega p, .wl-nav-mega a, .wl-nav-mega span, .wl-nav-mega li {
      font-family: Inter, system-ui, -apple-system, sans-serif !important;
    }
  `;
  head.appendChild(styleTag);

  const headerHTML = `
    <header class="sticky top-0 z-50 bg-[#0a1128] border-b border-slate-800 transition-all duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Brand Logo -->
                <a href="/" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                        <i class="fa-solid fa-chart-line text-lg"></i>
                    </div>
                    <div class="text-left">
                        <span class="text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition">Wealth<span class="text-emerald-400">Landing</span></span>
                        <span class="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase -mt-1">Lifetime Education</span>
                    </div>
                </a>

                <!-- Desktop Navigation Items -->
                <nav class="hidden lg:flex items-center gap-1">
                    
                    <!-- MENU 1: Life Stages -->
                    <div class="relative wl-nav-group py-6">
                        <button class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition focus:outline-none">
                            <span>Life Stages</span>
                            <i class="fa-solid fa-caret-down text-xs text-slate-400 group-hover:text-emerald-400 transition-transform duration-200"></i>
                        </button>

                        <div class="wl-nav-mega overflow-hidden grid grid-cols-12 text-left">
                            <div class="col-span-4 bg-[#f2f7f4] p-6 flex flex-col justify-between border-r border-slate-200/80">
                                <div>
                                    <div class="text-[11px] font-extrabold tracking-widest text-[#16a34a] uppercase mb-2">WHERE AM I?</div>
                                    <h3 class="text-2xl font-black text-slate-900 mb-3 tracking-tight">Life Stages</h3>
                                    <p class="text-xs text-slate-600 leading-relaxed font-medium">Start with your current chapter. See the financial priorities and decisions that tend to matter most now.</p>
                                </div>
                                <div class="pt-6 border-t border-slate-200/80">
                                    <a href="/#life-stages-explorer" class="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-emerald-700 transition">
                                        <span>Explore all life stages &rarr;</span>
                                    </a>
                                </div>
                            </div>

                            <div class="col-span-8 p-6 grid grid-cols-2 gap-6 bg-white text-slate-800">
                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">STARTING OUT</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li class="text-slate-500 font-semibold py-1">18–25 · Build the foundation</li>
                                        <li><a href="/curriculum/early-career-playbook.html" class="hover:text-emerald-600 py-1 block">Budget & cash flow</a></li>
                                        <li><a href="/curriculum/early-career-playbook.html" class="hover:text-emerald-600 py-1 block">Credit & debt</a></li>
                                        <li><a href="/curriculum/early-career-playbook.html" class="hover:text-emerald-600 py-1 block">Start investing</a></li>
                                    </ul>

                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mt-5 mb-2">FAMILY TO FREEDOM</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li class="text-slate-500 font-semibold py-1">40–55 · Coordinate priorities</li>
                                        <li class="text-slate-500 font-semibold py-1">55+ · Prepare for freedom</li>
                                        <li>
                                            <a href="/Retirement-simulator/Retirement_Gateway.html" class="block p-2.5 px-3.5 my-1.5 rounded-xl bg-[#eef8f3] border border-emerald-200/80 text-[#0f5233] font-bold text-xs hover:bg-emerald-100 transition">
                                                Start My Retirement
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">BUILDING & GROWING</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li class="text-slate-500 font-semibold py-1">25–40 · Turn income into assets</li>
                                        <li>
                                            <a href="/tools.html" class="block p-2.5 px-3.5 my-1.5 rounded-xl bg-[#eef8f3] border border-emerald-200/80 text-[#0f5233] font-bold text-xs hover:bg-emerald-100 transition">
                                                Credit Card Rewards Optimizer
                                            </a>
                                        </li>
                                        <li><a href="/curriculum/home-affordability-guide.html" class="hover:text-emerald-600 py-1 block">Buy a home</a></li>
                                        <li><a href="/investment/real_estate_vs_stocks_model.html" class="hover:text-emerald-600 py-1 block">Real estate vs. index funds</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- MENU 2: Goals & Decisions -->
                    <div class="relative wl-nav-group py-6">
                        <button class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition focus:outline-none">
                            <span>Goals & Decisions</span>
                            <i class="fa-solid fa-caret-down text-xs text-slate-400 group-hover:text-emerald-400 transition-transform duration-200"></i>
                        </button>
                        <div class="wl-nav-mega overflow-hidden grid grid-cols-12 text-left">
                            <div class="col-span-4 bg-[#f2f7f4] p-6 flex flex-col justify-between border-r border-slate-200/80">
                                <div>
                                    <div class="text-[11px] font-extrabold tracking-widest text-[#16a34a] uppercase mb-2">WHAT DO I WANT TO DO?</div>
                                    <h3 class="text-2xl font-black text-slate-900 mb-3 tracking-tight">Goals & Decisions</h3>
                                    <p class="text-xs text-slate-600 leading-relaxed font-medium">Go directly to the financial question you are trying to answer.</p>
                                </div>
                            </div>
                            <div class="col-span-8 p-6 grid grid-cols-2 gap-6 bg-white text-slate-800">
                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">MANAGE MONEY</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li><a href="/tools.html" class="hover:text-emerald-600 py-1 block">Manage my spending</a></li>
                                        <li><a href="/tools.html#debt" class="hover:text-emerald-600 py-1 block">Pay off debt</a></li>
                                        <li><a href="/tools.html" class="hover:text-emerald-600 py-1 block">Optimize rewards</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">BUILD ASSETS</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li><a href="/curriculum/early-career-playbook.html" class="hover:text-emerald-600 py-1 block">Start investing</a></li>
                                        <li><a href="/curriculum/home-affordability-guide.html" class="hover:text-emerald-600 py-1 block">Buy a home</a></li>
                                        <li><a href="/investment/real_estate_vs_stocks_model.html" class="hover:text-emerald-600 py-1 block">Real estate vs. index funds</a></li>
                                        <li><a href="/Retirement-simulator/Retirement_Gateway.html" class="hover:text-emerald-600 py-1 block">Plan my retirement</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- MENU 3: Retirement -->
                    <div class="relative wl-nav-group py-6">
                        <button class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition focus:outline-none">
                            <span>Retirement</span>
                            <i class="fa-solid fa-caret-down text-xs text-slate-400 group-hover:text-emerald-400 transition-transform duration-200"></i>
                        </button>
                        <div class="wl-nav-mega overflow-hidden grid grid-cols-12 text-left">
                            <div class="col-span-4 bg-[#f2f7f4] p-6 flex flex-col justify-between border-r border-slate-200/80">
                                <div>
                                    <div class="text-[11px] font-extrabold tracking-widest text-[#16a34a] uppercase mb-2">RETIREMENT HUB</div>
                                    <h3 class="text-2xl font-black text-slate-900 mb-3 tracking-tight">Retirement</h3>
                                    <p class="text-xs text-slate-600 leading-relaxed font-medium">Connect location, healthcare, and financial blueprints in one plan.</p>
                                </div>
                            </div>
                            <div class="col-span-8 p-6 grid grid-cols-2 gap-6 bg-white text-slate-800">
                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">JOURNEYS</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li><a href="/Retirement-simulator/Retirement_Gateway.html" class="hover:text-emerald-600 py-1 block">Start My Retirement</a></li>
                                        <li><a href="/Retirement-simulator/building-your-retirement.html" class="hover:text-emerald-600 py-1 block">My Retirement Blueprint</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">EXPLORE</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li><a href="/Retirement-simulator/UScitymatcher.html" class="hover:text-emerald-600 py-1 block">U.S. City Matcher</a></li>
                                        <li><a href="/Retirement-simulator/RetiringOverseas.html" class="hover:text-emerald-600 py-1 block">Living Overseas</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- MENU 4: Tools -->
                    <div class="relative wl-nav-group py-6">
                        <a href="/tools.html" class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition">
                            <span>Tools</span>
                        </a>
                    </div>

                    <!-- MENU 5: Learn -->
                    <div class="relative wl-nav-group py-6">
                        <button class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition focus:outline-none">
                            <span>Learn</span>
                            <i class="fa-solid fa-caret-down text-xs text-slate-400 group-hover:text-emerald-400 transition-transform duration-200"></i>
                        </button>
                        <div class="wl-nav-mega overflow-hidden grid grid-cols-12 text-left">
                            <div class="col-span-4 bg-[#f2f7f4] p-6 flex flex-col justify-between border-r border-slate-200/80">
                                <div>
                                    <div class="text-[11px] font-extrabold tracking-widest text-[#16a34a] uppercase mb-2">LEARNING LIBRARY</div>
                                    <h3 class="text-2xl font-black text-slate-900 mb-3 tracking-tight">Learn</h3>
                                    <p class="text-xs text-slate-600 leading-relaxed font-medium">Clear explainers and guides for every life stage.</p>
                                </div>
                            </div>
                            <div class="col-span-8 p-6 grid grid-cols-2 gap-6 bg-white text-slate-800">
                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">GUIDES</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li><a href="/curriculum/early-career-playbook.html" class="hover:text-emerald-600 py-1 block">Early Career Playbook</a></li>
                                        <li><a href="/curriculum/home-affordability-guide.html" class="hover:text-emerald-600 py-1 block">Home Buying Guide</a></li>
                                        <li><a href="/curriculum/tax-efficient-portfolio.html" class="hover:text-emerald-600 py-1 block">Tax-Efficient Investing</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">MODELS</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li><a href="/investment/real_estate_vs_stocks_model.html" class="hover:text-emerald-600 py-1 block">Real Estate vs Stocks</a></li>
                                        <li><a href="/simulator.html" class="hover:text-emerald-600 py-1 block">Tax & Roth Simulator</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>

                <!-- Right Action Button -->
                <div class="hidden sm:flex items-center gap-3">
                    <a href="/#life-stages-explorer" class="px-5 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md transition flex items-center gap-2">
                        <i class="fa-solid fa-compass text-sm"></i>
                        <span>Find Your Path</span>
                    </a>
                </div>

                <!-- Mobile Hamburger Button -->
                <div class="flex lg:hidden">
                    <button id="globalMobileMenuBtn" class="p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>

            </div>
        </div>
    </header>

    <!-- Mobile Slide-out Drawer -->
    <div id="globalMobileDrawer" class="hidden fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm lg:hidden">
        <div class="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
                <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                    <span class="text-base font-extrabold text-slate-900">WealthLanding Menu</span>
                    <button id="closeGlobalMobileDrawerBtn" class="p-2 text-slate-400 hover:text-slate-900">
                        <i class="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                <div class="space-y-5 text-left">
                    <div>
                        <div class="font-extrabold text-xs text-emerald-700 uppercase tracking-wider mb-2">Life Stages</div>
                        <div class="space-y-1.5 pl-2 border-l-2 border-slate-100 text-xs">
                            <a href="/curriculum/early-career-playbook.html" class="block font-semibold text-slate-700 py-1">🌱 Starting Out (18-25)</a>
                            <a href="/curriculum/home-affordability-guide.html" class="block font-semibold text-slate-700 py-1">🚀 Building & Growing (25-40)</a>
                            <a href="/curriculum/tax-efficient-portfolio.html" class="block font-semibold text-slate-700 py-1">🛡️ Family & Peak (40-55)</a>
                            <a href="/Retirement-simulator/Retirement_Gateway.html" class="block font-semibold text-slate-700 py-1">🏖️ Pre-Retirement (55+)</a>
                        </div>
                    </div>

                    <div>
                        <div class="font-extrabold text-xs text-emerald-700 uppercase tracking-wider mb-2">Goals & Tools</div>
                        <div class="space-y-1.5 pl-2 border-l-2 border-slate-100 text-xs">
                            <a href="/tools.html" class="block font-semibold text-slate-700 py-1">Tools & Calculators</a>
                            <a href="/investment/real_estate_vs_stocks_model.html" class="block font-semibold text-slate-700 py-1">Real Estate vs Stocks</a>
                            <a href="/Retirement-simulator/Retirement_Gateway.html" class="block font-semibold text-slate-700 py-1">Retirement Gateway</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-6 border-t border-slate-100">
                <a href="/#life-stages-explorer" class="block w-full py-3 text-center text-sm font-bold text-white bg-emerald-600 rounded-xl shadow-md">
                    Find Your Financial Path
                </a>
            </div>
        </div>
    </div>
  `;

  const target = document.getElementById('global-header-target');
  if (target) {
    target.innerHTML = headerHTML;

    // Mobile Drawer Handlers
    const mobileBtn = document.getElementById('globalMobileMenuBtn');
    const closeBtn = document.getElementById('closeGlobalMobileDrawerBtn');
    const drawer = document.getElementById('globalMobileDrawer');

    if (mobileBtn && drawer) {
      mobileBtn.addEventListener('click', function() {
        drawer.classList.remove('hidden');
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', function() {
        drawer.classList.add('hidden');
      });
    }

    // Touch/Click Toggle Support for Dropdowns
    document.querySelectorAll('.wl-nav-group > button').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024 || ('ontouchstart' in window)) {
          e.preventDefault();
          const currentMenu = this.nextElementSibling;
          const isVisible = currentMenu ? currentMenu.classList.contains('js-visible') : false;

          document.querySelectorAll('.wl-nav-mega').forEach(function(menu) {
            menu.classList.remove('js-visible');
          });

          if (!isVisible && currentMenu) {
            currentMenu.classList.add('js-visible');
          }
        }
      });
    });

    // Close Dropdown Menu on Outside Click
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.wl-nav-group')) {
        document.querySelectorAll('.wl-nav-mega').forEach(function(menu) {
          menu.classList.remove('js-visible');
        });
      }
    });
  }
})();
