import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("idvs")
export default class IdvController {
  @operation({
    summary: "Get Idvs",
  })
  @get()
  static getIdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Idv",
  })
  @post("{id}")
  static createIdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
