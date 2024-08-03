"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../public/logo.svg";

/**
 * Mock
 */
import { useTableStates } from "@/mock/table.mock";
import { menuItems, useMenuStates } from "@/mock/menu.mock";
import { useTabsStates } from "@/mock/vLayoutTabs.mock";

/**
 * Features
 */
// import { ThemeSwitch } from "@/components/features/ThemeSwitch/ThemeSwitch";

import { VerticalLayout, Table, Input, Button } from "palette-design";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitch } from "@/components/features/ThemeSwitch/ThemeSwitch";
/**
 * Components
 */
// import { VerticalLayout } from '@/components/layouts/VerticalLayout/VerticalLayout'
// const { PageTabs } = VerticalLayout

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

export default function Home() {
  const router = useRouter();
  const [tabKey, setTabKey] = useState("1");
  const [
    current,
    currentMenuItem,
    setCurrent,
    setCurrentMenuItem,
    getSelectedMenuItem,
  ] = useMenuStates();
  const { items } = useTabsStates(<SampleTable />, tabKey);

  return (
    <VerticalLayout>
      <VerticalLayout.Header
        mastheadProps={{ type: "hidden" }}
        logo={<Image src={logo} alt={"Palette"} />}
        pageTitle={currentMenuItem?.label}
        pageDescription={"View and craeate new products in your store"}
        menuProps={{
          items: menuItems,
          selectedKeys: [current],
          onClick: ({ key }) => {
            let selectedItem = getSelectedMenuItem("key", key, menuItems);

            if (key === "alt") {
              router.push(key);
            } else {
              setCurrentMenuItem(selectedItem);
              setCurrent(key);
            }
          },
        }}
        breadcrumbProps={{
          items: [
            { title: "Home" },
            { title: "Entities" },
            { title: "Products" },
          ],
        }}
      >
        <VerticalLayout.Header.TrailingActions
          avatarProps={{
            userId: "wmaverk",
          }}
        >
          {/* Theme Switch */}
          <ThemeSwitch />

          {/* Search Input */}
          <Input
            placeholder="Search"
            prefix={<FontAwesomeIcon icon={faSearch} />}
            allowClear
          />

          {/* Notification Button */}
          <Button icon={<FontAwesomeIcon icon={faBell} />} />
        </VerticalLayout.Header.TrailingActions>
      </VerticalLayout.Header>

      <VerticalLayout.PageTabs
        items={items}
        onTabClick={(key) => setTabKey(key)}
      />
    </VerticalLayout>
  );
}
