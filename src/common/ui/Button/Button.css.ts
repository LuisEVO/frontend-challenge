import { recipe } from '@vanilla-extract/recipes';

export const buttonStyles = recipe({
  base: {
    borderRadius: '40px',
    border: 'none',
    ':hover': {
      cursor: 'pointer',
    },
  },
  variants: {
    color: {
      primary: {
        background: 'var(--color-dark)',
      },
      secondary: {
        background: 'var(--color-error)',
      },
    },
    size: {
      md: {
        padding: '20px 40px',
      },
      sm: {
        padding: '14px 32px',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md'
  },
});

