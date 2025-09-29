import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("favs")
export default class FavController {
  @operation({
    summary: "Get Favs",
  })
  @get()
  static getFavs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fav",
  })
  @post("{id}")
  static createFav = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
