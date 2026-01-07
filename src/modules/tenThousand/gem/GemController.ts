import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gem")
export default class GemController {
  @operation({
    summary: "Get Gem",
  })
  @get()
  static getGem = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gem",
  })
  @post("{id}")
  static createGem = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
