import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htas")
export default class HtaController {
  @operation({
    summary: "Get Htas",
  })
  @get()
  static getHtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hta",
  })
  @post("{id}")
  static createHta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
