import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gzs")
export default class GzsController {
  @operation({
    summary: "Get Gzs",
  })
  @get()
  static getGzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gzs",
  })
  @post("{id}")
  static createGzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
