import {
  Button, Skeleton, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../layouts/Navbar';

function User() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  function getAll() {
    axios.get('https://northwind.vercel.app/api/products')
      .then((res) => setData(res.data));
  }
  function deleteById(id) {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`);
  }
  function HandleDelete(id) {
    deleteById(id);
    getAll();
  }
  useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ padding: '0 60px', display: 'flex', justifyContent: 'end' }}>
        <Button colorScheme="blue" color="white" onClick={() => { navigate('/user_create'); }}>Create User</Button>
      </div>
      {data.length === 0
        ? (
          <Stack style={{ padding: '0 60px' }}>
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
            <Skeleton height="40px" />
          </Stack>
        ) : (
          <TableContainer style={{ padding: '0 60px' }}>
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>into</Th>
                  <Th>multiply by</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.name}</Td>
                    <Td>falan</Td>
                    <Td>FIlan</Td>
                    <Td>
                      <Button mx="2" colorScheme="blue" onClick={() => { navigate(`/user_edit/${item.id}`); }}>Edit</Button>
                      <Button colorScheme="red" onClick={() => { HandleDelete(item.id); }}>Delete</Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
    </div>
  );
}

export default User;
