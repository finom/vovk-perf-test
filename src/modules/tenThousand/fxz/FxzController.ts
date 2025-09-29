import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxzs")
export default class FxzController {
  @operation({
    summary: "Get Fxzs",
  })
  @get()
  static getFxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxz",
  })
  @post("{id}")
  static createFxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
