import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esjs")
export default class EsjController {
  @operation({
    summary: "Get Esjs",
  })
  @get()
  static getEsjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esj",
  })
  @post("{id}")
  static createEsj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
