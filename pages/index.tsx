import { useState } from "react";
import Head from "next/head";

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

const bounsRPPerKillAssist = (place: number): number => {
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
    const bonus = bounsRPPerKillAssist(place);
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
        </div>
    );
}

export default IndexPage;