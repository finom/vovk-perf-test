import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ftas")
export default class FtaController {
  @operation({
    summary: "Get Ftas",
  })
  @get()
  static getFtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fta",
  })
  @post("{id}")
  static createFta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
