import { sequelize, Sources } from "$lib/server/server";

export async function load() {
  // Cherrific stats go there
  const stats = {}

  // get number of stories
  stats.sources = (await sequelize.query('select count(*) as nb from sources'))[0][0].nb

  // list of sources
  const sources = await Sources.findAll()

  // purify data
  const clean = sources.map((s) => JSON.parse(JSON.stringify(s)))

  return { stats,  sources: clean }
}