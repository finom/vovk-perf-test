import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsas")
export default class HsaController {
  @operation({
    summary: "Get Hsas",
  })
  @get()
  static getHsas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsa",
  })
  @post("{id}")
  static createHsa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
