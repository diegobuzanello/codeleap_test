import React, { useEffect } from "react";
import "./styles.css";
import { connect } from "react-redux";

import PostForm from "../../components/PostForm";
import Post from "../../components/Post";

import api from "../../actions/api";

const mapStateToProps = (state: any) => {
  return {
    posts: state.sort((a: any, b: any) => {
      return b.created_datetime - a.created_datetime;
    }),
  };
};

function MainScreen(props: any) {
  const username = props.location.state.username;

  useEffect(() => {
    api
      .get("")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div id="container-mainscreen">
      <div className="header">
        <h2>CodeLeap Network</h2>
      </div>

      <PostForm username={username} />

      <main>
        {props.posts.map((post: any) => (
          <div key={post.id}>
            <Post username={username} post={post} key={post.id} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default connect(mapStateToProps)(MainScreen);
