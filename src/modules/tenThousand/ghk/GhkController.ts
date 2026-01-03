import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghks")
export default class GhkController {
  @operation({
    summary: "Get Ghks",
  })
  @get()
  static getGhks = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghk",
  })
  @post("{id}")
  static createGhk = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
