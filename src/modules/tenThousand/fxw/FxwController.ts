import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxws")
export default class FxwController {
  @operation({
    summary: "Get Fxws",
  })
  @get()
  static getFxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxw",
  })
  @post("{id}")
  static createFxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
