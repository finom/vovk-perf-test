import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ilos")
export default class IloController {
  @operation({
    summary: "Get Ilos",
  })
  @get()
  static getIlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ilo",
  })
  @post("{id}")
  static createIlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
