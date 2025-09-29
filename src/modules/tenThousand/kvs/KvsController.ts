import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvs")
export default class KvsController {
  @operation({
    summary: "Get Kvs",
  })
  @get()
  static getKvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvs",
  })
  @post("{id}")
  static createKvs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
