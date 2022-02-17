import React from 'react';
import StockMarkerLogo from './stock.png'; // Cat resolve file that place on top of src

export default function StockSelectOption({ stock }) {
	return (
		<div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				<div style={{ margin: '7px' }}>
					<img src={StockMarkerLogo} height="40" width="40"/>
				</div>

				<div>
					<div className="green" style={{ fontSize: '18px' }}>{stock.name}</div>
					<div>
						{stock.cityId.city}, {stock.address}
					</div>
				</div>

				<div style={{ borderRight: '1px solid lightgrey', marginLeft: '15px', marginRight: '15px' }}> </div>

				<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<i style={{ margin: '3px', marginRight: '5px' }} className="fas fa-2x fa-clock blue"></i>
					<div className="green" style={{ fontSize: '20px' }}>24/7</div>
				</div>

				<div style={{ borderRight: '1px solid lightgrey', marginLeft: '15px', marginRight: '15px' }}> </div>

				<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<i style={{ margin: '3px' }} className="fas fa-phone"></i>{stock.phone}
				</div>
			</div>
		</div>
	);
}
