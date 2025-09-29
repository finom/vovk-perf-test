import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wts")
export default class WtController {
  @operation({
    summary: "Get Wts",
  })
  @get()
  static getWts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wt",
  })
  @post("{id}")
  static createWt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
