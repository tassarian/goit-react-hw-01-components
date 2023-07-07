import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 0;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	padding-top: 10px;

	border: 1px grey solid;
	border-radius: 4px;
`;

export const Img = styled.img`
	display: inline-block;
	width: 100px;
	border-radius: 50%;
	margin-bottom: 10px;
`;

export const Name = styled.h4`
	padding-bottom: 10px;
	font-weight: bold;

	font-size: 24px;
`;

export const Tag = styled.p`
	padding-bottom: 10px;
`;

export const Location = styled.p`
	padding-bottom: 10px;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Stats = styled.ul`
	display: flex;
	flex-direction: row;
`;

export const StatsItem = styled.li`
	display: flex;
	flex-direction: column;
	width: 90px;
	padding: 20px 0;
	align-items: center;
	border-top: 1px lightgrey solid;
	&:not(:last-of-type) {
		border-right: 1px lightgrey solid;
	}
`;

export const Label = styled.span`
	display: inline-block;
`;

export const Value = styled.span`
	font-weight: bold;
`;
