import React, { useState } from "react";

const Todo = () => {
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>📒 Add Your List Here </figcaption>
        </figure>
        <div className="addItems">
          <input type="text" placeholder="✍️ Add Items.." />
          <i className="fa fa-plus add-btn"></i>
        </div>

        <div className="showItems"></div>
        <div className="showItems">
          <button className="btn effet04" data--sm-link-text="remove All">
            <span> 🗑 Clear-Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
