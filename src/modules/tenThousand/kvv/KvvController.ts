import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvvs")
export default class KvvController {
  @operation({
    summary: "Get Kvvs",
  })
  @get()
  static getKvvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvv",
  })
  @post("{id}")
  static createKvv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
