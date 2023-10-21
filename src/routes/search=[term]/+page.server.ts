import { sequelize, Sources } from "$lib/server/server";

export async function load() {
  // Cherrific stats go there
  const stats:any = {
    sources: [],
  }

  // get number of stories
  stats.sources = (await sequelize.query('select * from sources'))[0]

  // list of sources
  const sources = await Sources.findAll()

  // purify data
  const clean = sources.map((s:string) => JSON.parse(JSON.stringify(s)))

  return { stats,  sources: clean }
}