import { sequelize, Sources } from "$lib/server/server";

export async function load() {
  // Cherrific stats go there
  const stats = {}

  // get number of stories
  stats.sources = (await sequelize.query('select count(*) as nb from story_list'))[0][0].nb

  // list of stories
  const stories = await StoryList.findAll()

  // purify data
  const clean = stories.map((s) => JSON.parse(JSON.stringify(s)))

  return { stats,  stories: clean }
}