import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { useTrail, animated, useSpring } from 'react-spring';
import DivHooksComponent from './div-hooks-component';

const DivHooks = styled.div``;

const SpringSumUp = ({
	height,
	width,
	margin,
	padding,
	backgroundColor,
	opacity,
	backgroundImage,
	backgroundRepeat,
	backgroundSize,
	/* Content */
	widthContent,
	magnifyingDiv,
	backgroundAttachmentContent,
	backgroundPositionContent,
	backgroundSizeContent,
}) => {
	const rootStyle = {
		height: height,
		width: width,
		margin: margin,
		padding: padding,
		backgroundColor: backgroundColor,
		backgroundImage: backgroundImage,
		backgroundRepeat: backgroundRepeat,
		backgroundSize: backgroundSize,
		opacity: opacity,
	};

	return (
		<div style={rootStyle}>
			<DivHooksComponent
				backgroundImage={backgroundImage}
				backgroundAttachmentContent={backgroundAttachmentContent}
				widthContent={widthContent}
				magnifyingDiv={magnifyingDiv}
				backgroundPositionContent={backgroundPositionContent}
				backgroundSizeContent={backgroundSizeContent}
			/>
		</div>
	);
};
SpringSumUp.propTypes = {
	height: propTypes.string,
	width: propTypes.string,
	margin: propTypes.string,
	padding: propTypes.string,
	backgroundColor: propTypes.string,
	opacity: propTypes.string,
	backgroundAttachment: propTypes.string,
	backgroundImage: propTypes.string,
	backgroundRepeat: propTypes.string,
	backgroundSize: propTypes.string,
	/* Content */
	widthContent: propTypes.string,
	backgroundAttachmentContent: propTypes.string,
	backgroundPositionContent: propTypes.string,
	magnifyingDiv: propTypes.number,
	backgroundSizeContent: propTypes.string,
};

SpringSumUp.defaultProps = {
	height: '100px',
	width: '100%',
	margin: '0',
	padding: '0',
	backgroundColor: '#000',
	opacity: '0.8',
	backgroundImage: 'url(https://www.partir.com/images/incontournables/japon-hakone-fuji.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	/* Content */
	magnifyingDiv: 4,
	widthContent: '100px',
	backgroundAttachmentContent: 'fixed',
	backgroundPositionContent: '0%',
	backgroundSizeContent: '120% 120%',
};

export default SpringSumUp;
