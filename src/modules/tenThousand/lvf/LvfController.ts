import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvfs")
export default class LvfController {
  @operation({
    summary: "Get Lvfs",
  })
  @get()
  static getLvfs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvf",
  })
  @post("{id}")
  static createLvf = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
