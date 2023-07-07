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

export const Statistics = ({ sectionTitle, data, title }) => {
	return (
		<Container>
			<h2>{sectionTitle}</h2>
			<Box>
				{title && <Title>{title}</Title>}
				<StatList>
					{data.map(({ id, label, percentage }) => {
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
	sectionTitle: PropTypes.string,
	data: PropTypes.array,
	title: PropTypes.string,
};
