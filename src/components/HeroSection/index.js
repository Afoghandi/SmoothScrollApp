import React, { Fragment, useState } from 'react';

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
} from './HeroElements';
import Video from '../../video/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};
	return (
		<Fragment>
			<HeroContainer>
				<HeroBg>
					<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
				</HeroBg>
				<HeroContent>
					<HeroH1> Virtual Banking Made Easy </HeroH1>{' '}
					<HeroP>
						Sign Up for a new account today and recieve£ 250 in credit towards
						your next payment{' '}
					</HeroP>{' '}
					<HeroBtnWrapper>
						<Button
							to='signup'
							onMouseEnter={onHover}
							onMouseLeave={onHover}
							dark='true'
							primary='true'
						>
							{' '}
							Get started {hover ? <ArrowForward /> : <ArrowRight />}{' '}
						</Button>{' '}
					</HeroBtnWrapper>{' '}
				</HeroContent>{' '}
			</HeroContainer>{' '}
		</Fragment>
	);
};

export default HeroSection;
