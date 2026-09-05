tailwind.config = {
    safelist: [
        'bg-navy-900',
        'text-slate-300',
        'border-brand-500'
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d',
                    800: '#166534',
                    900: '#14532d',
                },
                navy: {
                    800: '#1e293b',
                    900: '#0f172a'
                },
                slate: {
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    700: '#334155'
                }
            }
        }
    }
}
