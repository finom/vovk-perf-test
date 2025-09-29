import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egrs")
export default class EgrController {
  @operation({
    summary: "Get Egrs",
  })
  @get()
  static getEgrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egr",
  })
  @post("{id}")
  static createEgr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
