import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lows")
export default class LowController {
  @operation({
    summary: "Get Lows",
  })
  @get()
  static getLows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Low",
  })
  @post("{id}")
  static createLow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
