import React, { useEffect, useState } from 'react';
import Loader from '../loader/Loader';
function Map(props) {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    function showPosition(position) {
      var map = new global.MapmyIndia.Map('map', {
        center: [position.coords.latitude, position.coords.longitude],
        zoomControl: true,
        hybrid: true,
      });

      var mk = new global.L.Marker(
        [position.coords.latitude, position.coords.longitude],
        {
          title: 'You Location',
        }
      );
      mk.bindPopup('You Current Location');
      map.addLayer(mk);
      setLoading(false);

      props.data.forEach((user) => {
        if (
          user.permanentLocation?.latitude &&
          user.permanentLocation?.longitude
        ) {
          var mk = new global.L.Marker(
            [user.permanentLocation.latitude, user.permanentLocation.longitude],
            {
              title: user.username,
            }
          );
          mk.bindPopup(user.username);
          map.addLayer(mk);
        }
      });
    }
    return navigator.geolocation.getCurrentPosition(showPosition);
  }, [props.data]);

  return (
    <React.Fragment>
      <h1 className='mt-20 flex justify-center align-center text-3xl font-extrabold tracking-tight text-indigo-700 sm:text-4xl'>
        Map View
      </h1>
      <div
        id='map'
        className='w-11/12 h-96 m-auto mt-20 mb-20 mt-10 rounded-sm'
      >
        {isLoading && <Loader />}
      </div>
    </React.Fragment>
  );
}

export default Map;
