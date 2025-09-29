import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aras")
export default class AraController {
  @operation({
    summary: "Get Aras",
  })
  @get()
  static getAras = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ara",
  })
  @post("{id}")
  static createAra = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
