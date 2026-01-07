import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvt")
export default class LvtController {
  @operation({
    summary: "Get Lvt",
  })
  @get()
  static getLvt = procedure({
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
