import { useState } from "react";
import Head from "next/head";
import { calcRP } from "../lib/apex/calculator";

const Container = ({ children }) => {
  return (
    <div style={{ minWidth: "360px", maxWidth: "768px", margin: "0 auto 72px auto" }}>{children}</div>
  )
}

const IndexPage = () => {
  const [rank, setRank] = useState("none");
  const [place, setPlace] = useState(20);
  const [kaCount, setKACount] = useState(0);

  return (
    <div>
      <Head>
        <title>Apex Legends : Season 12 RP Calculator</title>
      </Head>
      <Container>
        <h1>Apex Legends : Season 12 RP Calculator</h1>
        <div>
          Rank:
          <select onChange={(e) => { setRank(e.currentTarget.value) }}>
            <option value="none">-</option>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
            <option value="diamond">Diamond</option>
            <option value="master">Master</option>
            <option value="predator">Predator</option>
          </select>
        </div>
        <div>
          Place:
          <input min={1} max={20} type="number" value={place} onChange={(e) => { setPlace(parseInt(e.currentTarget.value)) }} />
        </div>
        <div>
          Kill/Assist Count:
          <input min={0} max={57} type="number" value={kaCount} onChange={(e) => { setKACount(parseInt(e.currentTarget.value)) }} />
        </div>
        <div>
          <strong>RP</strong>: {calcRP(rank, place, kaCount)} (Tier Delta 0)
        </div>
      </Container>

      <Container>
        <h2>Points Awarded</h2>
        <table>
          <tbody>
            <tr>
              <th>Place</th>
              <td>14+</td>
              <td>13</td>
              <td>12</td>
              <td>11</td>
              <td>10</td>
              <td>9</td>
              <td>8</td>
              <td>7</td>
              <td>6</td>
              <td>5</td>
              <td>4</td>
              <td>3</td>
              <td>2</td>
              <td>1</td>
            </tr>
            <tr>
              <th>RP</th>
              <td>0</td>
              <td colSpan={3}>5</td>
              <td colSpan={2}>10</td>
              <td colSpan={2}>20</td>
              <td>30</td>
              <td>45</td>
              <td>55</td>
              <td>70</td>
              <td>95</td>
              <td>125</td>
            </tr>
            <tr>
              <th>Bonus RP per Kill/Assist</th>
              <td colSpan={4}>0</td>
              <td colSpan={5}>1</td>
              <td colSpan={2}>5</td>
              <td>8</td>
              <td>11</td>
              <td>15</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginBottom: "8px" }} />

        <table>
          <tbody>
            <tr>
              <th>Tier Delta</th>
              <td>-3</td>
              <td>-2</td>
              <td>-1</td>
              <td>0</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <th>Kill/Assit RP</th>
              <td>3</td>
              <td>5</td>
              <td>8</td>
              <td>10</td>
              <td>12</td>
              <td>15</td>
              <td>20</td>
            </tr>
          </tbody>
        </table>
      </Container>
      <Container>
        <footer>
          <div style={{ textAlign: "center" }}>
            <a href="https://github.com/raduwen/apex-rp-calc">github</a>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default IndexPage;
