import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kvps")
export default class KvpController {
  @operation({
    summary: "Get Kvps",
  })
  @get()
  static getKvps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kvp",
  })
  @post("{id}")
  static createKvp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
