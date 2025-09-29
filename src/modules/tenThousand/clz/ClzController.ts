import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("clzs")
export default class ClzController {
  @operation({
    summary: "Get Clzs",
  })
  @get()
  static getClzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Clz",
  })
  @post("{id}")
  static createClz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
