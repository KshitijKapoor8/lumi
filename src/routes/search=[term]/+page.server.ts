import { sequelize, Sources } from "$lib/server/server";

export async function load({ params }) {
  const { term } = params;

  return {term}
}