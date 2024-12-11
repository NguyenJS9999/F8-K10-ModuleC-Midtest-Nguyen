import './ClientHomePage.scss';
import React, { useEffect, useState } from 'react';
import { getAll } from '../../axios/crud';
import { Link } from 'react-router-dom';

const ClientHomePage = () => {
	console.log('ClientHomePage: ');

	useEffect(() => {
		getListProduct();
	}, []);

	const [product, setProduct] = useState();

	async function getListProduct() {
		const res = await getAll('/products');
		console.log('getAll res ', res);
		setProduct(res);
	}

	return (
		<div className="client-home-copmponent">
			<div className="client-home-title mt-4 ">Products list</div>

			<div className="client-product-wraper mt-2">
				<div className="client-product-list">
					{product &&
						product.map(item => {
							return (
								<>
									<div className="home-product-item">
										<div className="image">
											<img
												src={item?.thumbnail}
												alt={item?.title}
											/>
										</div>

										<div className="product-infors">
											<div className="product-name">
												<span>{item?.title}</span>
											</div>
											<div className="product-desctription">
												{item?.description}
											</div>
											<div className="product-price">
												{item?.price} $
											</div>
										</div>


										<Link to={"/"} className="product-infors">
											Xem chi tiết
										</Link>

									</div>
								</>
							);
						})}
				</div>
			</div>
		</div>
	);
};

export default ClientHomePage;
