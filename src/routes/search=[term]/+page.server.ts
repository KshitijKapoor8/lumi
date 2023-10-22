import { sequelize, Sources, Counts, Categories } from "$lib/server/server";
import { writable } from 'svelte/store';
import { getContext } from 'svelte';
import type { PageServerLoad } from "../$types";

export async function load({ fetch, params }: any) {
  const { term } = params;

  // const data = JSON.stringify({ prompt: term })
  // const res = await fetch(`http://localhost:5173/api/getCategories`, {
  //   method: "POST",
  //   body: data
  // })
  // const response = await res.json();
  // let ls = response.split(";");
  let bigs: any = []
  let smalls: any = []

  // TODO: get the sources we need
  let ls = ["Alternative Medicine", "Baking", "Baseball", "Basketball", "Astronomy"]

  for (let i = 0; i < ls.length; i++) {
    
    var catIds = await Categories.findAll({
      where: {
        name: ls[0]
      }
    });
  }


  for (let i = 0; i < catIds.length; i++) {
    var sources = await Counts.findAll({
      where: {
        CategoryId: catIds[i].id
      }
    });
  }

  let fin = []
  let c = 0;
  for (let i = 0; i < sources.length; i++) {
    if (sources[i].dataValues.SourceId == 2 || sources[i].dataValues.SourceId == 6) {
      bigs.push(sources[i].dataValues.SourceId);
    } else {
      smalls.push(sources[i].dataValues.SourceId);
    }
  }

  for (let i = 0; i < bigs.length; i++) {
    if (bigs[i] == 8) {
      bigs[i] = 0;
    }
  }


  const grid: any[][] = Array.from({ length: 2 }, () => 
    Array.from({ length: 3 }, () => new Item("nn", 0, 0))
  );

  let bC = 0;
  let tiled = 6;
  while (tiled > 0) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
          let temp: any = null;
          if (bC >= BIG_MAX) {
              if (smalls.length !== 0) {
                  tileSmall(smalls, grid, i, j);
                  tiled--;
              }
          } else {
              let die = false;
              temp = bigs[0];
              if (temp == 2) {
                  temp = new Item("tiktok", 1, 1);
              }
              else if (temp == 6) {
                  temp = new Item("youtube", 1, 1);
              }
              else if (temp == 8) {
                  temp = new Item("gpt", 1, 1);
              } else {
                die = true;
              }
              if (!die) {
                let diffX = temp.xSize - 1;
                let diffY = temp.ySize - 1;
                if (i + diffX < 2 && j + diffY < 3 && 
                    !grid[i][j].tiled && !grid[i + diffX][j + diffY].tiled) {
                    for (let r = i; r <= diffX + i; r++) {
                        for (let c = j; c <= diffY + j; c++) {
                            grid[r][c] = temp;
                            grid[r][c].tiled = true;
                        }
                    }
                    bigs.shift();
                    tiled -= (temp.xSize * temp.ySize);
                    bC++;
                  }
              } else {
                  if (tileSmall(smalls, grid, i, j)) {
                      tiled--;
                  }
              }
          }
      }
    }
  }
  let grid2: any[][] = Array.from({ length: 2 }, () => 
    Array.from({ length: 3 }, () => "")
  );
  // if we are doing tt
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
      grid2[i][j] = grid[i][j].name;
    }
  }

  
  
  

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

  
  let result = {
    "grid2": grid2,
    "bigs": bigs,
    "smalls": smalls,
    "test": "test",
    "sourceData": sourceData
  }


  return {
    props: {
      data: result
    }
  };

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