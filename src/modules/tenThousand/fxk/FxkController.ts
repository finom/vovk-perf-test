import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxks")
export default class FxkController {
  @operation({
    summary: "Get Fxks",
  })
  @get()
  static getFxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxk",
  })
  @post("{id}")
  static createFxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
