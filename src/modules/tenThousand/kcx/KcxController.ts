import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcxes")
export default class KcxController {
  @operation({
    summary: "Get Kcxes",
  })
  @get()
  static getKcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kcx",
  })
  @post("{id}")
  static createKcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
