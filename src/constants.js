export const BREAKPOINT = {
  LAPTOP: 1300, // px
  PHONE: 600,
  TABLET: 950,
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
  LAPTOP_AND_SMALLER: `(max-width: ${BREAKPOINT.LAPTOP / 16}rem)`,
  PHONE_AND_SMALLER: `(max-width: ${BREAKPOINT.PHONE / 16}rem)`,
  TABLET_AND_SMALLER: `(max-width: ${BREAKPOINT.TABLET / 16}rem)`,
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};
