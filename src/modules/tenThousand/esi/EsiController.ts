import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esis")
export default class EsiController {
  @operation({
    summary: "Get Esis",
  })
  @get()
  static getEsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esi",
  })
  @post("{id}")
  static createEsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
