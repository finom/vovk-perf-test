import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpws")
export default class LpwController {
  @operation({
    summary: "Get Lpws",
  })
  @get()
  static getLpws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpw",
  })
  @post("{id}")
  static createLpw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
