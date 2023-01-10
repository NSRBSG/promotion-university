import styled from 'styled-components';
import Header from '../menu/Header';
import Footer from './Footer';

import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
`;

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};