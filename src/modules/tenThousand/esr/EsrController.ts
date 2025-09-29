import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esrs")
export default class EsrController {
  @operation({
    summary: "Get Esrs",
  })
  @get()
  static getEsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esr",
  })
  @post("{id}")
  static createEsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
