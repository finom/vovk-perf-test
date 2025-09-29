import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("djzs")
export default class DjzController {
  @operation({
    summary: "Get Djzs",
  })
  @get()
  static getDjzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Djz",
  })
  @post("{id}")
  static createDjz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
