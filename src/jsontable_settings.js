import React from 'react';
import JsonTable from 'react-json-table';

const settings = {
  noRowsMessage: 'No settings data could be found.',
};

const JsonTableSettings = ({ data, columns }) => (
  <JsonTable
    rows={data}
    columns={columns}
    settings={settings}
  />
);

JsonTableSettings.propTypes = {
  data: React.PropTypes.array,
  columns: React.PropTypes.array,
};

export default JsonTableSettings;
