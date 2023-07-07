import { PropTypes } from 'prop-types';
import { Avatar, FriendsItem, Name, Status } from './FriendList.styled';

export const FriendItem = ({ data }) => {
	return (
		<>
			{data.map(({ avatar, name, isOnline, id }) => {
				return (
					<FriendsItem key={id}>
						<Status color={isOnline ? 'green' : 'red'} />
						<Avatar src={avatar} alt={name} />
						<Name>{name}</Name>
					</FriendsItem>
				);
			})}
		</>
	);
};

FriendItem.propTypes = {
	data: PropTypes.array,
};
