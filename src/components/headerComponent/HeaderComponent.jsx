import { Link, NavLink } from 'react-router-dom';
import './HeaderComponent.scss';
import React from 'react';

const HeaderComponent = () => {
	return (
		<>
			<div className="header-component w-100">
				<div className="container header-component-inner">

					<div className="header-top">
						<div className="header-logo">Test</div>

						<div className="header-search">
							<input type="text" id="search-top" />
						</div>

						<div className="head-action">
							<div className="head-auth">Login</div>
							<div className="head-auth">Loput</div>
						</div>
					</div>

					<div className="header-nav">
						<NavLink to={'/'}>Home</NavLink>
						<NavLink to={'/admin'}>Admin</NavLink>
					</div>

			
				</div>
			</div>
		</>
	);
};

export default HeaderComponent;
