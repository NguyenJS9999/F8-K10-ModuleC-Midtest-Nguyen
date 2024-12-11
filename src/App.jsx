import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HeaderComponent from './components/headerComponent/headerComponent';
import FooterComponent from './components/footerComponent/FooterComponent';
import NotFoundPage from './pages/NotFoundPage';

import ClientHomePage from './pages/client/ClientHomePage';

import AdminDashBoard from './pages/admin/AdminDashBoard/AdminDashBoard';
import ProductTable from './pages/admin/ProductTable/ProductTable';
import ProductForm from './pages/admin/ProductForm/ProductForm';

const App = () => {
	return (
		<>
			<HeaderComponent />
			<div className='container'>
				<Routes>
					<Route path="/" element={<ClientHomePage />} />

					<Route path="/admin" element={<AdminDashBoard />}>
						<Route
							path="/admin/product"
							element={<ProductTable />}
						/>
						<Route
							path="/admin/product/add"
							element={<ProductForm />}
						/>
						<Route
							path="/admin/product/update/:id"
							element={<ProductForm />}
						/>
					</Route>

					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>

			{/* ProductProvider */}

			<FooterComponent />
		</>
	);
};

export default App;
