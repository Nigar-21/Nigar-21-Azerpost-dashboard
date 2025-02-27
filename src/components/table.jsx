import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Tracking Id',
    dataIndex: 'TrackingId',
    key: 'TrackingId',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Company',
    dataIndex: 'Company',
    key: 'Company',
  },
  {
    title: 'index',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Weight',
    key: 'weight',
    dataIndex: 'weight',
  },
];
const data = [
  {
    key: '1',
    TrackingId: '1234567',
    Company: 'Trendyol',
    index: '1',
    weight:'2',
  },
  {
    key: '2',
    TrackingId: '567890',
    Company: 'Trendyol',
    index: '1',
    weight:'2',
  }
];
const CustomTable = () => <Table columns={columns} dataSource={data} />;
export default CustomTable;