export const content = [
    './src/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
    extend: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        animation: {
            'spin-slow': 'spin 15s linear infinite',
            'spin-slower': 'spin 25s linear infinite',
            'spin-slowest': 'spin 35s linear infinite',
        },
        keyframes: {
            spin: {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
            },
        },
    },
};
export const plugins = [
    require('@tailwindcss/forms')(),
    require('@tailwindcss/typography')(), 
];