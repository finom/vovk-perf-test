import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lvs")
export default class LvsController {
  @operation({
    summary: "Get Lvs",
  })
  @get()
  static getLvs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lvs",
  })
  @post("{id}")
  static createLvs = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
