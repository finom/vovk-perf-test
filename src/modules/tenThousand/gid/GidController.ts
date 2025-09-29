import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gids")
export default class GidController {
  @operation({
    summary: "Get Gids",
  })
  @get()
  static getGids = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gid",
  })
  @post("{id}")
  static createGid = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
