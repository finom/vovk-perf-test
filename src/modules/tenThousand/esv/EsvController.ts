import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esvs")
export default class EsvController {
  @operation({
    summary: "Get Esvs",
  })
  @get()
  static getEsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esv",
  })
  @post("{id}")
  static createEsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
