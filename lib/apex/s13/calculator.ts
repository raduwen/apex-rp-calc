type Rank = "bronze" | "silver" | "gold" | "platinum" | "diamond" | "master" | "predator" | "none";
type Division = 4 | 3 | 2 | 1;

const rankEntryCost = (rank: Rank, division?: Division): number => {
  let cost = -15;
  switch (rank) {
    case "silver":
      cost += -12;
      break;
    case "gold":
      cost += -24;
      break;
    case "platinum":
      cost += -36;
      break;
    case "diamond":
      cost += -48;
      break;
    case "master":
    case "predator":
      cost += -60;
      break;
  }

  if (division) {
    cost -= (4 - division) * 3;
  }

  return cost;
}

type Place = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

const placeRP = (place: Place): number => {
  switch (place) {
    case 13:
    case 12:
    case 11:
      return 5;
    case 10:
    case 9:
      return 10;
    case 8:
    case 7:
      return 20;
    case 6:
      return 30;
    case 5:
      return 45;
    case 4:
      return 55;
    case 3:
      return 70;
    case 2:
      return 95;
    case 1:
      return 125;
    default:
      return 0;
  }
}

const bonusRPPerKillAssist = (place: Place): number => {
  switch (place) {
    case 13:
    case 12:
    case 11:
      return 5;
    case 10:
    case 9:
      return 10;
    case 8:
    case 7:
      return 12;
    case 6:
      return 14;
    case 5:
      return 16;
    case 4:
      return 18;
    case 3:
      return 20;
    case 2:
      return 23;
    case 1:
      return 25;
    default:
      return 1;
  }
};

const killAssistRP = (place: Place, count: number): number => {
  const base = bonusRPPerKillAssist(place);
  let rp = 0;

  rp += count > 3 ? base * 3 : base * count;
  count -= 3;
  if (count > 0) {
    rp += count > 3 ? base * 0.8 * 3 : base * 0.8 * count;
    count -= 3;
  }
  if (count > 0) {
    rp += count * base * 0.2;
  }

  return rp;
};

const calcRP = (rank: Rank, division: Division, place: Place, killAssist: number): number => {
  return Math.floor(rankEntryCost(rank, division) + placeRP(place) + killAssistRP(place, killAssist));
};

export type { Rank, Division, Place };
export { calcRP };
