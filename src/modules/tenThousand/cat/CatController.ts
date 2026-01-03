import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cats")
export default class CatController {
  @operation({
    summary: "Get Cats",
  })
  @get()
  static getCats = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Cat",
  })
  @post("{id}")
  static createCat = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
