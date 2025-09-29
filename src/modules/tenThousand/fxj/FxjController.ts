import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxjs")
export default class FxjController {
  @operation({
    summary: "Get Fxjs",
  })
  @get()
  static getFxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxj",
  })
  @post("{id}")
  static createFxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
