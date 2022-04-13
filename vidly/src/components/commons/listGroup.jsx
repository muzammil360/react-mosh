import React from "react";

const ListGroup = ({ items, selectedItem, onItemSelect }) => {
  return (
    <React.Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <li
            key={item}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ListGroup;
