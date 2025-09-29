import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("chgs")
export default class ChgController {
  @operation({
    summary: "Get Chgs",
  })
  @get()
  static getChgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Chg",
  })
  @post("{id}")
  static createChg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
