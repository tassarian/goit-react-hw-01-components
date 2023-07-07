import { Container } from 'components/User/User.styled';
import { PropTypes } from 'prop-types';
import friends from '../../assets/friends.json';
import { Avatar, FriendsItem, Name, Status, List } from './FriendList.styled';

export const FriendList = ({ title }) => {
	return (
		<Container>
			<h2>{title}</h2>

			<List>
				{friends.map(({ avatar, name, isOnline, id }) => {
					return (
						<FriendsItem key={id}>
							<Status color={isOnline ? 'green' : 'red'} />
							<Avatar src={avatar} alt={name} />
							<Name>{name}</Name>
						</FriendsItem>
					);
				})}
			</List>
		</Container>
	);
};

FriendList.propTypes = {
	title: PropTypes.string,
};
