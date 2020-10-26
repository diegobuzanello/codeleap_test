import React from "react";
import { Button } from "../Button";
import "./styles.css";
import { connect } from "react-redux";

const ModalDelete = (props: any) => {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  console.log(props);
  return (
    <div className={showHideClassName}>
      <div className="container-modal">
        <h2>Are you sure you want to delete this item?</h2>
        <div className="buttons">
          <Button title="Cancel" mode="outlined" onClick={props.handleClose} />
          <Button
            title="OK"
            mode="outlined"
            onClick={() =>
              props.dispatch({
                type: "DELETE_POST",
                id: props.idItem,
              })
            }
          />
        </div>

        {/* <h2>Edit item</h2>
        <Input label="Title" placeholder="Hello World" idName="content" />
        <Input label="Content" placeholder="Content here" idName="content" />
        <div className="buttons">
          <Button title="SAVE" mode="contained" onClick={handleClose} />
        </div> */}
      </div>
    </div>
  );
};

export default connect()(ModalDelete);
