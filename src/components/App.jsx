import { Component } from 'react';
import { User } from './User/User';
import { Statistics } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';

export class App extends Component {
	render() {
		return (
			<>
				<User title="Profile" />
				<Statistics title="Statistic" />
				<FriendList title="Friends list" />
				<TransactionsHistory title="Transaction history" />
			</>
		);
	}
}
