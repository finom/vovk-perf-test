import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvls")
export default class KvlController {
  @operation({
    summary: "Get Kvls",
  })
  @get()
  static getKvls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvl",
  })
  @post("{id}")
  static createKvl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
