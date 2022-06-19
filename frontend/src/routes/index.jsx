import { CircularProgress } from '@mui/material';
import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
const Routes = (props) => {
  return (
    <Routes>
      <Route element={<CircularProgress />}></Route>
    </Routes>
  );
};
