import styled from "styled-components";
import useStats from "../utils/useStats";

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

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  // console.log(stats, loading, error);
  if (loading) return <h1>Loading ...</h1>;
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <StatGrid>
          <StatBlock>
            <h3>Confirmed:</h3>
            <span>{stats.confirmed ? stats.confirmed.value : "NA"}</span>
          </StatBlock>
          <StatBlock>
            <h3>Deaths:</h3>
            <span>{stats.deaths ? stats.deaths.value : "NA"}</span>
          </StatBlock>
          <StatBlock>
            <h3>Recovered:</h3>
            <span>{stats.recovered ? stats.recovered.value : "NA"}</span>
          </StatBlock>
        </StatGrid>
      )}
    </>
  );
}
