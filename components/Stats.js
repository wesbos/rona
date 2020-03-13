import styled from "styled-components";
import useStats from "../utils/useStats";
import { calculatePercentage } from "../utils";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const Badge = styled.span`
  border-radius: 500px;
  background: #5240e6;
  color: #fff;
  width: 8rem;
  display: inline-block;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.6rem 0;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const confirmedPerc = calculatePercentage(
    stats.confirmed.value,
    stats.confirmed.value
  );
  const deathsPerc = calculatePercentage(
    stats.confirmed.value,
    stats.deaths.value
  );
  const recoveredPerc = calculatePercentage(
    stats.confirmed.value,
    stats.recovered.value
  );
  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{stats.confirmed.value}</span>
        {confirmedPerc && <Badge>{confirmedPerc}</Badge>}
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{stats.deaths.value}</span>
        {deathsPerc && <Badge>{deathsPerc}</Badge>}
      </StatBlock>
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{stats.recovered.value}</span>
        {recoveredPerc && <Badge>{recoveredPerc}</Badge>}
      </StatBlock>
    </StatGrid>
  );
}
