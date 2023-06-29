import React, { Fragment, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { ScrollData } from '../../utils/ScrollData';

import {
	Nav,
	NavLogo,
	NavbarContainer,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<Fragment>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavbarContainer>
						<NavLogo to='/' onClick={toggleHome}>
							{' '}
							dolla{' '}
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>{' '}
						<NavMenu>
							{ScrollData.map((item) => {
								const {
									id,
									to,
									title,
									smooth,
									duration,
									spy,
									exact,
									offset,
								} = item;

								return (
									<NavItem>
										<NavLinks
											key={id}
											to={to}
											smooth={smooth}
											duration={duration}
											spy={spy}
											exact={exact}
											offset={offset}
										>
											{title}{' '}
										</NavLinks>
									</NavItem>
								);
							})}
						</NavMenu>
						<NavBtn>
							<NavBtnLink
								to='/signin'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								{' '}
								Sign In{' '}
							</NavBtnLink>{' '}
						</NavBtn>{' '}
					</NavbarContainer>{' '}
				</Nav>{' '}
			</IconContext.Provider>
		</Fragment>
	);
};
export default Navbar;
