import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bsos")
export default class BsoController {
  @operation({
    summary: "Get Bsos",
  })
  @get()
  static getBsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bso",
  })
  @post("{id}")
  static createBso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
