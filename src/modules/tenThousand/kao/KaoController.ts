import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kaos")
export default class KaoController {
  @operation({
    summary: "Get Kaos",
  })
  @get()
  static getKaos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kao",
  })
  @post("{id}")
  static createKao = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
