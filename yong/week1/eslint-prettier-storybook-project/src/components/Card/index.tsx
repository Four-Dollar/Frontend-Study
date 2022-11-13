import React from 'react';
import styled from 'styled-components';

interface Props {
	imgUrl: string;
	title: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: 400px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;
	box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.2);
	padding: 8px;
	&:hover {
		transform: translateY(-5px);
	}
`;

const Image = styled.img`
	padding: 8px;
	object-fit: cover;
`;

const Title = styled.div`
	padding: 8px;
`;

export default function Card({ imgUrl, title }: Props) {
	return (
		<Container>
			<Image src={imgUrl} alt="" />
			<Title>{title}</Title>
		</Container>
	);
}
