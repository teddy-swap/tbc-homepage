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
    <div>
      <main className="App w-[100vw] h-[100vh] pb-6">

        <div className="bg-mobile-main lg:bg-main bg-cover bg-center h-[100vh] relative outline outline-1">
          {/* HEADER */}
          <header className="pt-10 lg:pt-[30px] 2xl:pt-[58px] px-5 md:px-16">
            <div className="flex flex-col items-center md:flex-row md:justify-between max-w-[1700px] m-auto">
              <div className="w-[150px] md:w-[150px] xl:w-[180px] 2xl:w-[210px]"><img src="teddy-logo.svg" alt="logo" /></div>
              <ul className="flex gap-5 mt-6">
                <li className="w-[25px]"><a href="https://twitter.com/TeddySwap"><img src="twitter.svg" alt="twitter icon" /></a></li>
                <li className="w-[25px]"><a href="https://t.me/teddyswap"><img src="telegram.svg" alt="telegram icon" /></a></li>
                <li className="w-[25px]"><a href="https://discord.gg/GRvcAnqtZG"><img src="discord.svg" alt="discord icon" /></a></li>
                <li className="w-[25px]"><a href="https://medium.com/@TeddySwapDEX"><img src="medium.svg" alt="medium icon" /></a></li>
              </ul>
            </div>
          </header>

          {/* SECTION ONE */}
          <section className="w-[300px] md:w-[500px] lg:w-[700px] mt-10 md:mt-[120px] lg:mt-[61px] 2xl:mt-[20px] lg:flex lg:justify-center 2xl:w-[1500px] m-auto 3xl:justify-start">
            <div className="lg:order-2 md:self-center">

              <div className="lg:w-[400px] 2xl:w-[640px] m-auto">
                <img src="teddybearclub-logo.png" alt="teddy bear club logo" />
              </div>

              <h2 className="font-medium lg:w-[310px] 2xl:w-[603px] mt-10 text-center lg:text-left lg:text-base 2xl:text-[28px] 2xl:leading-[40px] text-white m-auto">
                The TeddySwap Initial NFT Offering provides TEDY tokens, boosts yield farming, and more on the TeddySwap DEX.
              </h2>
            </div>

            <div className="mt-8 absolute md:relative bottom-0 md:mt-0 w-[280px] md:w-[420px] 2xl:w-[643px] 2xl:ml-[45px] m-auto">
              <img src="teddy-smirk.png" alt="A cartoon teddy bear smirking" />  
            </div>

          </section>

          <div className="hidden xl:block w-full absolute bottom-0">
            <img src="wave2.png" alt="wave design" className="w-full" />
          </div>
    
        </div>
        {/* SECTION TWO */}
        <section className="bg-aztec pt-8">
          <div className="w-[300px] md:w-[500px] m-auto lg:w-[700px] 3xl:w-[1200px]">
            <h3 className="text-gold-sand text-center xl:hidden">Mint Price: 150 ADA</h3>

            <div className="mt-5 2xl:mt-14">
            
              <h4 className="text-gold-sand font-medium text-[12px] xl:text-[30px]">Each NFT includes</h4>

              <ul className="text-gold-sand flex flex-col gap-4 3xl:gap-[46px] mt-2 2xl:mt-4">
                <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[80px] rounded 3xl:rounded-[25px] py-5 md:py-7 3xl:py-[66px] font-bold w-[260px] md:w-[360px] 3xl:w-[1101px]">
                  Up to 30,000 TEDY
                </li>
                <li className="bg-firefly text-center text-[22px] md:text-[30px] 3xl:text-[80px] rounded 3xl:rounded-[25px] py-5 md:py-7 3xl:py-[66px] font-bold w-[260px] md:w-[360px] 3xl:w-[1101px] self-end">
                  +3% FISO Rewards <span className="text-[8px] md:text-[12px] 3xl:text-[16px]">+up to 20%</span>
                </li>
                <li className="bg-firefly text-center text-[22px] md:text-[30px] 3xl:text-[80px] rounded 3xl:rounded-[25px] py-5 md:py-7 3xl:py-[66px] font-bold w-[260px] md:w-[360px] 3xl:w-[1101px]">
                  +2% LBE Bonus <span className="text-[8px] md:text-[12px] 3xl:text-[16px]">*Up to 20%</span>
                </li>
              </ul>
            </div>
            <div className="mt-16 xl:mt-[232px] xl:flex items-center justify-between gap-40">
              <div className="text-white text-justify order-2 xl:w-[514px] font-bold xl:text-[28px]">
                <p>
                  The Teddy Bears Club is a limited NFT collection that provides utility to users of TeddySwap, the coziest stable-coin DEX on Cardano. Join the Teddy Bears Club and earn TEDY tokens.
                </p>
                <p className="mt-6">
                  Members of the The Teddy Bears Club will receive 20,00 to 30,00 TEDY tokens  To learn more, check out our medium.
                </p>
              </div>
              <ul className="hidden xl:grid grid-cols-1 xl:grid-cols-2 order-1 m-auto gap-8 xl:gap-10 mt-20 xl:mt-0">
                <li className="order-2"><img src="teddy-1.png" alt="" /></li>
                <li className="order-3"><img src="teddy-2.png" alt="" /></li>
                <li className="order-1"><img src="teddy-3.png" alt="" /></li>
                <li className="order-4"><img src="teddy-4.png" alt="" /></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="pt-4 bg-aztec pt-8">
          <div className="w-[300px] m-auto">
            <h2 className="text-gold-sand lg:text-[25px] text-[15px] font-bold">Explorer</h2>

            <div className="my-4 flex w-full flex-col md:flex-row">
              <div className="flex w-full">
                <Pagination size="medium" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
              </div>
              <div className="flex w-full justify-end md:mt-0 mt-6">
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
            <div className="my-4 hidden xl:block">
              <Pagination size="large" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
            </div>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;
