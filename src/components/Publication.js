import React from "react";
import IconPerfil from "./IconPerfil";
import Comments from "./Comments";
import PropTypes from "prop-types";
function Publication({ author, date, content, comments }) {
  return (
    <div id="publication">
      <div id="user">
        {<IconPerfil UserPerfil={author.avatar} />}
        <p id="username">{author.name}</p>
        <p id="date">{date}</p>
      </div>
      <p>{content}</p>
      <div id="div_trace">
        <hr id="trace" />
      </div>
      {comments.map(coment => {
        return <Comments key={coment.id} {...coment} />;
      })}
      <div className="clear"></div>
    </div>
  );
}
/*
Publication.propTypes = {
  teste: PropTypes.object,
  name: PropTypes.string
};*/

export default Publication;
