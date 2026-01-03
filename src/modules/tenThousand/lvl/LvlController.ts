import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvls")
export default class LvlController {
  @operation({
    summary: "Get Lvls",
  })
  @get()
  static getLvls = procedure({
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
