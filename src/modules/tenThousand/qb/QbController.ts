import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qbs")
export default class QbController {
  @operation({
    summary: "Get Qbs",
  })
  @get()
  static getQbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qb",
  })
  @post("{id}")
  static createQb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
