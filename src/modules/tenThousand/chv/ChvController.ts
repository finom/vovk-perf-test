import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chvs")
export default class ChvController {
  @operation({
    summary: "Get Chvs",
  })
  @get()
  static getChvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chv",
  })
  @post("{id}")
  static createChv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
