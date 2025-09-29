import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hts")
export default class HtController {
  @operation({
    summary: "Get Hts",
  })
  @get()
  static getHts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ht",
  })
  @post("{id}")
  static createHt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
