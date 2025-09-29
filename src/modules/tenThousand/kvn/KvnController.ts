import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvns")
export default class KvnController {
  @operation({
    summary: "Get Kvns",
  })
  @get()
  static getKvns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvn",
  })
  @post("{id}")
  static createKvn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
