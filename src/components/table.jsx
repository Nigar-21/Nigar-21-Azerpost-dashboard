import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Tracking Id',
    dataIndex: 'trackingId',
    key: 'trackingId',
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

const CustomTable = ({data}) =>{ 
    return (
        <Table columns={columns} dataSource={data} />
      );
}
export default CustomTable;