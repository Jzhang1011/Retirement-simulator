(function() {
  const headerHTML = `
    <header class="sticky top-0 z-50 bg-[#0a1128] border-b border-slate-800 transition-all duration-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                
                <!-- Brand Logo -->
                <a href="/" class="flex items-center gap-3 group">
                    <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-700 via-emerald-600 to-emerald-400 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                        <i class="fa-solid fa-chart-line text-lg"></i>
                    </div>
                    <div>
                        <span class="text-xl font-extrabold tracking-tight text-white group-hover:text-emerald-400 transition">Wealth<span class="text-emerald-400">Landing</span></span>
                        <span class="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase -mt-1">Lifetime Education</span>
                    </div>
                </a>

                <!-- Desktop Navigation Items -->
                <nav class="hidden lg:flex items-center gap-1">
                    
                    <!-- MENU 1: Life Stages -->
                    <div class="relative group py-6">
                        <button class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition">
                            <span>Life Stages</span>
                            <i class="fa-solid fa-caret-down text-xs text-slate-400 group-hover:text-emerald-400 transition-transform duration-200"></i>
                        </button>

                        <div class="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden grid grid-cols-12 z-50 text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                    <div class="relative group py-6">
                        <button class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition">
                            <span>Goals & Decisions</span>
                            <i class="fa-solid fa-caret-down text-xs text-slate-400 group-hover:text-emerald-400 transition-transform duration-200"></i>
                        </button>
                        <div class="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden grid grid-cols-12 z-50 text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <div class="col-span-4 bg-[#f2f7f4] p-6 flex flex-col justify-between border-r border-slate-200/80">
                                <div>
                                    <div class="text-[11px] font-extrabold tracking-widest text-[#16a34a] uppercase mb-2">GOAL BASED</div>
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
                                    </ul>
                                </div>
                                <div>
                                    <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">BUILD ASSETS</h5>
                                    <ul class="space-y-1.5 text-xs text-slate-600">
                                        <li><a href="/investment/real_estate_vs_stocks_model.html" class="hover:text-emerald-600 py-1 block">Real estate vs. index funds</a></li>
                                        <li><a href="/Retirement-simulator/Retirement_Gateway.html" class="hover:text-emerald-600 py-1 block">Plan my retirement</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- MENU 3: Retirement -->
                    <div class="relative group py-6">
                        <button class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition">
                            <span>Retirement</span>
                            <i class="fa-solid fa-caret-down text-xs text-slate-400 group-hover:text-emerald-400 transition-transform duration-200"></i>
                        </button>
                        <div class="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[900px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden grid grid-cols-12 z-50 text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                    <div class="relative group py-6">
                        <a href="/tools.html" class="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-slate-100 hover:text-emerald-400 rounded-lg hover:bg-slate-800/60 transition">
                            <span>Tools</span>
                        </a>
                    </div>

                </nav>

                <!-- Right Action Button -->
                <div class="hidden sm:flex items-center gap-3">
                    <a href="/#life-stages-explorer" class="px-5 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-md transition flex items-center gap-2">
                        <i class="fa-solid fa-compass text-sm"></i>
                        <span>Find Your Path</span>
                    </a>
                </div>

            </div>
        </div>
    </header>
  `;

  const target = document.getElementById('global-header-target');
  if (target) {
    target.innerHTML = headerHTML;
  }
})();