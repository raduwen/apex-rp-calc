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
    </>
  );
}

export { S13 };
