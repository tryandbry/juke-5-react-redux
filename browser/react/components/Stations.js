import React from 'react';
import {Link} from 'react-router';

export default function Stations (props) {

  /*
  const DUMMY_STATIONS_DATA = [
    { name: '90s Hip Hop' },
    { name: 'Death Metal' },
    { name: 'Classical' }
  ];
  */
  const STATIONS_DATA = props.stations;


  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(STATIONS_DATA).map(genre => {
          return (
            <div className="list-group-item" key={genre}>
              <Link to={`/stations/${genre}`}>{genre}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );

}
