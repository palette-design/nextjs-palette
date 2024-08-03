// import { SegmentedValue } from "antd/es/segmented/index";
// import { Segmented, ConfigProvider } from "antd";

import defaultTheme from "../../../theme";
import theme2 from "../../../theme2";
import theme3 from "../../../theme3";

/**
 * Styles
 */
import { useThemeSwitchStyles } from "./styles/useThemeSwitchStyles";

/**
 * Hooks
 */
import { ConfigProvider, Segmented, usePaletteToken } from "palette-design";
import { usePaletteColors } from "palette-design";
// import { usePaletteToken } from "@/tokens/usePaletteToken";
// import { usePaletteColors } from "@/hooks/usePaletteColors";

/**
 * Interfaces
 */
// import { PaletteThemeSwitchProps } from "../../ui/interfaces";

/**
 * Stores
 */
import { useAppThemeStore } from "@/store/apptheme";
import { PaletteSegmentedProps } from "palette-design/dist/components/ui/interfaces";
import { SegmentedValue } from "antd/es/segmented";

const ColorBox = ({ token }: { token: any }) => {
  const themeSwitchStyles = useThemeSwitchStyles().styles;

  return (
    <div
      className={`${themeSwitchStyles.box} pds-theme_color_box`}
      style={{
        background: `linear-gradient(155deg, 
			${token.theme.gradient1}, 
			${token.theme.gradient2}E6, 
			${token.theme.gradient3}CC, 
			${token.theme.gradient4}80)`,
      }}
    />
  );
};

export interface PaletteThemeSwitchProps
  extends Omit<PaletteSegmentedProps, "options"> {}

export const ThemeSwitch = ({
  onChange = () => {},
}: PaletteThemeSwitchProps) => {
  const { token } = usePaletteToken();
  const { generate } = usePaletteColors();

  const themeSwitchStyles = useThemeSwitchStyles().styles;
  const { neutral } = generate(undefined, !token.theme.lightOnDark);

  const selectedTheme = useAppThemeStore((state) => state.selectedTheme);
  const setSelectedTheme = useAppThemeStore((state) => state.setSelectedTheme);

  const handleChange = (value: SegmentedValue) => {
    // let theme = await import(`../../../${value}`)

    setSelectedTheme(value);
    onChange(value);
  };

  return (
    <ConfigProvider>
      <Segmented
        className={`${themeSwitchStyles.switch}`}
        defaultValue={selectedTheme.key}
        options={[
          {
            label: <ColorBox token={defaultTheme.token} />,
            value: defaultTheme.key,
          },
          {
            label: <ColorBox token={theme2.token} />,
            value: theme2.key,
          },
          {
            label: <ColorBox token={theme3.token} />,
            value: theme3.key,
          },
        ]}
        size={"small"}
        onChange={handleChange}
      />
    </ConfigProvider>
  );
};
