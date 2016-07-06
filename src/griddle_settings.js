import React from 'react';
import Griddle from 'griddle-react';

const GriddleSettings = ({ data, columns }) => (
  <Griddle
    results={data}
    columnMetadata={columns}
    noDataMessage={'No settings data could be found.'}
    tableClassName="table"
  />
);

GriddleSettings.propTypes = {
  data: React.PropTypes.array,
  columns: React.PropTypes.object,
};

export default GriddleSettings;
