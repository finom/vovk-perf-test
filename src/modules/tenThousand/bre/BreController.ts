import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bres")
export default class BreController {
  @operation({
    summary: "Get Bres",
  })
  @get()
  static getBres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bre",
  })
  @post("{id}")
  static createBre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
