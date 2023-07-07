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

export const User = ({ title, username, tag, location, avatar, stats }) => {
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
	username: PropTypes.string,
	tag: PropTypes.string,
	location: PropTypes.string,
	avatar: PropTypes.string,
	stats: PropTypes.object,
};
