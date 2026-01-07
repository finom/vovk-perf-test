import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghc")
export default class GhcController {
  @operation({
    summary: "Get Ghc",
  })
  @get()
  static getGhc = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghc",
  })
  @post("{id}")
  static createGhc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
