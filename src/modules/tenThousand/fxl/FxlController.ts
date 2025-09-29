import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxls")
export default class FxlController {
  @operation({
    summary: "Get Fxls",
  })
  @get()
  static getFxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxl",
  })
  @post("{id}")
  static createFxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
