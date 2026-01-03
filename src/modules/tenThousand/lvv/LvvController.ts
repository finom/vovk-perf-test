import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvvs")
export default class LvvController {
  @operation({
    summary: "Get Lvvs",
  })
  @get()
  static getLvvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvv",
  })
  @post("{id}")
  static createLvv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
