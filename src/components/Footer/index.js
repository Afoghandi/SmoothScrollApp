import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';
import { FooterData } from '../../utils/FooterData';
const Footer = () => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						{FooterData.map((item) => {
							const { id, title, link1, link2, link3, link4, link5 } = item;
							return (
								<FooterLinkItems key={id}>
									<FooterLinkTitle>{title} </FooterLinkTitle>
									<FooterLink to='/signin'>{link1}</FooterLink>
									<FooterLink to='/signin'>{link2}</FooterLink>
									<FooterLink to='/signin'>{link3}</FooterLink>
									<FooterLink to='/signin'>{link4}</FooterLink>
									<FooterLink to='/signin'>{link5}</FooterLink>
								</FooterLinkItems>
							);
						})}
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/' onClick={toggleHome}>
							dolla{' '}
						</SocialLogo>
						<WebsiteRights>
							{' '}
							dolla © {new Date().getFullYear()} All rights reserved.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href='/' target='_blank' aria-label='Facebook'>
								<FaFacebook />{' '}
							</SocialIconLink>

							<SocialIconLink href='/' target='_blank' aria-label='Instagram'>
								<FaInstagram />{' '}
							</SocialIconLink>

							<SocialIconLink href='/' target='_blank' aria-label='YouTube'>
								<FaYoutube />{' '}
							</SocialIconLink>

							<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
								<FaTwitter />{' '}
							</SocialIconLink>

							<SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
								<FaLinkedin />{' '}
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
