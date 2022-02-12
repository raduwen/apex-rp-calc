const rankEntryCost = (rank: string): number => {
  switch (rank) {
    case "silver":
      return -12;
    case "gold":
      return -24;
    case "platinum":
      return -36;
    case "diamond":
      return -48;
    case "master":
    case "predator":
      return -60;
    default:
      return 0;
  }
}

const placeRP = (place: number): number => {
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

const bonusRPPerKillAssist = (place: number): number => {
  switch (place) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
      return 1;
    case 5:
    case 4:
      return 5;
    case 3:
      return 8;
    case 2:
      return 11;
    case 1:
      return 15;
    default:
      return 0;
  }
};

const killAssistRP = (place: number, count: number): number => {
  const bonus = bonusRPPerKillAssist(place);
  const rp = (bonus + 10) * count;
  if (rp > 125) {
    return 125;
  } else {
    return rp;
  }
}

const calcRP = (rank: string, place: number, killAssit: number): number => {
  return rankEntryCost(rank) + placeRP(place) + killAssistRP(place, killAssit);
}

export { calcRP };
