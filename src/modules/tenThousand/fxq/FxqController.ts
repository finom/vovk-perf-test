import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxqs")
export default class FxqController {
  @operation({
    summary: "Get Fxqs",
  })
  @get()
  static getFxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxq",
  })
  @post("{id}")
  static createFxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
