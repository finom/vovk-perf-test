import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvts")
export default class FvtController {
  @operation({
    summary: "Get Fvts",
  })
  @get()
  static getFvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvt",
  })
  @post("{id}")
  static createFvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
