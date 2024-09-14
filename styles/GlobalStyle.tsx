import { createGlobalStyle } from "styled-components";
import { generate } from "../utils/colors.util";

/**
 * Styles that do not have antd tokens
 */

const GlobalStyle = createGlobalStyle`
${(props) => {
  let theme = props.theme.token;
  let prefixCls = props.theme.prefixCls;

  const { colors: primaryColors, neutral } = generate(theme.colors.primary);

  return `  
    * {
      overflow-wrap: break-word;
      letter-spacing: .025em;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${neutral[5]}40; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${neutral[4]}; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
    }


    .${prefixCls}-menu-submenu .${prefixCls}-menu-sub.${prefixCls}-menu-vertical {
      background-color: #FDFDFD !important;
      
      / * Menu hidden in overflow */
      & .${prefixCls}-menu-submenu-title {
      background-color: ${primaryColors[5]}40 !important;
      color: ${theme.colors.primaryText} !important;
	  }

    & .${prefixCls}-menu-item {
      padding-inline: 15px;
    }

      & .${prefixCls}-menu-item,
      & .${prefixCls}-menu-submenu {
        &,
        &:hover {
          color: ${theme.colors.primaryText} !important;
        }

        &.${prefixCls}-menu-item-selected,
        &:hover {
          background-color: ${primaryColors[5]}40 !important;          
        }
      }

      & .${prefixCls}-menu-item-group-title  {
        font-weight: 600;
        color: ${theme.colors.primaryText} !important;
      }
    }    
  `;
}}
`;
export default GlobalStyle;
