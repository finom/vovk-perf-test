import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("baas")
export default class BaaController {
  @operation({
    summary: "Get Baas",
  })
  @get()
  static getBaas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Baa",
  })
  @post("{id}")
  static createBaa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
