import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cads")
export default class CadController {
  @operation({
    summary: "Get Cads",
  })
  @get()
  static getCads = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cad",
  })
  @post("{id}")
  static createCad = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
