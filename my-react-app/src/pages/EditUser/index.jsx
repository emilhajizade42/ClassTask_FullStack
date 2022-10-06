import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const [user, setuser] = useState({});
  useEffect(() => {
    axios.get(`https://northwind.vercel.app/api/products/${id}`)
      .then((res) => setuser(res.data));
  }, []);

  return (
    <div>
      <h1>
        EditUser
        {' '}
        {id}
      </h1>
      <h1>{user.name}</h1>
      <h1>{user.id}</h1>
      <form />
    </div>
  );
}

export default EditUser;
