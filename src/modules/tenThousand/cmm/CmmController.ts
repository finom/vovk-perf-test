import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmms")
export default class CmmController {
  @operation({
    summary: "Get Cmms",
  })
  @get()
  static getCmms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmm",
  })
  @post("{id}")
  static createCmm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
