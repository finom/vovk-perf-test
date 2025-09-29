import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hpls")
export default class HplController {
  @operation({
    summary: "Get Hpls",
  })
  @get()
  static getHpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hpl",
  })
  @post("{id}")
  static createHpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
