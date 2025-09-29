import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxs")
export default class FxsController {
  @operation({
    summary: "Get Fxs",
  })
  @get()
  static getFxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxs",
  })
  @post("{id}")
  static createFxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
