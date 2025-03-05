import { Space, Table, Tag } from 'antd';
import { useEffect } from 'react';
const columns = [
  {
    title: 'Tracking Id',
    dataIndex: 'trackingId',
    key: 'trackingId',
    render: (text) => <a>{text}</a>,
  },
  {
  title: 'Name',
  key: 'Name',
  dataIndex: 'Name',
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
    useEffect(() => {
      console.log(data);
    })
    
    return (
        <Table columns={columns} dataSource={data} />
      );
}
export default CustomTable;