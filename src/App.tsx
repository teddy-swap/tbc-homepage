import { Card, CardHeader, Avatar, Pagination, TextField, Tab, Tabs , Box } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import { Search } from '@mui/icons-material';
import { useEffect, useState, SyntheticEvent } from 'react';
import Image from 'rc-image';
import SyncIcon from '@mui/icons-material/Sync';

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
  const [tabPage, setTabPage] = useState<string>('1');

  useEffect(() => {
    const loadAssets = async () => {
      const assetReq = await fetch("/rankedAssets.json");
      const assetResult: RankedTeddyBearAsset[] = await assetReq.json();
      setBears(assetResult);
    }

    loadAssets();
    
    (window as any).particlesJS.load('section-1', '/particle-config.json', function() {
      console.log('callback - particles.js config loaded');
    });

  }, []);

  const switchTab = (event: SyntheticEvent, newTabPage: string) => {
    setTabPage(newTabPage);
  };

  return (
    <main className="App w-[100vw] h-[100vh] pb-14 bg-aztec">
      {/* SECTION ONE */}
      <section id="section-1" className="bg-mobile-main lg:bg-main bg-cover bg-center h-[100vh] relative">
        <header className="pt-8 xs:pt-14 lg:pt-[30px] px-5 md:px-16 absolute z-[10] w-full">
          <div className="flex flex-col items-center md:flex-row md:justify-between max-w-[1700px] m-auto">
            <div className="w-[150px] md:w-[150px] xl:w-[180px] 2xl:w-[210px]"><a href="/"><img src="teddy-logo.svg" alt="logo" /></a></div>
            <ul className="flex gap-5 mt-6 md:mt-0">
              <li className="w-[25px]"><a target="_blank" href="https://twitter.com/TeddySwap" rel="noreferrer"><img src="twitter.svg" alt="twitter icon" /></a></li>
              <li className="w-[25px]"><a target="_blank" href="https://t.me/teddyswap" rel="noreferrer"><img src="telegram.svg" alt="telegram icon" /></a></li>
              <li className="w-[25px]"><a target="_blank" href="https://discord.gg/GRvcAnqtZG" rel="noreferrer"><img src="discord.svg" alt="discord icon" /></a></li>
              <li className="w-[25px]"><a target="_blank" href="https://docs.teddyswap.org/articles/teddy-bears-club-round-2" rel="noreferrer"><img src="medium.svg" alt="medium icon" /></a></li>
            </ul>
          </div>
        </header>

        <div className="z-[2] lg:pt-[18.38%] w-full lg:absolute lg:bottom-0 xl:bg-transparent">
          <div className="px-6 lg:p-0 max-w-[500px] lg:max-w-[900px] 2xl:max-w-[1200px] 4xl:max-w-[1700] m-auto lg:flex lg:absolute bottom-[calc(155px+13vw)] xl:bottom-[calc(20px+13vw)] 2xl:bottom-[calc(10px+13vw)] 4xl:bottom-[calc(18px+13vw)] left-0 right-0 justify-center pt-[calc(70px+15vw)] xs:pt-[calc(130px+15vw)]">
            <div className="lg:order-2 lg:self-center lg:w-[400px] 3xl:w-[640px] lg:mt-14">
              <img src="teddybearclub-logo.png" alt="teddy bear club logo" />
              <h2 className="font-medium px-4 lg:w-[90%] mt-2 sm:mt-6 text-center lg:text-left lg:text-base 3xl:text-[24px] 3xl:leading-[35px] text-white m-auto">
                The TeddySwap Initial NFT Offering is your gateway to acquiring TEDY tokens, boosting your yield farming profits, and accessing exclusive benefits that are only available to members of the Teddy Bears Club NFT collection. 
              </h2>
            </div>
            <div className="mt-8 lg:mt-0 absolute z-[10] left-0 right-0 m-auto lg:relative bottom-0 w-[280px] md:w-[420px] lg:w-[413px] 3xl:w-[643px] 4xl:w-1/2 2xl:ml-[45px] xl:mx-0">
              <img className="w-full" src="teddy-smirk.png" alt="A cartoon teddy bear smirking" />
            </div>
          </div>
          <div className="hidden lg:block bg-wave bg-contain bg-no-repeat w-full pt-[18.38%] absolute bottom-[calc(311px-15vw)] xl:bottom-[-1px] z-[11]"></div>
          <div className="hidden lg:block h-[calc(315px-15vw)] bg-aztec xl:hidden"></div>
        </div>
      </section>

      <div className="px-6 sm:px-12 pt-12 lg:pt-0 xl:pt-12 m-auto lg:w-[900px] xl:w-[1200px]">
        <TabContext value={tabPage}>
          <Box>
            <Tabs
              value={tabPage}
              onChange={switchTab}
              sx={{color: '#E7C596', }}
              textColor="inherit"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              TabIndicatorProps={ {style: { background: '#E7C596' }} }
            >
              <Tab className="!font-montserrat !font-bold !xl:text-[32px]" value="1" label="Round One" />
              <Tab className="!font-montserrat !font-bold !xl:text-[32px]" value="2" label="Round Two" />
            </Tabs>
          </Box>
          {/* ROUND ONE */}
          <TabPanel sx={{padding: '0'}} value="1">
            {/* SECTION TWO */}
            <section>
              <h3 className="text-gold-sand text-center font-bold text-[20px] xl:text-[32px] mt-8">Mint Price: 350 ADA</h3>
              <div className="mt-5 lg:mt-14">
                <h4 className="text-gold-sand font-medium text-[14px] lg:text-[18px] xl:text-[30px]">Each NFT includes</h4>
                <ul className="text-gold-sand flex flex-col gap-4 sm:gap-6 xl:gap-[35px] 3xl:gap-[46px] mt-2 2xl:mt-4">
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] rounded sm:rounded-[8px] lg:rounded-[15px] 4xl:rounded-[25px] py-5 md:py-7 xl:py-10 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%]">
                    Up to 30,800 TEDY
                  </li>
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] sm:rounded-[8px] lg:rounded-[15px] rounded 4xl:rounded-[25px] xl:py-10 py-5 md:py-7 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%] self-end">
                    +5% FISO Rewards
                  </li>
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] sm:rounded-[8px] lg:rounded-[15px] rounded 4xl:rounded-[25px] xl:py-10 py-5 md:py-7 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%]">
                    +1% LBE Bonus
                  </li>
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] sm:rounded-[8px] lg:rounded-[15px] rounded 4xl:rounded-[25px] xl:py-10 py-5 md:py-7 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%] self-end">
                    +1% on Yield Farming
                  </li>
                </ul>
              </div>
              <div className="mt-16 xl:mt-[120px] 2xl:mt-[232px] sm:flex items-center justify-between sm:gap-16">
                <div className="grow text-white text-justify sm:text-left order-2 xl:w-[514px] font-bold xl:text-[25px]">
                  <p>
                    The Teddy Bears Club is a limited NFT collection that provides advantages to TeddySwap users on Cardano. You can join the Teddy Bears Club and obtain TEDY tokens.
                  </p>
                  <p className="mt-6">
                  As a member of the Teddy Bears Club in round 1, you have the opportunity to receive 10,500 up to 30,800 TEDY tokens. To learn more, check out our <a target="_blank" className="font-black underline" href="https://docs.teddyswap.org/articles/teddy-bears-club-minting-utility-and-launch-date" rel="noreferrer">article</a>.
                  </p>
                </div>
                <ul className="hidden m-0 grow sm:grid grid-cols-1 sm:grid-cols-2 order-1 m-auto gap-8 sm:gap-6 xl:gap-10 mt-20 sm:mt-0">
                  <li className="order-2 lg:order-1"><img src="teddy-1.png" alt="random teddy nft" /></li>
                  <li className="order-3 lg:order-2"><img src="teddy-2.png" alt="random teddy nft" /></li>
                  <li className="order-1 lg:order-3"><img src="teddy-3.png" alt="random teddy nft" /></li>
                  <li className="order-4 lg:order-4"><img src="teddy-4.png" alt="random teddy nft" /></li>
                </ul>
              </div>
            </section>
            {/* SECTION THREE */}
            <section className="xl:mt-20 pt-14">
              <h2 className="text-gold-sand lg:text-[25px] xl:text-[50px] font-bold">Explorer</h2>
              <div className="my-4 flex w-full flex-col gap-10 md:flex-row justify-between">
                <div className="flex w-full justify-end md:justify-start lg:justify-end md:mt-0 md:order-1">
                    <TextField id="outlined-basic" label="Search" variant="outlined" size="small" fullWidth InputProps={{ endAdornment: <Search /> }} value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="flex w-full ">
                  <Pagination className="lg:hidden" size="small" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
                  <Pagination className="hidden lg:block" size="large" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
                </div>
              </div>
              <div className="xl:mt-4 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-12">
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
                        sx={{display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'center', justifyContent: 'center', "> div": { marginRight: '0' }}}
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
                <Pagination className="lg:hidden" size="small" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
                <Pagination className="hidden lg:block" size="large" variant="outlined" page={page} count={Math.ceil(Number(bears?.filter(b => b.name.indexOf(search) !== -1 || search === '').length) / ASSETS_PER_PAGE)} sx={{ color: 'white' }} onChange={(e, v) => setPage(v)} />
              </div>
            </section>
          </TabPanel>
          {/* ROUND TWO */}
          <TabPanel sx={{padding: '0'}} value="2">
            {/* SECTION TWO */}
            <section>
              <h3 className="text-gold-sand text-center font-bold text-[20px] xl:text-[32px] mt-8">Mint Price: 150 ADA</h3>
              <div className="mt-5 lg:mt-14">
                <h4 className="text-gold-sand font-medium text-[14px] lg:text-[18px] xl:text-[30px]">Each NFT includes</h4>
                <ul className="text-gold-sand flex flex-col gap-4 sm:gap-6 xl:gap-[35px] 3xl:gap-[46px] mt-2 2xl:mt-4">
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] rounded sm:rounded-[8px] lg:rounded-[15px] 4xl:rounded-[25px] py-5 md:py-7 xl:py-10 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%]">
                    Up to 7,000 TEDY
                  </li>
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] sm:rounded-[8px] lg:rounded-[15px] rounded 4xl:rounded-[25px] xl:py-10 py-5 md:py-7 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%] self-end">
                    +2% FISO Rewards
                  </li>
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] sm:rounded-[8px] lg:rounded-[15px] rounded 4xl:rounded-[25px] xl:py-10 py-5 md:py-7 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%]">
                    +0.4% LBE Bonus
                  </li>
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] sm:rounded-[8px] lg:rounded-[15px] rounded 4xl:rounded-[25px] xl:py-10 py-5 md:py-7 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%] self-end">
                    +0.4% on Yield Farming
                  </li>
                  <li className="bg-firefly text-center text-[22px] md:text-[30px] xl:text-[50px] 4xl:text-[60px] rounded sm:rounded-[8px] lg:rounded-[15px] 4xl:rounded-[25px] py-5 md:py-7 lg:py-10 xl:py-14 4xl:py-[66px] font-bold w-[90%] 4xl:w-[90%]">
                    +2% Incentivized Testnet
                  </li>
                </ul>
              </div>
              <div className="mt-16 xl:mt-[120px] 2xl:mt-[232px] sm:flex items-center justify-between sm:gap-16">
                <div className="grow text-white text-justify sm:text-left order-2 xl:w-[514px] font-bold xl:text-[28px]">
                  <p>
                    The Teddy Bears Club is a limited NFT collection that provides advantages to TeddySwap users on Cardano. You can join the Teddy Bears Club and obtain TEDY tokens.
                  </p>
                  <p className="mt-6">
                    As a member of the Teddy Bears Club in round 2, you have the chance to receive 4,200 to 7,000 TEDY tokens. To learn more, check out our <a target="_blank" className="font-black underline" href="https://docs.teddyswap.org/articles/teddy-bears-club-round-2" rel="noreferrer">article</a>.
                  </p>
                </div>
                <ul className="hidden m-0 grow sm:grid grid-cols-1 sm:grid-cols-2 order-1 m-auto gap-8 sm:gap-6 xl:gap-10 mt-20 sm:!mb-0">
                  <li className="order-2 lg:order-1"><img src="teddy-1.png" alt="random teddy nft" /></li>
                  <li className="order-3 lg:order-2"><img src="teddy-2.png" alt="random teddy nft" /></li>
                  <li className="order-1 lg:order-3"><img src="teddy-3.png" alt="random teddy nft" /></li>
                  <li className="order-4 lg:order-4"><img src="teddy-4.png" alt="random teddy nft" /></li>
                </ul>
              </div>
            </section>

            {/* SECTION THREE */}
            <section className="xl:mt-20 pt-14 w-full">
              <div className="grow text-center text-gold-sand">
                <p className="font-montserrat font-bold text-[28px] md:text-[30px] xl:text-[50px]">Round 2 Minting Soon</p>
                <p>Visit the minting website at this <a target="_blank" className="underline" href="https://teddyswap.peppermintnft.io/" rel="noreferrer">link</a></p>
              </div>
            </section>
          </TabPanel>
        </TabContext>
      </div>
    </main>
  );
}

export default App;
