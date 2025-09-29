import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ijts")
export default class IjtController {
  @operation({
    summary: "Get Ijts",
  })
  @get()
  static getIjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ijt",
  })
  @post("{id}")
  static createIjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
