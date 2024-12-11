// import { Outlet,  } from 'react-router-dom';
import './AdminDashBoard.scss';
import React from 'react';

const AdminDashBoard = () => {
  // const nav = useNavigate();
	// const [role, setrole] = useState('admin');

	return (
		<div>
			<h1>DashBoard</h1>
      {/* <Outlet /> */}
			{/* {role === 'admin' ? nav('./login') : <Outlet />} */}
		</div>
	);
};

export default AdminDashBoard;
