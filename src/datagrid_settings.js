import React from 'react';
import DataGrid from 'react-datagrid';
import cssModules from 'react-css-modules';
import styles from 'react-datagrid/index.css';

const DataGridSettings = ({ columns, data }) => (
  <DataGrid
    idProperty="start"
    columns={columns}
    dataSource={data}
  />
);

DataGridSettings.propTypes = {
  columns: React.PropTypes.array,
  data: React.PropTypes.array,
};

export default cssModules(DataGridSettings, styles);
