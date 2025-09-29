import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qzs")
export default class QzController {
  @operation({
    summary: "Get Qzs",
  })
  @get()
  static getQzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qz",
  })
  @post("{id}")
  static createQz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
