import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gmns")
export default class GmnController {
  @operation({
    summary: "Get Gmns",
  })
  @get()
  static getGmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gmn",
  })
  @post("{id}")
  static createGmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
