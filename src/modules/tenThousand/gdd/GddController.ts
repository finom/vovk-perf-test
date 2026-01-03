import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gdds")
export default class GddController {
  @operation({
    summary: "Get Gdds",
  })
  @get()
  static getGdds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gdd",
  })
  @post("{id}")
  static createGdd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
