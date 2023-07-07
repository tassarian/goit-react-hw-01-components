import { Container } from 'components/User/User.styled';
import { PropTypes } from 'prop-types';
import { List } from './FriendList.styled';
import { FriendItem } from './FriendsItem';

export const FriendList = ({ title, data }) => {
	return (
		<Container>
			<h2>{title}</h2>

			<List>
				<FriendItem data={data} />
			</List>
		</Container>
	);
};

FriendList.propTypes = {
	title: PropTypes.string,
	data: PropTypes.array,
};
