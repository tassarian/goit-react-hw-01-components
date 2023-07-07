import {
	Box,
	Container,
	Description,
	Img,
	Label,
	Location,
	Name,
	Stats,
	StatsItem,
	Tag,
	Value,
} from './User.styled';
import { PropTypes } from 'prop-types';
import userData from '../../assets/user.json';

export const User = ({ title }) => {
	const { username, tag, location, avatar, stats } = userData;

	return (
		<Container>
			<h2>{title}</h2>
			<Box>
				<Description>
					<Img src={avatar} alt="User avatar" />
					<Name>{username}</Name>
					<Tag>@{tag}</Tag>
					<Location>{location}</Location>
				</Description>
				<Stats>
					<StatsItem>
						<Label>Followers</Label>
						<Value>{stats.followers}</Value>
					</StatsItem>
					<StatsItem>
						<Label>Views</Label>
						<Value>{stats.views}</Value>
					</StatsItem>
					<StatsItem>
						<Label>Likes</Label>
						<Value>{stats.likes}</Value>
					</StatsItem>
				</Stats>
			</Box>
		</Container>
	);
};

User.propTypes = {
	title: PropTypes.string,
};
