import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pas")
export default class PaController {
  @operation({
    summary: "Get Pas",
  })
  @get()
  static getPas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pa",
  })
  @post("{id}")
  static createPa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
