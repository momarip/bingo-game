import React from "react";
import Heading from ".";

export default {
  title: "Components/atoms/Heading",
  component: Heading,
};

export const h1 = () => <Heading title="Title" size={1} />;
export const h2 = () => <Heading title="Title" size={2} />;
export const h3 = () => <Heading title="Title" size={3} />;

export const h6 = () => <Heading title="Title" size={6} />;
