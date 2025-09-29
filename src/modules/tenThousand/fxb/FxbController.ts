import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxbs")
export default class FxbController {
  @operation({
    summary: "Get Fxbs",
  })
  @get()
  static getFxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxb",
  })
  @post("{id}")
  static createFxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
