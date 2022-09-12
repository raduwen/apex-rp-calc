import { useState } from "react";
import type { Rank, Division, Place } from "@/lib/apex/s14/calculator";
import { calcRP } from "@/lib/apex/s14/calculator";
import { Container } from "@/components/Container";
import { PointsAwarded } from "./PointsAwarded";
import { RPForm } from "./RPForm";
import { RPTable } from "./RPTable";

const S14 = () => {
  const [rank, setRank] = useState<Rank>("none");
  const [division, setDivision] = useState<Division | undefined>(4);
  const [place, setPlace] = useState<Place>(20);
  const [kaCount, setKACount] = useState(0);
  const [pCount, setPCount] = useState(0);

  return (
    <>
      <Container>
        <h1>Apex Legends : Season 13 RP Calculator</h1>
        <RPForm
          rank={rank}
          place={place}
          kaCount={kaCount}
          pCount={pCount}
          onRankChange={(e) => {
            setRank(e.currentTarget.value as Rank);
            if ((rank === "master" || rank === "predator") && division !== undefined) {
              setDivision(undefined);
            } else if (!(rank === "master" || rank === "predator") && division === undefined) {
              setDivision(4);
            }
          }}
          onDivisionChange={(e) => setDivision(parseInt(e.currentTarget.value) as Division) }
          onPlaceChange={(e) => setPlace(parseInt(e.currentTarget.value) as Place) }
          onKACountChange={(e) => { setKACount(parseInt(e.currentTarget.value)) }}
          onPaCountChange={(e) => { setPCount(parseInt(e.currentTarget.value)) }}
        />
        <div>
          <strong>RP</strong>: {calcRP(rank, division, place, kaCount + pCount / 2)} (Tier Delta 0)
        </div>
      </Container>
      <RPTable rank={rank} division={division} inPlace={place} inKACount={kaCount} />
      <PointsAwarded />
    </>
  );
}

export { S14 };
