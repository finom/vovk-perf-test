import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxds")
export default class FxdController {
  @operation({
    summary: "Get Fxds",
  })
  @get()
  static getFxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxd",
  })
  @post("{id}")
  static createFxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
