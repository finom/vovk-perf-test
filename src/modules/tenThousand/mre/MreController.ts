import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mres")
export default class MreController {
  @operation({
    summary: "Get Mres",
  })
  @get()
  static getMres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mre",
  })
  @post("{id}")
  static createMre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
