"use client";

import type { TextFieldProps } from "react-aria-components";
import { TextField as TextFieldPrimitive } from "react-aria-components";
import { cx } from "@/lib/primitive";
import { fieldStyles } from "./field";

const TextField = ({ className, ...props }: TextFieldProps) => {
	return (
		<TextFieldPrimitive
			className={cx(fieldStyles(), className)}
			data-slot="control"
			{...props}
		/>
	);
};

export { TextField };
