import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxns")
export default class FxnController {
  @operation({
    summary: "Get Fxns",
  })
  @get()
  static getFxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxn",
  })
  @post("{id}")
  static createFxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
