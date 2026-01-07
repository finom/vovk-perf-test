import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghv")
export default class GhvController {
  @operation({
    summary: "Get Ghv",
  })
  @get()
  static getGhv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghv",
  })
  @post("{id}")
  static createGhv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
