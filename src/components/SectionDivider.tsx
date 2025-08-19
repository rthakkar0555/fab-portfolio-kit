import React from "react";

type SectionDividerProps = {
	className?: string;
};

const SectionDivider: React.FC<SectionDividerProps> = ({ className }) => {
	return (
		<div
			role="separator"
			aria-hidden="true"
			className={`w-full h-[1.5px] bg-gradient-to-r from-transparent via-[hsl(var(--border)/10)] to-transparent ${className ?? ""}`}
		/>
	);
};

export default SectionDivider;


