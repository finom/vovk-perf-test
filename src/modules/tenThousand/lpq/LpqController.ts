import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpqs")
export default class LpqController {
  @operation({
    summary: "Get Lpqs",
  })
  @get()
  static getLpqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpq",
  })
  @post("{id}")
  static createLpq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
