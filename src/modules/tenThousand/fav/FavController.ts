import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fav")
export default class FavController {
  @operation({
    summary: "Get Fav",
  })
  @get()
  static getFav = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Fav",
  })
  @post("{id}")
  static createFav = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
