import React from 'react';
import styled from 'styled-components';

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background-color: #141127; //${(props) => props.theme.color.grey[800]};
  color: #9090ff !important;
  display: flex;
  flex: 1;
  border-radius: 23px !important;
  flex-direction: column;
`;

export default Card;
