import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpts")
export default class BptController {
  @operation({
    summary: "Get Bpts",
  })
  @get()
  static getBpts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpt",
  })
  @post("{id}")
  static createBpt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
