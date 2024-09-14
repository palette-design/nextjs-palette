import {
  faBoxArchive,
  faGears,
  faHome,
  faPieChart,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const commonMenuItems: any[] = [
  {
    label: "Home",
    key: "home",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    label: "Entities",
    key: "ent",
    icon: <FontAwesomeIcon icon={faBoxArchive} />,
    children: [
      {
        label: "Products",
        key: "opt:1",
      },
    ],
  },
  {
    label: "Statistics",
    key: "stats",
    disabled: true,
    icon: <FontAwesomeIcon icon={faPieChart} />,
  },
  {
    label: `Settings`,
    key: "admin",
    icon: <FontAwesomeIcon icon={faGears} />,
    children: [
      {
        type: "group",
        label: "Group 1",
        children: [
          {
            label: "Sub Option 2",
            key: "opt:2",
          },
          {
            label: "Sub Option 3",
            key: "opt:3",
          },
        ],
      },
      {
        type: "group",
        label: "Group 2",
        children: [
          {
            label: "Sub Option 4",
            key: "opt:4",
          },
        ],
      },
    ],
  },
];

export const menuItems: any[] = [
  ...commonMenuItems,
  {
    label: "Alt. Layout",
    key: "alt",
    icon: <FontAwesomeIcon icon={faWindowRestore} />,
  },
];

export const useMenuStates = (): [
  string,
  any,
  (value: string) => void,
  (value: any) => void,
  (key: "key", selectedKey: React.Key, menuItems: any[]) => void
] => {
  const [currentMenuItem, setCurrentMenuItem] = useState(
    (menuItems[1] as any).children[0]
  );
  const [current, setCurrent] = useState("opt:1");

  const getSelectedMenuItem = (
    key: "key",
    selectedKey: React.Key,
    menuItems: any[]
  ): any | null => {
    if (!menuItems) {
      return null;
    }

    for (const item of menuItems) {
      if (item[key] === selectedKey) {
        return item;
      }

      if ("children" in item && item.children!.length > 0) {
        const foundInChildren = getSelectedMenuItem(
          key,
          selectedKey,
          item.children as any[]
        );
        if (foundInChildren) {
          return foundInChildren;
        }
      }
    }

    return null;
  };

  return [
    current,
    currentMenuItem,
    setCurrent,
    setCurrentMenuItem,
    getSelectedMenuItem,
  ];
};
