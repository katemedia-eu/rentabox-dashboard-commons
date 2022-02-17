import React from 'react';
import Select from 'react-select';
import StockSelectOption from './StockSelectOption';

export default class StockSelector extends React.PureComponent {
	getStockSelectorOptions = () => {
		let selectorOptions = this.props.stocks.map(stock => ({
			label: <StockSelectOption stock={stock} />,
			value: stock,
		}));

		return selectorOptions;
	}

	render() {
		let { stock, languageSchema, onChange } = this.props;

		let stockForSelector = stock ? {
			label: <StockSelectOption stock={stock} />,
			value: stock,
		} : null;

		return (
			<Select
				styles={{
					container: (styles) => ({ ...styles, height: '55px' }),
					valueContainer: (styles) => ({ ...styles, height: '60px' }),
				}}
				options={this.getStockSelectorOptions()}
				value={stockForSelector}
				onChange={onChange}
				placeholder={languageSchema.BoxBooking.selectStock}
				name={'stockId'}
				isDisabled={this.props.disabled}
			/>
		);
	}
}
