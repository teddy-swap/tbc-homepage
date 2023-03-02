import { Card, CardHeader, CardMedia, CardActions, Button, Avatar, Pagination, TextField } from '@mui/material';
import { Search, WalletOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import Image from 'rc-image';
import SyncIcon from '@mui/icons-material/Sync';


type TeddyBearAssetMetadata = {
  Bear: string,
  Face: string,
  Head: string,
  name: string,
  Skins: string,
  image: string,
  Clothes: string,
  Handheld: string,
  Background: string
}


type RankedTeddyBearAsset = {
  rarityRank: string,
  url: string,
  name: string
}

const ASSETS_PER_PAGE = 8;


const getRankTokens = (rank: number) => {
  if (rank <= 15) return 28_000;
  else if (rank <= 100) return 17_500;
  else if (rank <= 250) return 12_600;
  else if (rank <= 500) return 11_200;
  else if (rank <= 804) return 10_500;
  else return 0;
}

function App() {

  const [bears, setBears] = useState<RankedTeddyBearAsset[]>([]);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    const loadAssets = async () => {
      const assetReq = await fetch("/rankedAssets.json");
      const assetResult: RankedTeddyBearAsset[] = await assetReq.json();
      setBears(assetResult);
    }

    loadAssets();
  }, []);

  return (
    <div className="App w-[100vw] h-[100vh] pb-6">
      <main className="container mx-auto relative">
        <div className="bg-mobile-main bg-cover bg-center">
          <header className="pt-4 px-5 flex">
            <div className="flex justify-start w-[90px] lg:justify-start"><img src="teddy-logo.svg" alt="logo" className="w-[200px]" /></div>
          </header>
          <section className="mt-24">
            <div className="w-[280px] m-auto">
              <img src="teddybearclub-logo.png" alt="teddy bear club logo" />
            </div>
            <h2 className="w-[210px] mt-10 text-center text-sm text-white m-auto">
              The TeddySwap Initial NFT Offering provides TEDY tokens, boosts yield farming, and more on the TeddySwap DEX.
            </h2>
            <div className="mt-8 w-[280px] m-auto">
              <img src="teddy-smirk.png" alt="A cartoon teddy bear smirking" />
            </div>
          </section>
        </div>

        <section className="bg-aztec pt-8">
          <h3 className="text-gold-sand text-center">Mint Price: 150 ADA</h3>

          <div className="w-[280px] m-auto mt-5">
            <h4 className="text-gold-sand text-[10px]">Each NFT includes</h4>
            <ul className="text-gold-sand flex flex-col gap-4 mt-2">
              <li className="bg-firefly text-center text-[22px] rounded py-5 font-bold w-[260px]">
                Up to 30,000 TEDY
              </li>
              <li className="bg-firefly text-center text-[22px] rounded py-5 font-bold w-[260px] self-end">
                +3% FISO Rewards <span className="text-[8px]">+up to 20%</span>
              </li>
              <li className="bg-firefly text-center text-[22px] rounded py-5 font-bold w-[260px]">
                +2% LBE Bonus <span className="text-[8px]">*Up to 20%</span>
              </li>
            </ul>
          </div>

          <div className="mt-14 w-[220px] m-auto">
            <p className="font-bold text-white text-[12px] ">
              The Teddy Bears Club is a limited NFT collection that provides utility to users of TeddySwap, the coziest stable-coin DEX on Cardano. Join the Teddy Bears Club and earn TEDY tokens.
            </p>
            <p className="font-bold text-white text-[12px] mt-4">
            Members of the The Teddy Bears Club will receive 20,00 to 30,00 TEDY tokens  To learn more, check out our medium.
            </p>
          </div>

          <ul className="flex flex-col w-[200px] m-auto mt-10 gap-5">
            <li className="order-2"><img src="teddy-1.png" alt="" /></li>
            <li className="order-3"><img src="teddy-2.png" alt="" /></li>
            <li className="order-1"><img src="teddy-3.png" alt="" /></li>
            <li className="order-4"><img src="teddy-4.png" alt="" /></li>
          </ul>
        </section>

        <section className="pt-4 bg-aztec">
          <h2 className="text-[#66A7F2] lg:text-[25px] text-[15px] font-bold">Explorer</h2>
          <div className="my-4 flex w-full flex-col md:flex-row">
            <div className="flex w-full">
              <Pagination size="large" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
            </div>
            <div className="flex w-full justify-end md:mt-0 mt-4">
              <TextField className="w-full md:w-auto" id="outlined-basic" label="Search" variant="outlined" size="small" InputProps={{ endAdornment: <Search /> }} value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
          </div>
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-12">
            {bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').slice((page - 1) * ASSETS_PER_PAGE, ((page - 1) * ASSETS_PER_PAGE) + ASSETS_PER_PAGE).map((a, i) => {
              return (
                <Card sx={{ background: '#1a282e' }} className="!rounded-md p-6" elevation={6} key={i}>
                  <div className="relative">
                    <Image
                      src={`https://teddyswap.infura-ipfs.io/ipfs/${a.url}`}
                      preview={true}
                      fallback="/t3.webp"
                      placeholder={<div className="absolute w-full h-full top-0 left-0 grid justify-center content-center bg-blue-500 opacity-80"><SyncIcon className="animate-spin" /></div>}
                    />
                  </div>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: 'rgb(102 167 242)', color: "#FFF" }} aria-label="recipe">
                        {(ASSETS_PER_PAGE * (page - 1)) + i + 1}
                      </Avatar>
                    }
                    title={a.name}
                    subheader={`${getRankTokens(parseInt(a.rarityRank))} $TEDY Tokens + 10% Bonus`}
                    titleTypographyProps={{
                      className: 'text-white'
                    }}
                  />
                </Card>
              );
            })}
          </div>
          <div className="my-4">
            <Pagination size="large" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
