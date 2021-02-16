import styled from 'styled-components';

export const DivHooks = styled.div`
	position: relative;
	height: inherit;
	width: inherit;
	background-attachment: fixed;
	overflow: hidden;
	& > span {
		position: absolute;
		will-change: transform;
		background: lightcoral;
		opacity: 0.6;
	}

	& > div {
		z-index: 1;
		position: absolute;
		top: 0;
		height: inherit;
		width: ${(props) => props.widthContent};
		-webkit-box-shadow: 1px 0px 28px -3px rgba (0, 0, 0, 0.7);
		box-shadow: 1px 0px 28px -3px rgba(0, 0, 0, 0.7);
		background-image: ${(props) => props.backgroundImage};
		background-position: ${(props) => props.backgroundPositionContent};
		background-size: ${(props) => props.backgroundSizeContent};
		-webkit-background-size: ${(props) => props.backgroundSizeContent};
		-moz-background-size: ${(props) => props.backgroundSizeContent};
		-o-background-size: ${(props) => props.backgroundSizeContent};
		background-attachment: ${(props) => props.backgroundAttachmentContent};
	}
`;
