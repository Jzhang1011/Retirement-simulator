class WealthLandingFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-navy-900 text-slate-300 py-12 border-t-4 border-brand-500">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div class="col-span-1 md:col-span-1">
                            <div class="flex items-center mb-4">
                                <i class="fa-solid fa-leaf text-brand-500 text-2xl mr-2"></i>
                                <span class="font-bold text-xl text-white tracking-tight">WealthLanding</span>
                            </div>
                            <p class="text-sm text-slate-400">Your trusted guide to financial independence, designed for the modern earner.</p>
                        </div>
                        <div>
                            <h4 class="text-white font-bold mb-4">Life Stages</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="#" class="hover:text-brand-400 transition-colors">High School</a></li>
                                <li><a href="#" class="text-brand-400 font-medium">Early Career (18-25)</a></li>
                                <li><a href="#" class="hover:text-brand-400 transition-colors">Mid-Career (26-40)</a></li>
                                <li><a href="#" class="hover:text-brand-400 transition-colors">Pre-Retirement</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-white font-bold mb-4">Resources</h4>
                            <ul class="space-y-2 text-sm">
                                <li><a href="tools.html" class="hover:text-brand-400 transition-colors">Calculators</a></li>
                                <li><a href="#" class="hover:text-brand-400 transition-colors">Blog</a></li>
                                <li><a href="#" class="hover:text-brand-400 transition-colors">Advisors</a></li>
                                <li><a href="#" class="hover:text-brand-400 transition-colors">Methodology</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-white font-bold mb-4">Join Newsletter</h4>
                            <form class="flex" onsubmit="event.preventDefault();">
                                <input type="email" placeholder="Email" class="w-full px-3 py-2 text-navy-900 rounded-l-md focus:outline-none" required>
                                <button type="submit" class="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-r-md font-bold transition-colors">Join</button>
                            </form>
                        </div>
                    </div>
                    <div class="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                        <p>&copy; 2026 WealthLanding. All rights reserved.</p>
                        <div class="space-x-4 mt-4 md:mt-0">
                            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Define the custom element
customElements.define('wealthlanding-footer', WealthLandingFooter);
