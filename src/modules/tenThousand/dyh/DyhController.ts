import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dyhs")
export default class DyhController {
  @operation({
    summary: "Get Dyhs",
  })
  @get()
  static getDyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dyh",
  })
  @post("{id}")
  static createDyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
