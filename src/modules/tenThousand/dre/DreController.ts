import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dres")
export default class DreController {
  @operation({
    summary: "Get Dres",
  })
  @get()
  static getDres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dre",
  })
  @post("{id}")
  static createDre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
