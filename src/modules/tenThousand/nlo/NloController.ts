import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nlos")
export default class NloController {
  @operation({
    summary: "Get Nlos",
  })
  @get()
  static getNlos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nlo",
  })
  @post("{id}")
  static createNlo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
