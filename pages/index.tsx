import { useState } from "react";
import Head from "next/head";
import { Container } from "@/components/Container";
import { S12 } from "@/components/S12";
import { S13 } from "@/components/S13";

const IndexPage = () => {
  const [season, setSeason] = useState(13);

  return (
    <div>
      <Head>
        <title>Apex Legends : Season {season} RP Calculator</title>
      </Head>
      <div style={{position: 'fixed', right: 4, top: 4}}>
        <select onChange={((e) => {
          setSeason(parseInt(e.currentTarget.value));
        })} value={season}>
          <option value={13}>Season 13</option>
          <option value={12}>Season 12</option>
        </select>
      </div>
      {season === 12 && <S12 />}
      {season === 13 && <S13 />}
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
