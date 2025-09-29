import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvls")
export default class GvlController {
  @operation({
    summary: "Get Gvls",
  })
  @get()
  static getGvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvl",
  })
  @post("{id}")
  static createGvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
