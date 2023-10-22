import { sequelize, Sources } from "$lib/server/server";

export async function load({ fetch, params }: any) {
  const { term } = params;
  let sourceData = {
    tiktokData: Array<string>(),
    redditData: Array<JSON>(),
    wikiData: Array<JSON>(),
    tmdbData: Array<JSON>(),
    urbData: Array<JSON>(),
    yelpData: Array<JSON>(),
  };

  await loadTiktoks(fetch, term).then((tiktokData) => {
    sourceData.tiktokData = tiktokData.data;
  });

  await loadReddit(fetch, term).then((redditData) => {
    for (let i = 0; i < redditData.data.children.length; i++) {
      sourceData.redditData.push(redditData.data.children[i].data);
    }
  });

await loadWiki(fetch,term).then((wikiData) => {
  for(let i = 0; i < 2; i++)
  {
    sourceData.wikiData.push(wikiData.query.search[i]);
  }
});

await loadTMDB(fetch,term).then((tmdbData) => {
  for(let i = 0; i < 2; i++)
  {
    sourceData.tmdbData.push(tmdbData.results[i]);
  }
});
  
  
await loadUrb(fetch,term).then((urbData) => {
  for(let i = 0; i < 2; i++)
  {
    sourceData.urbData.push(urbData.list[i]);
  }
}); 
  return sourceData;
}

async function loadTiktoks(fetch:any, term:string) {
  const res = await fetch(`/api/tiktok?q=${term}`);
  let tiktokData = await res.json();
  return tiktokData;
}

async function loadReddit(fetch:any, term:string) {
  const res = await fetch(`/api/reddit?q=${term}`);
  let redditData = await res.json();
  return redditData;
}

async function loadWiki(fetch: any, term: string)
{
  const res = await fetch(`/api/wikipedia?srsearch=${term}`);
  let wikiData = await res.json();
  return wikiData;
}

async function loadTMDB(fetch: any, term: string)
{
  const res = await fetch(`/api/tmdb?query=${term}`);
  let tmdbData = await res.json();
  return tmdbData;
}

async function loadUrb(fetch: any, term: string)
{
  const res = await fetch(`/api/urbandictionary?term=${term}`);
  let urbData = await res.json();
  return urbData;
}