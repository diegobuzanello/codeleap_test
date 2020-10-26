import React, { FormEvent, useState } from "react";
import { connect } from "react-redux";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import "./styles.css";

var id = 0;

const PostForm = (props: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const username = props.username;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    id = id + 1;
    console.log(id);

    const data = {
      // id: (Math.random() * 10).toFixed(),
      id,
      username,
      created_datetime: new Date(),
      title,
      content,
      editing: false,
    };

    props.dispatch({
      type: "ADD_POST",
      data,
    });

    setTitle("");
    setContent("");

    console.log(props);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h2>What’s on your mind?</h2>
        <Input
          label="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Hello world"
          idName="title"
        />

        <TextArea
          label="Content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Content here"
          idName="content"
          rows={4}
        />

        <Button
          title="CREATE"
          type="submit"
          disabled={!content || !title}
          mode="contained"
        />
      </fieldset>
    </form>
  );
};

export default connect()(PostForm);
