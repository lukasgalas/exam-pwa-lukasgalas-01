export const BREAKPOINTS = {
    xs: 0,
    sm: 360,
    md: 768,
    lg: 1280,
    xl: 1440,
};

export const COLORS = {
    primary: {
        50: '#EAEDFF',
        100: '#BFC8FF',
        200: '#A0AEFF',
        300: '#7489FE',
        400: '#5972FE',
        500: '#304FFE',
        600: '#2C48E7',
        700: '#2238B4',
        800: '#1A2B8C',
        900: '#14216B',
        get DEFAULT() {
            return this[500];
        },
    },
    neutral: {
        50: '#EBECEE',
        100: '#C1C4C9',
        200: '#A3A8AF',
        300: '#79808A',
        400: '#5F6774',
        500: '#374151',
        600: '#323B4A',
        700: '#272E3A',
        800: '#1E242D',
        900: '#171B22',
        white: '#FFFFFF',
        black: '#000000',
        get DEFAULT() {
            return this[500];
        },
    },
    green: {
        50: '#E6FAEB',
        100: '#B0EFC0',
        200: '#8AE8A2',
        300: '#54DD78',
        400: '#33D65D',
        500: '#00CC35',
        600: '#00BA30',
        700: '#009126',
        800: '#00701D',
        900: '#005616   ',
        get DEFAULT() {
            return this[500];
        },
    },
    yellow: {
        50: '#FEF5E7',
        100: '#FCE1B3',
        200: '#FAD28F',
        300: '#F8BE5C',
        400: '#F7B13C',
        500: '#F59E0B',
        600: '#DF900A',
        700: '#AE7008',
        800: '#875706',
        900: '#674205',
        get DEFAULT() {
            return this[500];
        },
    },
    red: {
        50: '#FCE9E9',
        100: '#F4BCBC',
        200: '#EF9B9B',
        300: '#E86E6E',
        400: '#E35151',
        500: '#DC2626',
        600: '#C82323',
        700: '#9C1B1B',
        800: '#791515',
        900: '#5C1010',
        get DEFAULT() {
            return this[500];
        },
    },
};
export const LINE_HEIGHT = {
    xs: '12px',
    sm: '16px',
    base: '20px',
    lg: '24px',
    xl: '28px',
    '2xl': '28px',
    '3xl': '32px',
    '4xl': '36px',
    '5xl': '40px',
    '6xl': '64px',
    '7xl': '72px',
    '8xl': '96px',
    '9xl': '128px',
    '10xl': '160px',
};
export const FONT_SIZE = {
    xs: '10px',
    sm: '12px',
    base: '14px',
    lg: '16px',
    xl: '18px',
    '2xl': '20px',
    '3xl': '24px',
    '4xl': '30px',
    '5xl': '36px',
    '6xl': '48px',
    '7xl': '60px',
    '8xl': '72px',
    '9xl': '96px',
    '10xl': '128px',
};
export const FONT_FAMILY = {
    sans: ['var(--font-inter)'],
    'pwa-default': ['var(--font-pwa-default_font)', 'var(--font-inter)'],
    'pwa-heading': ['var(--font-pwa-heading_font)', 'var(--font-inter)'],
};
export const FONT_WEIGHT = {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
};
export const SPACING = {
    'space-050': '2px',
    'space-100': '4px',
    'space-150': '6px',
    'space-200': '8px',
    'space-300': '12px',
    'space-400': '16px',
    'space-500': '20px',
    'space-600': '24px',
    'space-800': '32px',
    'space-1000': '40px',
    'space-1200': '48px',
    'space-1600': '64px',
    'space-2000': '80px',
    'space-2400': '96px',
    'space-3200': '128px',
};

export const ZINDEX = {
    'backdrop-loader': 1300,
    'scroll-to-top': 1099,
    toast: 1202,
    'backdrop-dialog': 1200,
    dialog: 1201,
    'backdrop-drawer': 1150,
    drawer: 1151,
};

export default {};
