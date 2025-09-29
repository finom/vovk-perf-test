import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxrs")
export default class FxrController {
  @operation({
    summary: "Get Fxrs",
  })
  @get()
  static getFxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxr",
  })
  @post("{id}")
  static createFxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
