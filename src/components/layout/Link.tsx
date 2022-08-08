import React from 'react';
import NextLink from "next/link";
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/layout";

export interface LinkProps extends ChakraLinkProps {
    href: string;
}

const Link = ({ href, ...props }: LinkProps) => {
    return (
        <NextLink href={href} passHref>
            <ChakraLink {...props} />
        </NextLink>
    );
};

export default Link;