import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("msas")
export default class MsaController {
  @operation({
    summary: "Get Msas",
  })
  @get()
  static getMsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Msa",
  })
  @post("{id}")
  static createMsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
