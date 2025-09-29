import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bxas")
export default class BxaController {
  @operation({
    summary: "Get Bxas",
  })
  @get()
  static getBxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bxa",
  })
  @post("{id}")
  static createBxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
