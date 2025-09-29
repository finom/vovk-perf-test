import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxus")
export default class FxuController {
  @operation({
    summary: "Get Fxus",
  })
  @get()
  static getFxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxu",
  })
  @post("{id}")
  static createFxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
