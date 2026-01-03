import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvts")
export default class LvtController {
  @operation({
    summary: "Get Lvts",
  })
  @get()
  static getLvts = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvt",
  })
  @post("{id}")
  static createLvt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
