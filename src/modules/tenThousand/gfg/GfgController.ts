import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfgs")
export default class GfgController {
  @operation({
    summary: "Get Gfgs",
  })
  @get()
  static getGfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfg",
  })
  @post("{id}")
  static createGfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
