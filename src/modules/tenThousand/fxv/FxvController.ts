import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxvs")
export default class FxvController {
  @operation({
    summary: "Get Fxvs",
  })
  @get()
  static getFxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxv",
  })
  @post("{id}")
  static createFxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
