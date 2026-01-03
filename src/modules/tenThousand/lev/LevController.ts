import { procedure, prefix, get, post, operation } from "vovk";

@prefix("levs")
export default class LevController {
  @operation({
    summary: "Get Levs",
  })
  @get()
  static getLevs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Lev",
  })
  @post("{id}")
  static createLev = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
