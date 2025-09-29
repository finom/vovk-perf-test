import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmos")
export default class NmoController {
  @operation({
    summary: "Get Nmos",
  })
  @get()
  static getNmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmo",
  })
  @post("{id}")
  static createNmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
