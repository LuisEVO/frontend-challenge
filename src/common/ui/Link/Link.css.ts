import { recipe } from '@vanilla-extract/recipes';

export const linkStyles = recipe({
  base: {
    textDecoration: 'none',
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    ':hover': {
      cursor: 'pointer',
    },
  },
});
