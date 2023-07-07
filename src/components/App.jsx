import { Component } from 'react';
import { User } from './User/User';
import { Statistics } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionsHistory } from './TransactionHistory/TransactionHistory';
import statData from '../assets/data.json';
import friendsData from '../assets/friends.json';
import userData from '../assets/user.json';
import transactionsData from '../assets/transactions.json';

const { username, tag, location, avatar, stats } = userData;

export class App extends Component {
	render() {
		return (
			<>
				<User
					title="Profile"
					username={username}
					tag={tag}
					location={location}
					avatar={avatar}
					stats={stats}
				/>
				<Statistics
					title="Uploading Stats"
					sectionTitle="Statistic"
					data={statData}
				/>
				<FriendList title="Friends list" data={friendsData} />
				<TransactionsHistory
					title="Transaction history"
					data={transactionsData}
				/>
			</>
		);
	}
}
