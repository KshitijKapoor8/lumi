import { sequelize, Sources } from "$lib/server/server";

export async function load({ fetch, params }) {
  const { term } = params;
  let sourceData = {
    tiktokData:Array<string>(),
    redditData:Array<JSON>(),
    wikiData:Array<JSON>(),
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
  for(let i = 0; i < wikiData.query.search.length; i++)
  {
    sourceData.wikiData.push(wikiData.query.search[i]);
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
