import { recipe } from '@vanilla-extract/recipes';

export const typographyStyles = recipe({
  variants: {
    family: {
      Lato: { fontFamily: 'Lato' },
      BRSonoma: { fontFamily: 'BRSonoma' },
    },
    weight: {
      regular: { fontWeight: 400 },
      semibold: { fontWeight: 600 },
      bold: { fontWeight: 700 },
      black: { fontWeight: 900 },
    },
  },
});
