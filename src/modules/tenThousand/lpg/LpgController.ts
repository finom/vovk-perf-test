import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lpgs")
export default class LpgController {
  @operation({
    summary: "Get Lpgs",
  })
  @get()
  static getLpgs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lpg",
  })
  @post("{id}")
  static createLpg = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
