import styled from 'styled-components';
import { isMobile } from "react-device-detect";
import useStats from '../utils/useStats';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: space-around;
  align-items: center
`;

const StatBlock = styled.div`
  width: 8rem;
  background: #f2f2f2;
  padding: 1rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  text-align: center;
  color: #000;

  &:nth-child(2) {
    margin: ${isMobile ? "1rem 0" : "0 2rem"};
  }
`;

const BlockTitle = styled.h3`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 300;
`;

const BlockSpan = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  
  if (loading) return <p>Loading...</p>;
  
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <Container>
      <StatBlock>
        <BlockTitle>Confirmed</BlockTitle>
        <BlockSpan>{stats.confirmed.value}</BlockSpan>
      </StatBlock>
      <StatBlock>
        <BlockTitle>Deaths</BlockTitle>
        <BlockSpan>{stats.deaths.value}</BlockSpan>
      </StatBlock>
      <StatBlock>
        <BlockTitle>Recovered</BlockTitle>
        <BlockSpan>{stats.recovered.value}</BlockSpan>
      </StatBlock>
    </Container>
  );
}
