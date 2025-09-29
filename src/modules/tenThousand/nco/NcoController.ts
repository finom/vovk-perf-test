import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncos")
export default class NcoController {
  @operation({
    summary: "Get Ncos",
  })
  @get()
  static getNcos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nco",
  })
  @post("{id}")
  static createNco = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
