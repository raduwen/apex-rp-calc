import { useState } from "react";
import type { Rank, Division, Place } from "@/lib/apex/s13/calculator";
import { calcRP } from "@/lib/apex/s13/calculator";
import { Container } from "@/components/Container";

const S13 = () => {
  const [rank, setRank] = useState<Rank>("none");
  const [division, setDivision] = useState<Division | undefined>(4);
  const [place, setPlace] = useState<Place>(20);
  const [kaCount, setKACount] = useState(0);

  return (
    <>
      <Container>
        <h1>Apex Legends : Season 13 RP Calculator</h1>
        <div>
          Rank:
          <select onChange={(e) => {
            setRank(e.currentTarget.value as Rank);
            if ((rank === "master" || rank === "predator") && division !== undefined) {
              setDivision(undefined);
            } else if (!(rank === "master" || rank === "predator") && division === undefined) {
              setDivision(4);
            }
          }}>
            <option value="none">-</option>
            <option value="bronze">Bronze</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
            <option value="platinum">Platinum</option>
            <option value="diamond">Diamond</option>
            <option value="master">Master</option>
            <option value="predator">Predator</option>
          </select>
          Division:
          <select onChange={(e) => { setDivision(parseInt(e.currentTarget.value) as Division) }}>
            {rank === "master" || rank === "predator" ? (
              <option value="">none</option>
            ) : (
              <>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </>
            )}
          </select>
        </div>
        <div>
          Place:
          <input min={1} max={20} type="number" value={place} onChange={(e) => { setPlace(parseInt(e.currentTarget.value) as Place) }} />
        </div>
        <div>
          Kill/Assist Count:
          <input min={0} max={57} type="number" value={kaCount} onChange={(e) => { setKACount(parseInt(e.currentTarget.value)) }} />
        </div>
        <div>
          <strong>RP</strong>: {calcRP(rank, division, place, kaCount)} (Tier Delta 0)
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
              <th>Kill/Assist RP</th>
              <td>1</td>
              <td colSpan={3}>5</td>
              <td colSpan={2}>10</td>
              <td colSpan={2}>12</td>
              <td>14</td>
              <td>16</td>
              <td>18</td>
              <td>20</td>
              <td>23</td>
              <td>25</td>
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
              <td>30%</td>
              <td>70%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>150%</td>
              <td>200%</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}

export { S13 };
