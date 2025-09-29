import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esws")
export default class EswController {
  @operation({
    summary: "Get Esws",
  })
  @get()
  static getEsws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esw",
  })
  @post("{id}")
  static createEsw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
