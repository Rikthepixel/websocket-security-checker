import React, { useMemo } from 'react';
import LinkButton from 'components/layout/LinkButton';
import TOOL_LINKS from 'constants/Tools';
import { Box, Heading, HStack } from '@chakra-ui/layout';
import { Img } from "@chakra-ui/image";

const Home = () => {

  const toolLinks = useMemo(() => TOOL_LINKS.map((tool, index) => {
    console.log(tool.icon);

    return (
      <Box key={index} shadow="md" rounded="md">
        <Heading fontSize="2xl">
          {tool.name}
        </Heading>
        <LinkButton href={tool.href} variant="outline" colorScheme="blue">
          Check
        </LinkButton>
      </Box>
    );
  }), []);

  return (
    <>
      <div>Work in progress</div>
      <HStack>
        {toolLinks}
      </HStack>
    </>
  );
};

export default Home;;