import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header';

import Loader from 'components/Loader/Loader';
import { Container } from './App.styled';

const HomePage = lazy(() => import('Pages/HomePage'));
const MoviePage = lazy(() => import('Pages/MoviePage'));
const MovieDetailsPage = lazy(() => import('Pages/MovieDetailsPage'));

export const App = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
