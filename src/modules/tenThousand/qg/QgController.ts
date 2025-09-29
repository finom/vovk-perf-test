import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qgs")
export default class QgController {
  @operation({
    summary: "Get Qgs",
  })
  @get()
  static getQgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qg",
  })
  @post("{id}")
  static createQg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
