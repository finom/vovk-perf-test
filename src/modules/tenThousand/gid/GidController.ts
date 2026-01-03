import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gids")
export default class GidController {
  @operation({
    summary: "Get Gids",
  })
  @get()
  static getGids = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gid",
  })
  @post("{id}")
  static createGid = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
