import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsas")
export default class JsaController {
  @operation({
    summary: "Get Jsas",
  })
  @get()
  static getJsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsa",
  })
  @post("{id}")
  static createJsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
