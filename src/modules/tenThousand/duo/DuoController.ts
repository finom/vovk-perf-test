import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("duos")
export default class DuoController {
  @operation({
    summary: "Get Duos",
  })
  @get()
  static getDuos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Duo",
  })
  @post("{id}")
  static createDuo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
