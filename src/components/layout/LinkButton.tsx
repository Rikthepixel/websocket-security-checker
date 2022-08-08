import React from 'react';
import NextLink from "next/link";
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from '@chakra-ui/button';

export interface LinkButtonProps extends ChakraButtonProps {
    href: string;
}

const Link = ({ href, ...props }: LinkButtonProps) => {
    return (
        <NextLink href={href} passHref>
            <ChakraButton as="a" {...props} />
        </NextLink>
    );
};

export default Link;