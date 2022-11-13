import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card';

const Container = styled.div`
	display: flex;
	gap: 10px;
`;

interface Props {
	cards: { imgUrl: string; title: string }[];
}

export default function CardList({ cards }: Props) {
	return (
		<Container>
			{cards.map((item, index) => (
				<Card key={index} imgUrl={item.imgUrl} title={item.title} />
			))}
		</Container>
	);
}
