import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csos")
export default class CsoController {
  @operation({
    summary: "Get Csos",
  })
  @get()
  static getCsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cso",
  })
  @post("{id}")
  static createCso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
