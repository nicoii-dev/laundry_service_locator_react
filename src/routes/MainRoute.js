import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
//
import { getLocalStorageItem } from '../lib/util/getLocalStorage';

// pages
import DashboardLayout from '../components/layout/dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';
// admin
import AdminDashboardPage from '../pages/Admin/AdminDashboardPage';
import ReportsPage from '../pages/Admin/ReportsPage';
import UsersPage from '../pages/Admin/UsersPage';
// user
import HomePage from '../pages/User/HomePage';
import AboutPage from '../pages/User/AboutPage';
// labandero
import LabanderoDashboardPage from '../pages/Labandero/LabanderoDashboardPage';
import LabanderoProfilePage from '../pages/Labandero/LabanderoProfilePage';
// shop
import ShopDashboardPage from '../pages/Shop/ShopDashboardPage';
import ServicesPage from '../pages/Shop/ServicesPage';

// ----------------------------------------------------------------------

export default function MainRoute() {
  const location = useLocation();
  const userData = getLocalStorageItem('userData');
  const user = 'shop1'
  
  if (user === 'admin') {
    return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="*" element={<Navigate to="404" state={{ from: location }} replace />} />
        </Route>
        <Route path="404" element={<Page404 />} />
      </Routes>
    );
  }

  if (user === 'user') {
    return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="404" state={{ from: location }} replace />} />
        </Route>
        <Route path="404" element={<Page404 />} />
      </Routes>
    );
  }

  if (user === 'labandero') {
    return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="home" element={<LabanderoDashboardPage />} />
          <Route path="profile" element={<LabanderoProfilePage />} />
          <Route path="*" element={<Navigate to="404" state={{ from: location }} replace />} />
        </Route>
        <Route path="404" element={<Page404 />} />
      </Routes>
    );
  }

  if (user === 'shop') {
    return (
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="services" element={<ShopDashboardPage />} />
          <Route path="profile" element={<ServicesPage />} />
          <Route path="*" element={<Navigate to="404" state={{ from: location }} replace />} />
        </Route>
        <Route path="404" element={<Page404 />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" state={{ from: location }} replace />} />
    </Routes>
  );
}
