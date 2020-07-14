import React from 'react';
import './styles/PostsMenu.scss';


function PostsMenu() {
    return (
        <div className="menuItems">
            <div class="item"><a href="#">This is my first app</a></div>
            <div class="item"><a href="#">Support and upvotes appreciated</a></div>
            <div class="item"><a href="#">Wow, it's amazing</a></div>
            <div class="item"><a href="#">Don't give up!</a></div>
            <div class="item"><a href="#">Never gonna give you up</a></div>
            <div class="item"><a href="#">Praise the sun</a></div>
        </div>
    );
}

export default PostsMenu;