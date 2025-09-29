import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezs")
export default class EzsController {
  @operation({
    summary: "Get Ezs",
  })
  @get()
  static getEzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezs",
  })
  @post("{id}")
  static createEzs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
