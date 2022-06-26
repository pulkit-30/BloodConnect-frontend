import React, { useContext, useEffect, useState } from 'react';
import Map from '../components/map/Map';
import Table from '../components/Table/Table';
import { route } from '../api';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../context/user/UserContext';
import Loader from '../components/loader/Loader';

function Availability() {
  const location = useLocation();
  const Auth = useContext(UserContext);
  const [data, updateData] = useState([]);
  const [loading, updateLoading] = useState(false);
  useEffect(() => {
    updateLoading(true);
    axios.get(route.Search + location.search).then((res) => {
      if (res.data.status === 'Success') {
        if (Auth.User) {
          res.data.data = res.data.data.filter((data) => {
            return data.email !== Auth.User.email;
          });
        }
        updateData(res.data.data);
        updateLoading(false);
      }
    });
    // eslint-disable-next-line
  }, [location.search]);
  return (
    <React.Fragment>
      {loading && (
        <section>
          <Loader />
        </section>
      )}
      {data.length !== 0 && (
        <section>
          <Table data={data} location={location} updateData={updateData} />
          <Map data={data} />
        </section>
      )}
    </React.Fragment>
  );
}

export default Availability;
