import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpks")
export default class LpkController {
  @operation({
    summary: "Get Lpks",
  })
  @get()
  static getLpks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpk",
  })
  @post("{id}")
  static createLpk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
