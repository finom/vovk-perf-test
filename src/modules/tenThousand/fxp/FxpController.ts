import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxps")
export default class FxpController {
  @operation({
    summary: "Get Fxps",
  })
  @get()
  static getFxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxp",
  })
  @post("{id}")
  static createFxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
