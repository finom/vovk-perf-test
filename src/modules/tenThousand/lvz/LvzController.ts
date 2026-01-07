import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvz")
export default class LvzController {
  @operation({
    summary: "Get Lvz",
  })
  @get()
  static getLvz = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvz",
  })
  @post("{id}")
  static createLvz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
