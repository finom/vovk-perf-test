import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvxes")
export default class KvxController {
  @operation({
    summary: "Get Kvxes",
  })
  @get()
  static getKvxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvx",
  })
  @post("{id}")
  static createKvx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
