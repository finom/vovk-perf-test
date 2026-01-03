import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ghws")
export default class GhwController {
  @operation({
    summary: "Get Ghws",
  })
  @get()
  static getGhws = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Ghw",
  })
  @post("{id}")
  static createGhw = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
