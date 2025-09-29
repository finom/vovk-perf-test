import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyws")
export default class DywController {
  @operation({
    summary: "Get Dyws",
  })
  @get()
  static getDyws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyw",
  })
  @post("{id}")
  static createDyw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
