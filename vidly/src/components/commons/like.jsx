import React from "react";
class Like extends React.Component {
  render() {
    const className = this.props.liked ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <div>
        <i
          className={className}
          aria-hidden="true"
          style={{ cursor: "pointer" }}
          onClick = {this.props.onClick}
        ></i>
      </div>
    );
  }
}

export default Like;
