import React from "react";
import { IconType } from "../types/Icons";

const ProjectIcon = (props: IconType) => {
	return (
		<svg
			width={props.width}
			height={props.height}
			viewBox="0 0 101 101"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M88.375 0H12.625C5.65179 0 0 5.65179 0 12.625V88.375C0 95.344 5.65179 101 12.625 101H88.375C95.344 101 101 95.344 101 88.375V12.625C101 5.65179 95.344 0 88.375 0ZM43.935 76.5075C43.935 79.8531 41.2206 82.5675 37.875 82.5675H19.19C15.8444 82.5675 13.13 79.8489 13.13 76.5075V19.19C13.13 15.8444 15.8444 13.13 19.19 13.13H37.875C41.2206 13.13 43.935 15.8444 43.935 19.19V76.5075ZM87.87 51.2575C87.87 54.5989 85.1556 57.3175 81.81 57.3175H63.125C59.7794 57.3175 57.065 54.5989 57.065 51.2575V19.19C57.065 15.8444 59.7836 13.13 63.125 13.13H81.81C85.1556 13.13 87.87 15.8444 87.87 19.19V51.2575Z"
				fill={props.fill}
			/>
		</svg>
	);
};

export default ProjectIcon;
