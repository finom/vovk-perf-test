import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvks")
export default class KvkController {
  @operation({
    summary: "Get Kvks",
  })
  @get()
  static getKvks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvk",
  })
  @post("{id}")
  static createKvk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
