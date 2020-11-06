import React from "react";
import "./styles.css";
import { connect, useSelector } from "react-redux";

import PostForm from "../../components/PostForm";
import Post from "../../components/Post";

const selectPosts = (state: any) => state.data;

function MainScreen({ location }: any) {
  const username = location.state.username;
  const posts = useSelector(selectPosts);

  return (
    <div id="container-mainscreen">
      <div className="header">
        <h2>CodeLeap Network</h2>
      </div>

      <PostForm username={username} />

      <main>
        {posts.map((post: any) => (
          <div key={post.id}>
            <Post username={username} post={post} key={post.id} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default connect()(MainScreen);
