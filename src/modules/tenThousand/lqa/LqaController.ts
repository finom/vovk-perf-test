import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lqas")
export default class LqaController {
  @operation({
    summary: "Get Lqas",
  })
  @get()
  static getLqas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lqa",
  })
  @post("{id}")
  static createLqa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
