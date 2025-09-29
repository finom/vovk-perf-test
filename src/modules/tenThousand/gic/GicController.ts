import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gics")
export default class GicController {
  @operation({
    summary: "Get Gics",
  })
  @get()
  static getGics = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gic",
  })
  @post("{id}")
  static createGic = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
