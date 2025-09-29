import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gfns")
export default class GfnController {
  @operation({
    summary: "Get Gfns",
  })
  @get()
  static getGfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gfn",
  })
  @post("{id}")
  static createGfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
