import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ldas")
export default class LdaController {
  @operation({
    summary: "Get Ldas",
  })
  @get()
  static getLdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lda",
  })
  @post("{id}")
  static createLda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
