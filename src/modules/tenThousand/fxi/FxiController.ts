import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxis")
export default class FxiController {
  @operation({
    summary: "Get Fxis",
  })
  @get()
  static getFxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxi",
  })
  @post("{id}")
  static createFxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
