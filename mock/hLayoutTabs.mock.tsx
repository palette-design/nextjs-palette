import { TabsProps, Row, Col, MenuProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faKey,
  faUser,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Components
 */
import {
  Typography,
  Form,
  Input,
  Card,
  Button,
  Menu,
  BasicPanel,
} from "palette-design";

type MenuItem = Required<MenuProps>["items"][number];

const getMenuItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

export const useTabsStates = (table: React.ReactNode) => {
  const menuItems: MenuProps["items"] = [
    getMenuItem(
      "General",
      "grp",
      null,
      [
        getMenuItem("Profile", "1", <FontAwesomeIcon icon={faUser} />),
        getMenuItem("Account", "2", <FontAwesomeIcon icon={faKey} />),
      ],
      "group"
    ),
    getMenuItem(
      "System",
      "grp",
      null,
      [
        getMenuItem(
          "Notifications",
          "3",
          <FontAwesomeIcon icon={faComments} />
        ),
        getMenuItem("Preferences", "4", <FontAwesomeIcon icon={faWrench} />),
      ],
      "group"
    ),
  ];

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "View All",
      children: <Row style={{ marginBottom: 24 }}>{table}</Row>,
    },
    {
      key: "2",
      label: "Settings",
      children: (
        <Row style={{ marginBottom: 24 }} gutter={40}>
          <Col xs={{ span: 8 }} xxl={{ span: 6 }}>
            <Card size={"small"} plainBody={false}>
              <Menu
                items={menuItems}
                selectedKeys={["1"]}
                mode="inline"
                borderInline="none"
              />
            </Card>
          </Col>

          <Col xs={{ span: 16 }} xxl={{ span: 18 }}>
            <div style={{ marginBottom: 40 }}>
              <Typography.Title level={4}>Profile</Typography.Title>
              <Typography.Text>
                The customer will be notified via email of any changes to their
                profile.
              </Typography.Text>
            </div>

            <Form>
              <BasicPanel>
                <Typography.Title level={5} style={{ marginBottom: 20 }}>
                  Basic Information
                </Typography.Title>
                <Row gutter={20}>
                  <Col span={12}>
                    <Form.Item name="fname" label={"First Name"}>
                      <Input placeholder="" allowClear />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="lname" label={"Last Name"}>
                      <Input
                        placeholder=""
                        maxLength={30}
                        count={{ show: true }}
                        allowClear
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={20}>
                  <Col span={24}>
                    <Form.Item name="about" label={"Background"}>
                      <Input.TextArea
                        placeholder="Provide necessary background details"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                        maxLength={1000}
                        allowClear
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row style={{ marginTop: 20 }} gutter={20} justify={"end"}>
                  <Button type={"primary"}>Save Changes</Button>
                </Row>
              </BasicPanel>
            </Form>
          </Col>
        </Row>
      ),
    },
  ];

  return { items };
};
