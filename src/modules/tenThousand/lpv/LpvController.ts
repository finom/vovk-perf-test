import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpvs")
export default class LpvController {
  @operation({
    summary: "Get Lpvs",
  })
  @get()
  static getLpvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpv",
  })
  @post("{id}")
  static createLpv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
