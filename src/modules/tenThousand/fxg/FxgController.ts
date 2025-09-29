import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxgs")
export default class FxgController {
  @operation({
    summary: "Get Fxgs",
  })
  @get()
  static getFxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxg",
  })
  @post("{id}")
  static createFxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
