import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvbs")
export default class KvbController {
  @operation({
    summary: "Get Kvbs",
  })
  @get()
  static getKvbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvb",
  })
  @post("{id}")
  static createKvb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
