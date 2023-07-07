import { Container } from 'components/User/User.styled';
import data from '../../assets/transactions.json';
import { TableData, TableHeader } from './TransactionHistory.styled';
import { PropTypes } from 'prop-types';

export const TransactionsHistory = ({ title }) => {
	return (
		<Container>
			<h2>{title}</h2>
			<table>
				<thead>
					<tr>
						<TableHeader>Type</TableHeader>
						<TableHeader>Amount</TableHeader>
						<TableHeader>Currency</TableHeader>
					</tr>
				</thead>

				<tbody>
					{data.map(({ id, type, amount, currency }) => {
						return (
							<tr key={id}>
								<TableData fontc="white" color="darkred">
									{type}
								</TableData>
								<TableData>{amount}</TableData>
								<TableData>{currency}</TableData>
							</tr>
						);
					})}
				</tbody>
			</table>
		</Container>
	);
};

TransactionsHistory.propTypes = {
	title: PropTypes.string,
};
