import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fxfs")
export default class FxfController {
  @operation({
    summary: "Get Fxfs",
  })
  @get()
  static getFxfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fxf",
  })
  @post("{id}")
  static createFxf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
