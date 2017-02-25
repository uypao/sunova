import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CarListRow = ({car}) => {
  return (
    <tr>
      <td>{car.name}</td>
      <td>{car.model}</td>
      <td>{car.engine}</td>
      <td>{car.color}</td>
    </tr>
  );
};

CarListRow.propTypes = {
  car: PropTypes.object.isRequired
};

export default CarListRow;
