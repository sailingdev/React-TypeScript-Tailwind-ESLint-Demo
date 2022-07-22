import React from 'react';

import { Container } from '../../components';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
