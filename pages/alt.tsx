"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import logo from "../public/logo.svg";
import { BellFilled, SearchOutlined } from "@ant-design/icons";

/**
 * Mock data
 */
import { menuItems, useMenuStates } from "@/mock/menu.mock";
import { listDataSource } from "@/mock/list.mock";
import { useTableStates } from "@/mock/table.mock";
import { useTabsStates } from "@/mock/hLayoutTabs.mock";

/**
 * Components
 */
// import { ThemeSwitch } from '@/components/features/ThemeSwitch/ThemeSwitch'

import {
  Breadcrumb,
  Button,
  Input,
  HorizontalLayout,
  Table,
  Tabs,
  Typography,
} from "palette-design";

// const Breadcrumb = dynamic(
//   () => import("palette-design").then((mod) => mod.Breadcrumb),
//   { ssr: false }
// );
// const Button = dynamic(
//   () => import("palette-design").then((mod) => mod.Button),
//   { ssr: false }
// );
// const Input = dynamic(() => import("palette-design").then((mod) => mod.Input), {
//   ssr: false,
// });

// const HorizontalLayout = dynamic(
//   () => import("palette-design").then((mod) => mod.HorizontalLayout),
//   { ssr: false }
// );
// const AppBar = dynamic(
//   () => import("palette-design").then((mod) => mod.HorizontalLayout.AppBar),
//   { ssr: false }
// );
// const TrailingActions = dynamic(
//   () =>
//     import("palette-design").then(
//       (mod) => mod.HorizontalLayout.AppBar.TrailingActions
//     ),
//   { ssr: false }
// );
// const SidePanel = dynamic(
//   () => import("palette-design").then((mod) => mod.HorizontalLayout.SidePanel),
//   { ssr: false }
// );
// const SidePanelList = dynamic(
//   () =>
//     import("palette-design").then((mod) => mod.HorizontalLayout.SidePanel.List),
//   { ssr: false }
// );
// const Content = dynamic(
//   () => import("palette-design").then((mod) => mod.HorizontalLayout.Content),
//   { ssr: false }
// );

// const Table = dynamic(() => import("palette-design").then((mod) => mod.Table), {
//   ssr: false,
// });
// const Tabs = dynamic(() => import("palette-design").then((mod) => mod.Tabs), {
//   ssr: false,
// });

// const Title = dynamic(
//   () => import("palette-design").then((mod) => mod.Typography.Title),
//   { ssr: false }
// );
// const Text = dynamic(
//   () => import("palette-design").then((mod) => mod.Typography.Text),
//   { ssr: false }
// );
// const Emphasis = dynamic(
//   () => import("palette-design").then((mod) => mod.Typography.Emphasis),
//   { ssr: false }
// );

const SampleTable = () => {
  const { title, columns, dataSource, onChange } = useTableStates();

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
      title={() => title}
    />
  );
};

export default function Alt() {
  const router = useRouter();
  const [
    current,
    currentMenuItem,
    setCurrent,
    setCurrentMenuItem,
    getSelectedMenuItem,
  ] = useMenuStates();
  const [selectedKeys, setSelectedKeys] = useState(["3"]);
  const { items: tabsItems } = useTabsStates(<SampleTable />);

  const selected = useMemo(() => {
    return listDataSource.find((i) => i.key === selectedKeys[0]);
  }, [selectedKeys]);

  const handleListItemClicked = (item: any) => {
    setSelectedKeys([item.key]);
  };

  return (
    <HorizontalLayout>
      <HorizontalLayout.AppBar
        mastheadProps={{ type: "hidden" }}
        logo={<Image src={logo} alt={"Palette"} />}
      >
        <HorizontalLayout.AppBar.TrailingActions
          avatarProps={{
            userId: "wmaverk",
          }}
        >
          {/* Theme Switch */}
          {/* <ThemeSwitch /> */}

          {/* Search Input */}
          <Input placeholder="Search" prefix={<SearchOutlined />} allowClear />

          {/* Notification Button */}
          <Button icon={<BellFilled />} />
        </HorizontalLayout.AppBar.TrailingActions>
      </HorizontalLayout.AppBar>

      <HorizontalLayout>
        <HorizontalLayout.SidePanel
          menuProps={{
            items: menuItems,
            selectedKeys: [current],
            defaultOpenKeys: ["ent", "admin"],
            onClick: ({ key }) => {
              let selectedItem = getSelectedMenuItem("key", key, menuItems);
              if (key === "alt") {
                router.push("/");
              } else {
                setCurrentMenuItem(selectedItem);
                setCurrent(key);
              }
            },
          }}
          panelSiderProps={{
            width: 300,
          }}
        >
          <HorizontalLayout.SidePanel.List
            selectedKeys={selectedKeys}
            dataSource={listDataSource}
            onClick={handleListItemClicked}
          />
        </HorizontalLayout.SidePanel>

        <HorizontalLayout.Content>
          <Breadcrumb
            items={[
              { title: "Home" },
              { title: "Entities" },
              { title: "Products" },
            ]}
          />

          <Typography.Title level={2}>{selected?.title}</Typography.Title>
          <Typography.Text>
            <Typography.Emphasis>Customer ID:</Typography.Emphasis>{" "}
            {selected?.description}{" "}
          </Typography.Text>

          <Tabs style={{ marginTop: 30 }} items={tabsItems} colorType="page" />
        </HorizontalLayout.Content>
      </HorizontalLayout>
    </HorizontalLayout>
  );
}
