import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpzs")
export default class LpzController {
  @operation({
    summary: "Get Lpzs",
  })
  @get()
  static getLpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpz",
  })
  @post("{id}")
  static createLpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
