import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvzs")
export default class KvzController {
  @operation({
    summary: "Get Kvzs",
  })
  @get()
  static getKvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvz",
  })
  @post("{id}")
  static createKvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
