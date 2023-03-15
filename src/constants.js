export const BREAKPOINTS = {
  LAPTOP_MAX: 81.25, // rem
  PHONE_MAX: 37.5,
  TABLET_MAX: 59.375,
}

export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const MEDIA_QUERY = {
  LAPTOP_AND_LESS: `(max-width: ${BREAKPOINTS.LAPTOP_MAX}rem)`,
  PHONE_AND_LESS: `(max-width: ${BREAKPOINTS.PHONE_MAX}rem)`,
  TABLET_AND_LESS: `(max-width: ${BREAKPOINTS.TABLET_MAX}rem)`,
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};
