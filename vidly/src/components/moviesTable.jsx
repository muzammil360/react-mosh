import React from "react";
import { Link } from "react-router-dom";

import Like from "./commons/like";
import Table from "./commons/table";

const MoviesTable = ({ movies, sortColumn, onLike, onDelete, onSort }) => {
  const getTitleJsx = () => {
    return (item) => <Link to={`/movies/${item._id}`}>{item.title}</Link>;
  };

  const getLikeJsx = () => {
    return (item) => <Like liked={item.liked} onClick={() => onLike(item)} />;
  };

  const getDeleteJsx = () => {
    return (item) => (
      <button onClick={() => onDelete(item)} className="btn-danger btn-sm">
        Delete
      </button>
    );
  };

  const columns = [
    { id: "title", path: "title", label: "Title", content: getTitleJsx() },
    { id: "genreName", path: "genre.name", label: "Genre" },
    { id: "numberInStock", path: "numberInStock", label: "Stock" },
    { id: "dailyRentalRate", path: "dailyRentalRate", label: "Rate" },
    { id: "like", path: "", label: "Like", content: getLikeJsx() },
    { id: "delete", path: "", label: "Delete", content: getDeleteJsx() },
  ];

  return (
    <Table
      columns={columns}
      sortColumn={sortColumn}
      data={movies}
      onSort={onSort}
    />
  );
};

export default MoviesTable;
