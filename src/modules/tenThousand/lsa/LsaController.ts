import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lsas")
export default class LsaController {
  @operation({
    summary: "Get Lsas",
  })
  @get()
  static getLsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lsa",
  })
  @post("{id}")
  static createLsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
