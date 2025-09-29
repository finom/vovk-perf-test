import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpzs")
export default class DpzController {
  @operation({
    summary: "Get Dpzs",
  })
  @get()
  static getDpzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpz",
  })
  @post("{id}")
  static createDpz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
