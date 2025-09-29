import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yvs")
export default class YvController {
  @operation({
    summary: "Get Yvs",
  })
  @get()
  static getYvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yv",
  })
  @post("{id}")
  static createYv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
