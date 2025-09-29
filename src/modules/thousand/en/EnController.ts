import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ens")
export default class EnController {
  @operation({
    summary: "Get Ens",
  })
  @get()
  static getEns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create En",
  })
  @post("{id}")
  static createEn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
