import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qvs")
export default class QvController {
  @operation({
    summary: "Get Qvs",
  })
  @get()
  static getQvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qv",
  })
  @post("{id}")
  static createQv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
