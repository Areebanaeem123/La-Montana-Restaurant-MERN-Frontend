import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Dashboard from './pages/Dashboard';
import './styles/Dashboard.css'; // Make sure this path is correct
import Login from './pages/Login'; // Import the Login component
import SignUp from './pages/sighnup';//importing the sighup 
import AdminDashboard from './pages/AdminDashboard';//importing the admin dashboard
import AdminHome from './pages/AdminHome';
import Managemenu from './pages/ManageMenu';
import DishDetails from './pages/DishDetails';
import ManageStaff from './pages/ManageStaff';
import StaffDetails from './pages/StaffDetails';
import AdminReport from './pages/AdminReport';
import AddMenuForm from './components/addMenuForm';
import UpdateMenuForm from './components/updateMenuForm'; // Fixed import
import AddStaffForm from './components/addStaffForm';
import UpdateStaffForm from './components/updateStaffForm'; // Fixed import
import TableMgt from './pages/TableMgt';
import OrderQueueMgt from './pages/OrderQueueMgt';
import ReservationPage from './pages/ReservationPage';
import BillingPage from './pages/BillingPage';
import SpecialDishMgt from './pages/SpecialDishMgt';
import InventoryMgt from './pages/InventoryMgt';
import UpdateStock from './pages/UpdateStock';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Dashboard />} /> Dashboard route */}
          <Route path="/login" element={<Login />} /> {/* Login page route */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/Managemenu" element={<Managemenu />} />
          <Route path="/DishDetails" element={<DishDetails />} />
          <Route path="/ManageStaff" element={<ManageStaff />} />
          <Route path="/StaffDetails" element={<StaffDetails />} />
          <Route path="/AdminReport" element={<AdminReport />} />
          <Route path="/AddMenuForm" element={<AddMenuForm />} />
          <Route path="/UpdateMenuForm" element={<UpdateMenuForm />} /> {/* Updated route */}
          <Route path="/AddStaffForm" element={<AddStaffForm />} />
          <Route path="/UpdateStaffForm" element={<UpdateStaffForm />} /> {/* Updated route */}
          
          <Route path='/table-management' element={<TableMgt />} />
          <Route path='/order-queue' element={<OrderQueueMgt />} />
          <Route path='/reservation-page' element={<ReservationPage />} />
          <Route path='/billing' element={<BillingPage />} />
          <Route path='/special-dish' element={<SpecialDishMgt />} />
          <Route path='/inventory-management' element={<InventoryMgt />} />
          <Route path='/update-stock' element={<UpdateStock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
