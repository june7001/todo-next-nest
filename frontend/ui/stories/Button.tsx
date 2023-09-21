import React from "react";
import { Button as ShadButton } from "../components/ui/button";

interface ButtonProps {
	label: string;
	onClick: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
	return (
		<ShadButton onClick={onClick} variant="outline">
			{label}
		</ShadButton>
	);
};
