import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alos")
export default class AloController {
  @operation({
    summary: "Get Alos",
  })
  @get()
  static getAlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alo",
  })
  @post("{id}")
  static createAlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
