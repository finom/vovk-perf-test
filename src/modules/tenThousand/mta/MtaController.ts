import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtas")
export default class MtaController {
  @operation({
    summary: "Get Mtas",
  })
  @get()
  static getMtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mta",
  })
  @post("{id}")
  static createMta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
