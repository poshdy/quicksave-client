import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className: string;
  title: string;
};

const Title = ({ className, title }: Props) => {
  return <h1 className={cn("font-bold", className)}>{title}</h1>;
};

export default Title;
