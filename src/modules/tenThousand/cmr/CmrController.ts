import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cmrs")
export default class CmrController {
  @operation({
    summary: "Get Cmrs",
  })
  @get()
  static getCmrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cmr",
  })
  @post("{id}")
  static createCmr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
