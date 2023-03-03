import React from 'react';
import '../Css/PostCard.css'

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.jetpack_featured_media_url} alt={post.title.rendered} />
      <div className="post-content">
        <h3>{post.title.rendered}</h3>
        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default PostCard;
