import styled from 'styled-components';

export const TableHeader = styled.th`
	width: 100px;
	padding: 10px 5px;
	background-color: darkgreen;
	color: white;
`;

export const TableData = styled.td`
	width: 100px;
	padding: 10px 5px;
	background-color: ${props => props.color};
	color: ${props => props.fontc};
	margin: 0 auto;
`;
