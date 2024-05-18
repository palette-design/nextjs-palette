import dynamic from 'next/dynamic'
import { TabsProps, Row, Col, MenuProps } from 'antd'
import { UserOutlined, KeyOutlined, NotificationOutlined, ToolOutlined } from '@ant-design/icons'

/**
 * Components
 */

const Title = dynamic(() => import('palette-design').then((mod) => mod.Typography.Title), { ssr: false })
const Text = dynamic(() => import('palette-design').then((mod) => mod.Typography.Text), { ssr: false })
const Form = dynamic(() => import('palette-design').then((mod) => mod.Form), { ssr: false })
const Item = dynamic(() => import('palette-design').then((mod) => mod.Form.Item), { ssr: false })
const Input = dynamic(() => import('palette-design').then((mod) => mod.Input), { ssr: false })
const TextArea = dynamic(() => import('palette-design').then((mod) => mod.Input.TextArea), { ssr: false })
const Card = dynamic(() => import('palette-design').then((mod) => mod.Card), { ssr: false })
const Button = dynamic(() => import('palette-design').then((mod) => mod.Button), { ssr: false })
const Menu = dynamic(() => import('palette-design').then((mod) => mod.Menu), { ssr: false })
const BasicPanel = dynamic(() => import('palette-design').then((mod) => mod.BasicPanel), { ssr: false })

type MenuItem = Required<MenuProps>['items'][number]

const getMenuItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

export const useTabsStates = (table: React.ReactNode) => {
    const menuItems: MenuProps['items'] = [
        getMenuItem(
            'General',
            'grp',
            null,
            [
                getMenuItem('Profile', '1', <UserOutlined />),
                getMenuItem('Account', '2', <KeyOutlined />)
            ],
            'group'
        ),
        getMenuItem(
            'System',
            'grp',
            null,
            [
                getMenuItem('Notifications', '3', <NotificationOutlined />),
                getMenuItem('Preferences', '4', <ToolOutlined />)
            ],
            'group'
        ),
        // getMenuItem('Navigation One', 'sub1', null, [
        //     getMenuItem('Item 1', 'g1', null, [getMenuItem('Option 1', '1'), getMenuItem('Option 2', '2')], 'group'),
        //     getMenuItem('Item 2', 'g2', null, [getMenuItem('Option 3', '3'), getMenuItem('Option 4', '4')], 'group'),
        // ]),

        // getMenuItem('Navigation Two', 'sub2', null, [
        //     getMenuItem('Option 5', '5'),
        //     getMenuItem('Option 6', '6'),
        //     getMenuItem('Submenu', 'sub3', null, [getMenuItem('Option 7', '7'), getMenuItem('Option 8', '8')]),
        // ]),
    ]


    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'View All',
            children: (
                <Row style={{ marginBottom: 24 }}>
                    {table}
                </Row>
            )
        },
        {
            key: '2',
            label: 'Settings',
            children: (
                <Row style={{ marginBottom: 24 }} gutter={40}>
                    <Col xs={{ span: 8 }} xxl={{ span: 6 }}>
                        <Card size={'small'} plainBody={false}>
                            <Menu items={menuItems} selectedKeys={['1']} mode="inline" borderInline='none' />
                        </Card>
                    </Col>

                    <Col xs={{ span: 16 }} xxl={{ span: 18 }}>
                        <div style={{ marginBottom: 40 }}>
                            <Title level={4} >Profile</Title>
                            <Text>The customer will be notified via email of any changes to their profile.</Text>
                        </div>


                        <Form>
                            <BasicPanel>
                                <Title level={5} style={{ marginBottom: 20 }}>Basic Information</Title>
                                <Row gutter={20}>
                                    <Col span={12}>
                                        <Item
                                            name="fname"
                                            label={'First Name'}>
                                            <Input
                                                placeholder=""
                                                allowClear />
                                        </Item>
                                    </Col>
                                    <Col span={12}>
                                        <Item
                                            name="lname"
                                            label={'Last Name'}>
                                            <Input
                                                placeholder=""
                                                maxLength={30}
                                                count={{ show: true }}
                                                allowClear />
                                        </Item>
                                    </Col>
                                </Row>
                                <Row gutter={20}>
                                    <Col span={24}>
                                        <Item
                                            name="about"
                                            label={'Background'}>
                                            <TextArea
                                                placeholder="Provide necessary background details"
                                                autoSize={{ minRows: 3, maxRows: 5 }}
                                                maxLength={1000}
                                                allowClear />
                                        </Item>
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: 20 }} gutter={20} justify={'end'}>
                                    <Button type={'primary'}>Save Changes</Button>
                                </Row>
                            </BasicPanel>
                        </Form>
                    </Col>
                </Row>
            )
        }
    ]

    return { items }
}
