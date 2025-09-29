import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvts")
export default class KvtController {
  @operation({
    summary: "Get Kvts",
  })
  @get()
  static getKvts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvt",
  })
  @post("{id}")
  static createKvt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
