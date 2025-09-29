import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aucs")
export default class AucController {
  @operation({
    summary: "Get Aucs",
  })
  @get()
  static getAucs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auc",
  })
  @post("{id}")
  static createAuc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
