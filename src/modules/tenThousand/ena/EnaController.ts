import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("enas")
export default class EnaController {
  @operation({
    summary: "Get Enas",
  })
  @get()
  static getEnas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ena",
  })
  @post("{id}")
  static createEna = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
