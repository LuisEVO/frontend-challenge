import { recipe } from '@vanilla-extract/recipes';

export const cardStyles = recipe({
  base: {
    border: '3px solid transparent',
    borderRadius: '24px',
    padding: '16px 24px',
    boxShadow: '1px 0px 32px 0px rgba(174,172,243,0.34)',
  },
  variants: {
    active: {
      true: {
        boxShadow: 'none',
        border: '3px solid var(--color-dark)'
      }
    }
  }
});
