import { Container } from "@/components/Container";

const PointsAwarded = () => {
  return (
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
  );
}
export { PointsAwarded };
