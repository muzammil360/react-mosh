import React from "react";

class TableHeader extends React.Component {
  raiseSort(path) {
    const currentPath = this.props.sortColumn.path;
    const currentOrder = this.props.sortColumn.order;

    var newOrder = "asc";

    if (path === currentPath)
      newOrder = currentOrder === "asc" ? "desc" : "asc";

    const sortColumn = { path: path, order: newOrder };
    this.props.onSort(sortColumn);
  }

  renderSortIcon = (item) => {
    const { sortColumn } = this.props;

    if (item.path !== sortColumn.path) {
      return null;
    }

    if (sortColumn.order === "asc") {
      return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
    } else if (sortColumn.order === "desc") {
      return <i className="fa fa-sort-desc" aria-hidden="true"></i>;
    }
  };

  getCellContent = (item) => {

    const sortableHeaderJsx = (
      <th
        key={item.id}
        className="clickable"
        onClick={() => this.raiseSort(item.path)}
      >
        {item.label} {this.renderSortIcon(item)}
      </th>
    );

    const nonSortableHeaderJsx = <th key={item.id}> {item.label}</th>;


    return item.path?sortableHeaderJsx:nonSortableHeaderJsx;

  };

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>{columns.map((item) => this.getCellContent(item))}</tr>
      </thead>
    );
  }
}

export default TableHeader;
