import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ndas")
export default class NdaController {
  @operation({
    summary: "Get Ndas",
  })
  @get()
  static getNdas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nda",
  })
  @post("{id}")
  static createNda = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
