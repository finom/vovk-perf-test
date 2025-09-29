import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfus")
export default class KfuController {
  @operation({
    summary: "Get Kfus",
  })
  @get()
  static getKfus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfu",
  })
  @post("{id}")
  static createKfu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
