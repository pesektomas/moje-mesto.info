import React from 'react';
import ReactSVG from 'react-svg'

export default function printSvg (svgFile, svgStyle) {
	return <ReactSVG 
		src={`${svgFile}`} 
		beforeInjection={svg => {
			svg.setAttribute('style', svgStyle)
		}}
		wrapper="span"
	/>;
}