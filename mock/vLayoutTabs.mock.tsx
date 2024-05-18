import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { TabsProps, Row, Col, Space, Flex, Form as AntdForm } from "antd";
import { FilterFilled, CheckOutlined, CloseOutlined } from "@ant-design/icons";

/**
 * Hooks
 */
import {
  Button,
  Card,
  Checkbox,
  Select,
  Steps,
  Switch,
  usePaletteColors,
} from "palette-design";

/**
 * Components
 */

import { Form, Typography, RangePicker, Input } from "palette-design";

const FilterControl = ({
  title,
  children,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return <Form.Item label={title}>{children}</Form.Item>;
};

export const useTabsStates = (table: React.ReactNode, tabKey?: string) => {
  const [form] = AntdForm.useForm();
  const { colors } = usePaletteColors();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    /**
     * To show error message style
     */
    setTimeout(() => {
      form.validateFields();
    }, 500);
    setOpen(tabKey === "1" ? false : true);
  }, [tabKey]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "View All",
      children: (
        <Row style={{ marginBottom: 24 }} gutter={40}>
          <Col xs={{ span: 8 }} xxl={{ span: 6 }}>
            <Card
              title={
                <Space>
                  <FilterFilled />
                  <div>Filter</div>
                </Space>
              }
              subtitle={"Use these controls to find products"}
            >
              <Form>
                <FilterControl title={"Mauris sit Amet"}>
                  <Input placeholder={"e.g. non pulvinar neque"} />
                </FilterControl>

                <FilterControl title={"Sed Consequat"}>
                  <Space direction="vertical">
                    <Checkbox.Group
                      options={["Nullam Dictum", "Luctus Pulvinar"]}
                      value={["Nullam Dictum"]}
                    />
                  </Space>
                </FilterControl>

                <FilterControl title={"Mollitia Animi"}>
                  <RangePicker />
                </FilterControl>

                <FilterControl title={"Eligendi Nihil"}>
                  <Space size={"middle"}>
                    <div>Vel illum qui dolorem</div>
                    <Switch
                      checkedChildren={<CheckOutlined />}
                      unCheckedChildren={<CloseOutlined />}
                      defaultChecked
                    />
                  </Space>
                </FilterControl>

                <Flex vertical={true} style={{ marginTop: 40 }}>
                  <Button type={"primary"}>Find Product</Button>
                </Flex>
              </Form>
            </Card>
          </Col>

          <Col xs={{ span: 16 }} xxl={{ span: 18 }}>
            {table}
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: "Create New",
      children: (
        <Form form={form}>
          <Row style={{ marginBottom: 24 }} gutter={40}>
            <Col xs={{ span: 6 }} lg={{ span: 5 }} xxl={{ span: 4 }}>
              <Card plainBody={false}>
                <Typography.Title style={{ marginBottom: 20 }} level={4}>
                  Create New Product
                </Typography.Title>
                <Steps
                  direction={"vertical"}
                  current={1}
                  items={[
                    {
                      title: "Consequuntur",
                      description: "Quis ad galisum dolor eos",
                    },
                    {
                      title: "Officiis Qui",
                      description: (
                        <ul>
                          <li>Mollitia Magnam</li>
                          <li>Aenean Euismod</li>
                          <li>Pellentesque</li>
                        </ul>
                      ),
                    },
                    {
                      title: "Aut Animi Dolor",
                      description: "Est maiores aliquam",
                    },
                    {
                      title: "Summary",
                    },
                  ]}
                />
              </Card>
            </Col>

            <Col xs={{ span: 18 }} xxl={{ span: 12 }}>
              <Row style={{ marginBottom: 20 }}>
                <Col span={24}>
                  <Card
                    size="small"
                    title={"Officiis Qui"}
                    subtitle={"Faucibus nisl tincidunt eget nullam non nisi."}
                  >
                    <Row gutter={20}>
                      <Col span={24}>
                        <Form.Item
                          name="mm"
                          label={"Mollitia Magnam"}
                          initialValue={"Voluptates Qui"}
                          infoCopy={
                            <>
                              Massa sed elementum{" "}
                              <Typography.Emphasis color={colors.info.emphasis}>
                                tempus egestas
                              </Typography.Emphasis>{" "}
                              sed sed risus pretium. Iaculis at erat
                              pellentesque adipiscing commodo elit.
                            </>
                          }
                        >
                          <Input allowClear />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item
                          name="ae"
                          label={"Aenean Euismod"}
                          validateTrigger={"onBlur"}
                          initialValue={"Viverra Doloribus"}
                          rules={[
                            { max: 10, message: "Leo duis ut diam quam." },
                          ]}
                        >
                          <Input
                            placeholder="Please input your name"
                            allowClear
                          />
                        </Form.Item>
                      </Col>
                      <Col span={12}>
                        <Form.Item name="lname" label={"Pellentesque"}>
                          <Select
                            defaultValue={"lucy"}
                            open={open}
                            options={[
                              { value: "jack", label: "Jack" },
                              { value: "lucy", label: "Lucy" },
                              { value: "Yiminghe", label: "yiminghe" },
                              {
                                value: "disabled",
                                label: "Disabled",
                                disabled: true,
                              },
                            ]}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Card
                    size="small"
                    title={"Aut Animi Dolor"}
                    subtitle={
                      "Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac."
                    }
                  >
                    <Row gutter={20}>
                      <Col span={24}>
                        <Space
                          direction={"vertical"}
                          style={{ margin: `20px auto` }}
                        >
                          <Checkbox>
                            Sed at urna ac ipsum tempor varius nec vel ex. Etiam
                            sit amet viverra velit.{" "}
                          </Checkbox>
                          <Checkbox>
                            Sed semper nunc et justo scelerisque, vitae pharetra
                            metus dignissim. Curabitur vulputate turpis nec
                            fringilla consequat.
                          </Checkbox>
                        </Space>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      ),
    },
  ];

  return { items };
};
