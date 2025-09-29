import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("glos")
export default class GloController {
  @operation({
    summary: "Get Glos",
  })
  @get()
  static getGlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Glo",
  })
  @post("{id}")
  static createGlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
