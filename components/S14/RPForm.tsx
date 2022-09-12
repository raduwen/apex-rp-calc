import React from "react";
import type { Rank, Division, Place } from "@/lib/apex/s14/calculator";

type RPFormProps = {
  rank: Rank;
  place: Place;
  kaCount: number;
  pCount: number;
  onRankChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onDivisionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onPlaceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKACountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPaCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RPForm = ({
  rank,
  place,
  kaCount,
  pCount,
  onRankChange,
  onDivisionChange,
  onPlaceChange,
  onKACountChange,
  onPaCountChange
}: RPFormProps) => {
  return (
    <>
      <div>
        Rank:
        <select onChange={onRankChange}>
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
        <select onChange={onDivisionChange}>
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
        <input min={1} max={20} type="number" value={place} onChange={onPlaceChange} />
      </div>
      <div>
        Kill/Assist Count:
        <input min={0} max={57} type="number" value={kaCount} onChange={onKACountChange} />
      </div>
      <div>
        Participant Count:
        <input min={0} max={57} type="number" value={pCount} onChange={onPaCountChange} />
      </div>
    </>
  );
};

export { RPForm };
