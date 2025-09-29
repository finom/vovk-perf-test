import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ajns")
export default class AjnController {
  @operation({
    summary: "Get Ajns",
  })
  @get()
  static getAjns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ajn",
  })
  @post("{id}")
  static createAjn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
