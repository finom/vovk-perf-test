import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kows")
export default class KowController {
  @operation({
    summary: "Get Kows",
  })
  @get()
  static getKows = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kow",
  })
  @post("{id}")
  static createKow = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
