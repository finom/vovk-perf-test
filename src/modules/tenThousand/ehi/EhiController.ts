import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehis")
export default class EhiController {
  @operation({
    summary: "Get Ehis",
  })
  @get()
  static getEhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehi",
  })
  @post("{id}")
  static createEhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
