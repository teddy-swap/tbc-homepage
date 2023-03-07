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
    <main className="App w-[100vw] h-[100vh] bg-aztec">
      {/* SECTION ONE */}
      <section className="bg-mobile-main lg:bg-main bg-cover bg-center h-[100vh] relative">
        <header className="pt-10 sm:pt-14 lg:pt-[50px] 2xl:pt-[58px] px-5 md:px-16">
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
      
        <div className="z-[2] lg:pt-[18.38%] w-full lg:absolute bottom-0 xl:bg-transparent">
          <div className="z-[1] px-6 lg:p-0 max-w-[500px] lg:max-w-[900px] 2xl:max-w-[1200px] m-auto lg:flex lg:absolute bottom-[calc(290px+.5vw)] xl:bottom-[calc(150px+3vw)] 4xl:bottom-[calc(215px+3vw)] left-0 right-0 justify-center mt-10 sm:mt-20 md:mt-48 2xl:mt-0">
            <div className="lg:order-2 lg:self-center lg:w-[400px] 3xl:w-[640px] lg:mt-14">
              <img src="teddybearclub-logo.png" alt="teddy bear club logo" />
              <h2 className="font-medium px-4 lg:w-[90%] mt-10 text-center lg:text-left lg:text-base 3xl:text-[24px] 3xl:leading-[35px] text-white m-auto">
                The TeddySwap Initial NFT Offering provides TEDY tokens, boosts yield farming, and more on the TeddySwap DEX.
              </h2>
            </div>
            <div className="mt-8 lg:mt-0 absolute left-0 right-0 m-auto lg:relative bottom-0 w-[280px] md:w-[420px] lg:w-[413px] 3xl:w-[643px] 2xl:ml-[45px] xl:mx-0">
              <img className="w-full" src="teddy-smirk.png" alt="A cartoon teddy bear smirking" />
            </div>
          </div>
          <div className="hidden lg:block bg-wave bg-contain bg-no-repeat w-full pt-[18.38%] absolute bottom-[calc(311px-15vw)] xl:bottom-0 z-[2]"></div>
          <div className="hidden lg:block h-[calc(315px-15vw)] bg-aztec xl:hidden"></div>
        </div>

      </section>

      {/* SECTION TWO */}
      <section className="w-[300px] md:w-[500px] m-auto lg:w-[900px] xl:w-[1200px] pt-12 lg:pt-8">
        <h3 className="text-gold-sand text-center font-bold text-[20px] xl:text-[32px]">Mint Price: 150 ADA</h3>
        <div className="mt-5 lg:mt-14">
          <h4 className="text-gold-sand font-medium text-[14px] lg:text-[18px] xl:text-[30px]">Each NFT includes</h4>
          <ul className="text-gold-sand flex flex-col gap-4 xl:gap-[35px] 3xl:gap-[46px] mt-2 2xl:mt-4">
            <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 3xl:text-[80px] rounded lg:rounded-[15px] 3xl:rounded-[25px] py-5 md:py-7 lg:py-10 xl:py-14 3xl:py-[66px] font-bold w-[85%] 3xl:w-[1101px]">
              Up to 30,000 TEDY
            </li>
            <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 3xl:text-[80px] lg:rounded-[15px] rounded 3xl:rounded-[25px] xl:py-14 py-5 lg:py-10 md:py-7 3xl:py-[66px] font-bold w-[85%] 3xl:w-[1101px] self-end">
              +3% FISO Rewards <span className="text-[8px] md:text-[12px] 3xl:text-[16px]">+up to 20%</span>
            </li>
            <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 3xl:text-[80px] lg:rounded-[15px] rounded 3xl:rounded-[25px] xl:py-14 py-5 lg:py-10 md:py-7 3xl:py-[66px] font-bold w-[85%] 3xl:w-[1101px]">
              +2% LBE Bonus <span className="text-[8px] md:text-[12px] 3xl:text-[16px]">*Up to 20%</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 xl:mt-[120px] 2xl:mt-[232px] lg:flex items-center justify-between lg:gap-20 xl:gap-40">
          <div className=" grow text-white text-justify order-2 xl:w-[514px] font-bold xl:text-[28px]">
            <p>
              The Teddy Bears Club is a limited NFT collection that provides utility to users of TeddySwap, the coziest stable-coin DEX on Cardano. Join the Teddy Bears Club and earn TEDY tokens.
            </p>
            <p className="mt-6">
              Members of the The Teddy Bears Club will receive 20,00 to 30,00 TEDY tokens  To learn more, check out our medium.
            </p>
          </div>
          <ul className="hidden grow lg:grid grid-cols-1 lg:grid-cols-2 order-1 m-auto gap-8 xl:gap-10 mt-20 lg:mt-0">
            <li className="order-2 lg:order-1"><img src="teddy-1.png" alt="random teddy nft" /></li>
            <li className="order-3 lg:order-2"><img src="teddy-2.png" alt="random teddy nft" /></li>
            <li className="order-1 lg:order-3"><img src="teddy-3.png" alt="random teddy nft" /></li>
            <li className="order-4 lg:order-4"><img src="teddy-4.png" alt="random teddy nft" /></li>
          </ul>
        </div>
      </section>

      {/* SECTION THREE */}
      <section className="w-[300px] md:w-[500px] lg:w-[900px] xl:w-[1200px] m-auto xl:mt-20 pt-14">
        <h2 className="text-gold-sand lg:text-[25px] xl:text-[50px] font-bold">Explorer</h2>
        <div className="my-4 flex w-full flex-col gap-10 md:flex-row">
          <div className="flex w-full justify-end md:justify-start lg:justify-end md:mt-0 md:order-1">
            <TextField className="w-full md:w-auto" id="outlined-basic" label="Search" variant="outlined" size="small" InputProps={{ endAdornment: <Search /> }} value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div className="flex w-full ">
            <Pagination className="lg:hidden" size="small" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
            <Pagination className="hidden lg:block" size="large" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
          </div>
        </div>
        <div className="xl:mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-12">
          {bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').slice((page - 1) * ASSETS_PER_PAGE, ((page - 1) * ASSETS_PER_PAGE) + ASSETS_PER_PAGE).map((a, i) => {
            return (
              <Card sx={{ background: '#1a282e' }} className="!rounded-md" elevation={6} key={i}>
                <div className="relative">
                  <Image
                    src={`https://teddyswap.infura-ipfs.io/ipfs/${a.url}`}
                    preview={true}
                    fallback="/t3.webp"
                    placeholder={<div className="absolute w-full h-full top-0 left-0 grid justify-center content-center bg-blue-500 opacity-80"><SyncIcon className="animate-spin" /></div>}
                  />
                </div>
                <CardHeader
                  sx={{display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'center'}}
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
      </section> 
    </main>
  );
}

export default App;
