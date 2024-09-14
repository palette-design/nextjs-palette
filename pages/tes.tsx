import theme2 from "@/theme2";
import { Button, ConfigProvider } from "palette-design";
import theme3 from "@/theme3";
export default function Test() {
  return (
    <ConfigProvider theme={theme3}>
      <div>
        <Button type="primary">Test</Button>
      </div>
    </ConfigProvider>
  );
}
