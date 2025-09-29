import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nsas")
export default class NsaController {
  @operation({
    summary: "Get Nsas",
  })
  @get()
  static getNsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nsa",
  })
  @post("{id}")
  static createNsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
