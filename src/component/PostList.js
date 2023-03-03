import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard.js';
import '../Css/PostList.css'

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed');
        setPosts(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {isLoading ? (
        <div className="loader"></div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;
