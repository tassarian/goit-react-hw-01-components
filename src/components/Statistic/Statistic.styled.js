import styled from 'styled-components';

export const Box = styled.div`
	border: 2px lightgrey solid;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Title = styled.h3`
	margin: 20px 0;
`;

export const StatList = styled.ul`
	display: flex;
	flex-direction: row;
	border: 1px lightgrey solid;
	border-radius: 4px;
`;

export const StatItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${props => props.color};

	width: 85px;
	padding: 20px 0;
`;

export const Label = styled.span`
	font-weight: bold;
`;

export const Percentage = styled.span``;
