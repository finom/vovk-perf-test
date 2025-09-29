import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cjts")
export default class CjtController {
  @operation({
    summary: "Get Cjts",
  })
  @get()
  static getCjts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cjt",
  })
  @post("{id}")
  static createCjt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
