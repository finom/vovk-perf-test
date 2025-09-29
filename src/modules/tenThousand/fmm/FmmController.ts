import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmms")
export default class FmmController {
  @operation({
    summary: "Get Fmms",
  })
  @get()
  static getFmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fmm",
  })
  @post("{id}")
  static createFmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
