import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ctns")
export default class CtnController {
  @operation({
    summary: "Get Ctns",
  })
  @get()
  static getCtns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ctn",
  })
  @post("{id}")
  static createCtn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
