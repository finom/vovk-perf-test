import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncas")
export default class NcaController {
  @operation({
    summary: "Get Ncas",
  })
  @get()
  static getNcas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nca",
  })
  @post("{id}")
  static createNca = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
