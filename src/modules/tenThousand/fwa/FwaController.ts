import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwas")
export default class FwaController {
  @operation({
    summary: "Get Fwas",
  })
  @get()
  static getFwas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwa",
  })
  @post("{id}")
  static createFwa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
