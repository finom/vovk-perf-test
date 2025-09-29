import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fhas")
export default class FhaController {
  @operation({
    summary: "Get Fhas",
  })
  @get()
  static getFhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fha",
  })
  @post("{id}")
  static createFha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
