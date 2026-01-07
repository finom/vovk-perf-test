import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvl")
export default class LvlController {
  @operation({
    summary: "Get Lvl",
  })
  @get()
  static getLvl = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvl",
  })
  @post("{id}")
  static createLvl = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
