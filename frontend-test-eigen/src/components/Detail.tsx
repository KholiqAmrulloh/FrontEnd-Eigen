import React, { useMemo } from 'react';
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import Article from '../types/article'


const Detail = () => {
     const location = useLocation();
     const article = useMemo<Article>(() => {
          return location.state
     }, []);

     return (
          <>
               <div style={{ margin: 5, padding: 5 }}>
                    <div>
                         <p><b>Author : </b>{article.author}</p>
                         <p><b>Title : </b>{article.title}</p>
                         <p><b>Description : </b>{article.description}</p>
                         <p><b>Content : </b>{article.content}</p>
                         <p><b>Url : </b><Link to={article.url}>{article.url}</Link></p>
                         <p><b>Url To Image : </b><Link to={article.urlToImage}>{article.urlToImage}</Link></p>
                         <p><b>Published At : </b>{article.publishedAt}</p>
                    </div>
                    <div style={{ flex: 1, textAlign: 'end', marginRight: 50 }}>
                         <Button type='primary'>
                              <Link to='/'>Kembali</Link>
                         </Button>
                    </div>
               </div>
          </>
     );
}

export default Detail;