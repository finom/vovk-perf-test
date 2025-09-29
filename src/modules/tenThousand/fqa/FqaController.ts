import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqas")
export default class FqaController {
  @operation({
    summary: "Get Fqas",
  })
  @get()
  static getFqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fqa",
  })
  @post("{id}")
  static createFqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
