import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("coas")
export default class CoaController {
  @operation({
    summary: "Get Coas",
  })
  @get()
  static getCoas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coa",
  })
  @post("{id}")
  static createCoa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
