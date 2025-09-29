import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dps")
export default class DpController {
  @operation({
    summary: "Get Dps",
  })
  @get()
  static getDps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dp",
  })
  @post("{id}")
  static createDp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
