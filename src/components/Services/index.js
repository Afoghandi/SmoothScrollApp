import React, { Fragment } from 'react';
import { data } from '../../utils/ServicesData';
import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from './ServicesElements';

const Services = () => {
	return (
		<ServicesContainer id='services'>
			<ServicesH1>Our Services </ServicesH1>
			<ServicesWrapper>
				{data.map((item) => {
					const { id, title, details, icon } = item;
					return (
						<ServicesCard id={id}>
							<ServicesIcon src={icon} />
							<ServicesH2>{title} </ServicesH2>
							<ServicesP>{details} </ServicesP>
						</ServicesCard>
					);
				})}
			</ServicesWrapper>
		</ServicesContainer>
	);
};

export default Services;
