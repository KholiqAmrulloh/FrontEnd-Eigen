import { Button, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Article from '../types/article';

const baseURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3647619299fd423186b15f4f919fd9f4";

const Home = () => {
     const [dataSource, setDataSource] = useState();
     const columns: ColumnsType<Article> = [
          {
               title: 'Author',
               dataIndex: 'author'
          },
          {
               title: 'Title',
               dataIndex: 'title'
          },
          {
               title: 'Published At',
               dataIndex: 'publishedAt'
          },
          {
               title: 'Action',
               key: 'x',
               render: (text, record) => (
                    <Space size='middle'>
                         <Button type='primary'>
                              <Link
                                   to='/detail'
                                   state={record}
                              >
                                   Detail
                              </Link>
                         </Button>
                    </Space>
               ),
          }
     ]

     useEffect(() => {
          axios.get(baseURL)
               .then(res => {
                    setDataSource(res.data.articles);
               })
     }, [])

     return (
          <>
               <h1>Kholiq Amrulloh</h1>
               <Table
                    columns={columns}
                    dataSource={dataSource}
               />
          </>
     );
}

export default Home;