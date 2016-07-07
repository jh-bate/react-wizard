import React from 'react';
import { Table } from 'reactable';

const ReactableSettings = ({ columns, data }) => (
  <Table
    data={data}
    columns={columns}
    className="table"
  />
);

ReactableSettings.propTypes = {
  data: React.PropTypes.array,
  columns: React.PropTypes.array,
};

export default ReactableSettings;
