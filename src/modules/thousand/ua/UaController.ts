import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("uas")
export default class UaController {
  @operation({
    summary: "Get Uas",
  })
  @get()
  static getUas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ua",
  })
  @post("{id}")
  static createUa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
