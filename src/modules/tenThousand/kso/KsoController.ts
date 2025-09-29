import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksos")
export default class KsoController {
  @operation({
    summary: "Get Ksos",
  })
  @get()
  static getKsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kso",
  })
  @post("{id}")
  static createKso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
