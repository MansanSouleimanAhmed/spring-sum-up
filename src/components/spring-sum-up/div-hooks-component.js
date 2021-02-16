import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { DivHooks } from './div-hooks';

function DivHooksComponent(props) {
	const fast = { tension: 1200, friction: 30 };
	const slow = { mass: 15, tension: 200, friction: 50 };
	const trans = (x, y) => `translate(50px,0px,0)`;

	const transRectangle = (x, y) => `${x}px`;
	const [cubes, set] = useTrail(props.magnifyingDiv, () => ({ xy: [0, 0], config: (i) => (i === 0 ? slow : slow) }));
	console.log(props);
	return (
		<DivHooks
			backgroundImage={props.backgroundImage}
			widthContent={props.widthContent}
			backgroundAttachmentContent={props.backgroundAttachmentContent}
			backgroundPositionContent={props.backgroundPositionContent}
			backgroundSizeContent={props.backgroundSizeContent}
			backgroundRepeatContent={props.backgroundRepeatContent}
			onMouseMove={(event) => {
				set({ xy: [event.clientX, event.clientY] });
			}}
		>
			{cubes.map((props, index) => (
				<animated.span key={index} style={{ transform: props.xy.interpolate(trans) }} />
			))}
			{cubes.map((props, index) => (
				<animated.div
					key={index}
					style={{
						left: props.xy.interpolate(transRectangle),
					}}
				/>
			))}
		</DivHooks>
	);
}

export default DivHooksComponent;
