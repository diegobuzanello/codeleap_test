import React, { FormEvent, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Button } from "../Button";
import { Input } from "../Input";
import { TextArea } from "../TextArea";
import { saveNewPost } from "../../actions/index";
import "./styles.css";

const PostForm = ({ username }: any) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const data = {
      username,
      title,
      content,
    };

    const saveNewPostThunk = saveNewPost(data);
    dispatch(saveNewPostThunk);

    setTitle("");
    setContent("");
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
