// ${props => props.theme. (mixin)}

const theme = {
    black: '#000000',
    softBlack: '#404040',
    orange: '#ff6600',
    grey: '#cccccc',
    softGrey: '#f2f2f2',
  
    fontExtraLarge: '34px',
    fontLarge: '24px',
    fontMedium: '18px',
    fontSemiMedium: '16px',
    fontRegular: '14px',
    fontSmall: '13px',
    fontMicro: '11px',
  
    weightBold: '700',
    weightSemiBold: '500',
    weightRegular: '400',
    weightThin: '300',
  
    borderRadius4: '4px',
    borderRadius12: '12px',
  
    borderGray: '1px solid #e8e8e8',
    borderBlack: '1px solid #000',
  
    marginCenter: '0 auto',
  
    flex: (direction = 'row', align = 'center', justify = 'center') => `
      display: flex;
      flex-direction: ${direction};
      align-items: ${align};
      justify-content:${justify};
      `,
  
    absoluteCenter: `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      `,
  
    positionFixed: `
      position: fixed;
      top: 0;
      left: 0;
      z-index:999;
    `,
  };
  
  export default theme;