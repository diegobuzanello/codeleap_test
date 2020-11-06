import React, { FormEvent, useState } from "react";
import { Button } from "../Button";
import "./styles.css";
import { connect, useDispatch } from "react-redux";
import { Input } from "../Input";
import { editPost } from "../../actions/index";

const ModalEdit = (props: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const id = props.idItem;

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  function handleEdit(e: FormEvent) {
    e.preventDefault();

    const data = {
      title,
      content,
    };

    dispatch(editPost(id, data));

    props.handleClose();
  }

  return (
    <div className={showHideClassName}>
      <div className="container-modal">
        <form onSubmit={handleEdit}>
          <h2>Edit item</h2>
          <Input
            label="Title"
            value={title}
            placeholder="Hello World"
            idName="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <Input
            label="Content"
            value={content}
            placeholder="Content here"
            idName="content"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />

          <div className="buttons">
            <Button title="SAVE" mode="contained" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default connect()(ModalEdit);
