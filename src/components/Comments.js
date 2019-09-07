import React, { Component } from "react";
import IconPerfil from "./IconPerfil";
function Comments({ author, content }) {
  return (
    <div>
      {<IconPerfil UserPerfil={author.avatar} />}
      <div id="comment">
        <p>
          <strong>{author.name} </strong>
          {content}
        </p>
      </div>
    </div>
  );
}

export default Comments;
