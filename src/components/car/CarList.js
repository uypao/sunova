import React, {PropTypes} from 'react';
import CarListRow from './CarListRow';

const CarList = ({cars}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>NAME</th>
          <th>MODEL</th>
          <th>ENGINE</th>
          <th>COLOR</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car =>
          <CarListRow car={car} />
        )}
      </tbody>
    </table>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarList;
