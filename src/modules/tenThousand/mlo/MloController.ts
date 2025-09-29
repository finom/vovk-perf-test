import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mlos")
export default class MloController {
  @operation({
    summary: "Get Mlos",
  })
  @get()
  static getMlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mlo",
  })
  @post("{id}")
  static createMlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
