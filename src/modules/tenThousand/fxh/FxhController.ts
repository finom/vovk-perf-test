import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxhs")
export default class FxhController {
  @operation({
    summary: "Get Fxhs",
  })
  @get()
  static getFxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxh",
  })
  @post("{id}")
  static createFxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
