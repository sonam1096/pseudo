
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import PostList from './component/PostList';

axios
  .get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed')
  .then(response => {
    const posts = response.data;
    ReactDOM.render(<PostList posts={posts} />, document.getElementById('root'));
  })
  .catch(error => {
    console.log(error);
  });
