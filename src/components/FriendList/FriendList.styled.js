import styled from 'styled-components';

export const List = styled.ul`
	display: flex;
	flex-direction: row;
	gap: 10px;
`;

export const FriendsItem = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	border: 1px lightgrey solid;
	border-radius: 4px;
	padding: 5px 10px;
	gap: 5px;
`;

export const Status = styled.div`
	width: 12px;
	height: 12px;

	border-radius: 50%;
	background-color: ${props => props.color};
`;

export const Avatar = styled.img`
	display: inline-block;
	width: 50px;
`;

export const Name = styled.h4``;
