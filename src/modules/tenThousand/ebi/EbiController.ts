import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebis")
export default class EbiController {
  @operation({
    summary: "Get Ebis",
  })
  @get()
  static getEbis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebi",
  })
  @post("{id}")
  static createEbi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
