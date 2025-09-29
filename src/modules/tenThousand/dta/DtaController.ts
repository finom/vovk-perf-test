import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtas")
export default class DtaController {
  @operation({
    summary: "Get Dtas",
  })
  @get()
  static getDtas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dta",
  })
  @post("{id}")
  static createDta = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
