import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etvs")
export default class EtvController {
  @operation({
    summary: "Get Etvs",
  })
  @get()
  static getEtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etv",
  })
  @post("{id}")
  static createEtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
