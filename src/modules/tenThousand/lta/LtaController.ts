import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ltas")
export default class LtaController {
  @operation({
    summary: "Get Ltas",
  })
  @get()
  static getLtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lta",
  })
  @post("{id}")
  static createLta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
