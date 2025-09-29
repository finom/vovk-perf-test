import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtas")
export default class GtaController {
  @operation({
    summary: "Get Gtas",
  })
  @get()
  static getGtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gta",
  })
  @post("{id}")
  static createGta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
