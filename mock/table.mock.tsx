import { TableProps, Space, Divider } from "antd";

/**
 * Hooks
 */
import { usePaletteColors } from "palette-design";

/**
 * Components
 */
import { Typography, Button, Tag, Table } from "palette-design";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faFilter,
  faGift,
  faPrint,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const { ActionBar } = Table;

interface DataType {
  key: string;
  name: string;
  pid: string;
  price: number;
  description: string;
  status: string;
}

const dataSource: DataType[] = [
  {
    key: "1",
    pid: "PRD001",
    name: "Classic T-Shirt",
    status: "Pending",
    description: "A classic cotton t-shirt suitable for everyday wear.",
    price: 19.99,
  },
  {
    key: "2",
    pid: "PRD002",
    name: "Wireless Bluetooth Earbuds",
    status: "Pending",
    description:
      "High-quality wireless earbuds with Bluetooth connectivity for an immersive audio experience.",
    price: 49.99,
  },
  {
    key: "3",
    pid: "PRD003",
    name: "Leather Wallet",
    status: "Expired",
    description:
      "A stylish and durable leather wallet with multiple card slots and compartments.",
    price: 29.99,
  },
  {
    key: "4",
    pid: "PRD004",
    name: "Stainless Steel Water Bottle",
    status: "Pending",
    description:
      "A durable stainless steel water bottle, perfect for staying hydrated on the go.",
    price: 15.99,
  },
];

export const useTableStates = () => {
  const { colors } = usePaletteColors();

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Loan Item",
      dataIndex: "name",
      key: "name",
      width: 280,
      render: (text, record) => (
        <>
          <Typography.Overline>{record.pid}</Typography.Overline>
          <div>
            <Typography.Text style={{ fontWeight: 600 }}>
              {text}
            </Typography.Text>
          </div>
        </>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => <>${text}</>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          <Tag
            color={
              status === "Pending" ? colors.info.primary : colors.error.primary
            }
            key={status}
          >
            {status.toUpperCase()}
          </Tag>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (_, record) => (
        <Space>
          <Button icon={<FontAwesomeIcon icon={faTrash} />} />
          <Button icon={<FontAwesomeIcon icon={faDownload} />} />
        </Space>
      ),
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const title = (
    <ActionBar>
      <Button type="primary">Add New Product</Button>
      <Button icon={<FontAwesomeIcon icon={faPrint} />}></Button>
      <Button icon={<FontAwesomeIcon icon={faGift} />}></Button>

      <Divider style={{ marginInline: 20 }} type="vertical" />

      <Space size={"middle"}>
        <Space>
          <FontAwesomeIcon icon={faFilter} />
          <Typography.Overline>Quick Filter:</Typography.Overline>
        </Space>
        <div>
          <Typography.Text
            level={1}
            style={{
              color: colors.info.primary,
              fontWeight: 700,
              marginRight: 5,
            }}
          >
            3
          </Typography.Text>
          <Typography.Text level={2} style={{ fontWeight: 600 }}>
            Pending
          </Typography.Text>
        </div>
        <div>
          <Typography.Text
            level={1}
            style={{
              color: colors.error.primary,
              fontWeight: 700,
              marginRight: 5,
            }}
          >
            1
          </Typography.Text>
          <Typography.Text level={2} style={{ fontWeight: 600 }}>
            Expired
          </Typography.Text>
        </div>
      </Space>
    </ActionBar>
  );

  return { title, columns, dataSource, onChange };
};
