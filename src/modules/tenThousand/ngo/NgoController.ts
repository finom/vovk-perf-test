import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngos")
export default class NgoController {
  @operation({
    summary: "Get Ngos",
  })
  @get()
  static getNgos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngo",
  })
  @post("{id}")
  static createNgo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
