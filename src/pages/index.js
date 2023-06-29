import React, { Fragment, useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../utils/InfoSectionData';

import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Fragment>
			<Navbar toggle={toggle} /> <Sidebar isOpen={isOpen} toggle={toggle} />{' '}
			<HeroSection />
			<InfoSection {...homeObjOne} /> <InfoSection {...homeObjTwo} />{' '}
			<Services />
			<InfoSection {...homeObjThree} />{' '}
		</Fragment>
	);
};
export default Home;
