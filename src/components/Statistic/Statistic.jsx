import { Container } from 'components/User/User.styled';
import {
	Box,
	Label,
	Percentage,
	StatItem,
	StatList,
	Title,
} from './Statistic.styled';
import { PropTypes } from 'prop-types';

import statData from '../../assets/data.json';

export const Statistics = ({ title }) => {
	const stats = statData;
	return (
		<Container>
			<h2>{title}</h2>
			<Box>
				<Title>Uploading Stats</Title>
				<StatList>
					{stats.map(({ id, label, percentage }) => {
						const randomColor = Math.floor(
							Math.random() * 16777215
						).toString(16);
						return (
							<StatItem color={'#' + randomColor} key={id}>
								<Label>{label}</Label>
								<Percentage>{percentage}%</Percentage>
							</StatItem>
						);
					})}
				</StatList>
			</Box>
		</Container>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
};
