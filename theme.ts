import "@fontsource-variable/inter"

const defaultTheme = {
    key: 'default',  // DO NOT CHANGE
    prefixCls: 'ant', // DO NOT CHANGE
    iconPrefixCls: 'anticon',
    token: {
      fontFamily: 'Inter Variable', // Leave this blank to use Inter
      headingFontFamily: "Inter Variable",
      colors: {
        // primary: '#592a4a',
        // primaryText: '#080808'
        primary: '#427e7b',
        primaryText: '#080808',
        caption: '#757C7C'
      },
      theme: {
        lightOnDark: true, // v1.0.0: DO NOT CHANGE
        brand: '#446866', // Strictly HEX color codes
        gradient1: '#344F4D', // Strictly HEX color codes
        gradient2: '#517C7A', // Strictly HEX color codes
        gradient3: '#BFCAA7', // Strictly HEX color codes
        gradient4: '#B4F033', // Strictly HEX color codes
        accent: '#b0e9d6', // Strictly HEX color codes
        cove: '#d5dede', // Strictly HEX color codes
        body: 'body.png'
      },
      header: {
        imgUrl: 'header1.jpg'
      },
      sidepanel: {
        imgUrl: 'sider1.jpg'
      },
      card: {
        bgcolor: '#F9F9F9', // Strictly HEX color codes
        contentbg: 'linear-gradient(-90deg, #EbF1F1CC 70%, #8EAFAC33), url(cardheader.png)',
        headerbg: `linear-gradient(70deg, #EbF1F1CC 80%, #8EAFAC69 80%), url(cardheader.png)`
      }
    }
  };
  
  export default defaultTheme;
  