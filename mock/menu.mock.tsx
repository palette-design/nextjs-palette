import { useState } from 'react'

import { MenuItemType, SubMenuType, MenuItemGroupType } from 'antd/es/menu/hooks/useItems'
import {
	HomeFilled,
	ReadFilled,
	ContainerFilled,
	PieChartFilled,
	SettingFilled,
	LayoutFilled
} from '@ant-design/icons'

type ItemType = (MenuItemType | SubMenuType | MenuItemGroupType)


const commonMenuItems: ItemType[] = [
	{
		label: 'Home',
		key: 'home',
		icon: <HomeFilled />
	},
	{
		label: 'Entities',
		key: 'ent',
		icon: <ContainerFilled />,
		children: [
			{
				label: 'Products',
				key: 'opt:1'
			}
		]
	},
	{
		label: 'Statistics',
		key: 'stats',
		disabled: true,
		icon: <PieChartFilled />
	},
	{
		label: `Settings`,
		key: 'admin',
		icon: <SettingFilled />,
		children: [
			{
				type: 'group',
				label: 'Group 1',
				children: [
					{
						label: 'Sub Option 2',
						key: 'opt:2',
					},
					{
						label: 'Sub Option 3',
						key: 'opt:3',
					},
				],
			},
			{
				type: 'group',
				label: 'Group 2',
				children: [
					{
						label: 'Sub Option 4',
						key: 'opt:4',
					}
				],
			},
		],
	}
]

export const menuItems: ItemType[] = [
	...commonMenuItems,
	{
		label: 'Alt. Layout',
		key: 'alt',
		icon: <LayoutFilled />
	}
]

export const unstyledMenuItems: ItemType[] = [
	...commonMenuItems,
	{
		label: 'Palette Design',
		key: 'pds',
		icon: <LayoutFilled />
	}
]

export const useMenuStates = (): [
	string,
	any,
	(value: string) => void,
	(value: any) => void,
	(key: 'key', selectedKey: React.Key, menuItems: ItemType[]) => void
] => {
	const [currentMenuItem, setCurrentMenuItem] = useState((menuItems[1] as SubMenuType).children[0])
	const [current, setCurrent] = useState('opt:1')

	const getSelectedMenuItem = (key: 'key', selectedKey: React.Key, menuItems: ItemType[]) : ItemType | null => {
		if (!menuItems) {
			return null
		}

		for (const item of menuItems) {
			if (item[key] === selectedKey) {
			  return item
			}

			if ('children' in item && item.children!.length > 0) {
				const foundInChildren = getSelectedMenuItem(key, selectedKey, item.children as ItemType[]);
				if (foundInChildren) {
					return foundInChildren
				}
			}
		  }
		
		  return null
	}

	return [current, currentMenuItem, setCurrent, setCurrentMenuItem, getSelectedMenuItem]
}
