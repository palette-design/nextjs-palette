import { createStyles } from "antd-style";

// import { usePaletteToken } from "@/tokens/usePaletteToken";
// import { usePaletteConfig } from "@/hooks/usePaletteConfig";
// import { usePaletteColors } from "@/hooks/usePaletteColors";

import {
  usePaletteConfig,
  usePaletteToken,
  usePaletteColors,
} from "palette-design";

export const useThemeSwitchStyles = () => {
  const { token } = usePaletteToken();
  const { borderRadius } = usePaletteConfig();
  const { generate } = usePaletteColors();

  const { neutral } = generate(undefined, !token.theme.lightOnDark);

  return createStyles(({ css, responsive, prefixCls }) => ({
    switch: css`
      background-color: transparent;

      & .${prefixCls}-segmented-item {
        & > .${prefixCls}-segmented-item-label {
          padding: 3px;
          border-radius: ${borderRadius.primary}px;
        }

        &.${prefixCls}-segmented-item-selected {
          & .pds-theme_color_box {
            border-color: ${neutral[5]};
          }
        }
      }
    `,
    box: css`
      height: 20px;
      width: 20px;
      border: 1px solid ${neutral[0]};

      border-radius: ${borderRadius.primary}px;
    `,
  }))();
};
