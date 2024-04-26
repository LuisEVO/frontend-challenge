
import { recipe } from '@vanilla-extract/recipes';

export const badgeStyles = recipe({
  base: {
    width: 'max-content',
    padding: '4px 8px',
    borderRadius: '4px',
    letterSpacing: '.4px'
  },
  variants: {
   color: {
    primary: {
      background: 'linear-gradient(90deg, rgba(0,244,226,1) 40%, rgba(0,255,127,1) 100%)'
    }
   }
  },
  defaultVariants: {
    color: 'primary'
  }
});
