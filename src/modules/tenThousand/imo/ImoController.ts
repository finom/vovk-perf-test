import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imos")
export default class ImoController {
  @operation({
    summary: "Get Imos",
  })
  @get()
  static getImos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imo",
  })
  @post("{id}")
  static createImo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
