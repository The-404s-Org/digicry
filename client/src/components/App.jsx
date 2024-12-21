import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Analytics from './pages/Analytics';
import Login from './Login';


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/login" element={
        !isAuthticated ? <Login /> : <Navigate to="/" replace />
      } />

      <Route path="/" element={
        <ProtectedRoute>
          <Layout>
            <Home />
          </Layout>
        </ProtectedRoute>
      } />

      <Route path="/journal" element={
        <ProtectedRoute>
          <Layout>
            <Journal />
          </Layout>
        </ProtectedRoute>
      } />

      <Route path="/analytics" element={
        <ProtectedRoute>
          <Layout>
            <Analytics />
          </Layout>
        </ProtectedRoute>
      } />

    </Routes>
    </>
  );
};

export default App;