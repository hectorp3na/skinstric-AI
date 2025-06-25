export const theme = {
    extend: {
        keyframes: {
            'fade-right': {
                '0%': { opacity: '0', transform: 'translateX(-20px)' },
                '100%': { opacity: '1', transform: 'translateX(0)' },
            },
        },
        animation: {
            'fade-right': 'fade-right 0.5s ease-in-out forwards',
        },
    },
};
export const plugins = [];