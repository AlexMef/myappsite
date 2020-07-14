import React from 'react';
import './styles/Posts.scss';

function Posts() {
    return (
        <div className="postsContainer">
            <div className="postItems">
                <div className="post">пост1</div>
                <div className="post">пост2</div>
                <div className="post">пост3</div>
                <div className="post">пост4</div>
            </div>
        </div>
    );
}

export default Posts;