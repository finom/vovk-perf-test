import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbms")
export default class CbmController {
  @operation({
    summary: "Get Cbms",
  })
  @get()
  static getCbms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbm",
  })
  @post("{id}")
  static createCbm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
