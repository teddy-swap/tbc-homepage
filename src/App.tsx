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
    <div className="App bg-main bg-cover bg-center w-[100vw] h-[100vh] pb-6">
      <main className="container mx-auto relative px-2 md:py-0">
        <header className="pt-4">
          <div className="flex justify-center lg:justify-start"><img src="teddy-logo.svg" alt="logo" className="w-[200px]" /></div>
          <h1 className="text-[#66A7F2] lg:text-[35px] text-[25px] font-bold text-center">Teddy Bears Club</h1>
          <h2 className="text-[#66A7F2] lg:text-[25px] text-[15px] font-bold text-center">NFT Collection</h2>
        </header>
        <section className="mt-4">
          <h2 className="text-[#66A7F2] lg:text-[25px] text-[15px] font-bold">Utilities</h2>
          <div className="mt-4 grid lg:grid-cols-3 grid-cols-1 gap-12">
            <Card sx={{ background: '#1a282e' }} className="!rounded-md p-6" elevation={6}>
              <CardMedia
                component="img"
                height="194"
                image="/t1.webp"
                alt="Teddy1"
              />
              <CardHeader
                className="text-center"
                title="Earn $TEDY"
                subheader="Earn between 10,500-28,000 TEDY tokens per NFT!"
                titleTypographyProps={{
                  className: 'text-white'
                }}
              />
            </Card>
            <Card sx={{ background: '#1a282e' }} className="!rounded-md p-6" elevation={6}>
              <CardMedia
                component="img"
                height="194"
                image="/t2.webp"
                alt="Teddy1"
              />
              <CardHeader
                className="text-center"
                title="FISO Bonus"
                subheader="10% Bonus FISO rewards per NFT!"
                titleTypographyProps={{
                  className: 'text-white'
                }}
              />
              <CardActions className="justify-center">
                <Button startIcon={<WalletOutlined />} size="small" href="https://fiso.teddyswap.org/" target="_blank">Stake Now!</Button>
              </CardActions>
            </Card>
            <Card sx={{ background: '#1a282e' }} className="!rounded-md p-6" elevation={6}>
              <CardMedia
                component="img"
                height="194"
                image="/t3.webp"
                alt="Teddy1"
              />
              <CardHeader
                className="text-center"
                title="Yield Farming & LBE Bonus"
                subheader="1% bonus for providing liquidity on certain pairs and LBE event!"
                titleTypographyProps={{
                  className: 'text-white'
                }}
              />
            </Card>
          </div>
        </section>
        <section className="mt-4">
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
