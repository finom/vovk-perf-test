import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ras")
export default class RaController {
  @operation({
    summary: "Get Ras",
  })
  @get()
  static getRas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ra",
  })
  @post("{id}")
  static createRa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
