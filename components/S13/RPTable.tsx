import { Container } from "@/components/Container";
import type { Rank, Division, Place } from "@/lib/apex/s13/calculator";
import { calcRP } from "@/lib/apex/s13/calculator";

type RPTableProps = {
  rank: Rank | string;
  division: Division | number;
  inPlace?: Place;
  inKACount?: number;
}

const hs = {
  color: 'white',
  backgroundColor: '#073764',
};

const cs = {
  color: 'white',
  backgroundColor: '#0b5394'
};

const plus = {
  backgroundColor: '#dfffdf'
};

const minus = {
  backgroundColor: '#ffdfdf'
};

const RPTable = ({rank, division, inPlace, inKACount}) => {
  return (
    <Container>
      <table>
        <tbody>
          <tr style={hs}>
            <th></th>
            <th colSpan={14} align="left">Place</th>
          </tr>
          <tr>
            <th style={hs}>Kill/Assist</th>
            {[14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((place) => <th style={cs}>{place}</th>)}
          </tr>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((kill) => (
              <tr>
                <th style={cs}>{kill}</th>
                {[14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((place) => {
                  const it = kill === inKACount && (place === inPlace || place === 14 && inPlace >= 14);
                  const rp = calcRP(rank as Rank, division as Division, place as Place, kill);
                  let style = {
                    color: it ? "red" : "black",
                    fontWeight: it ? "bold" : undefined,
                  };
                  if (rp > 0)
                    style = Object.assign(style, plus);
                  else if (rp < 0)
                    style = Object.assign(style, minus);
                  return (
                    <td style={style}>{rp}</td>
                  )
                })}
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  );
};

export { RPTable };
