import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("azs")
export default class AzsController {
  @operation({
    summary: "Get Azs",
  })
  @get()
  static getAzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Azs",
  })
  @post("{id}")
  static createAzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
