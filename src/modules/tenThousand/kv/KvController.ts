import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvs")
export default class KvController {
  @operation({
    summary: "Get Kvs",
  })
  @get()
  static getKvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kv",
  })
  @post("{id}")
  static createKv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
