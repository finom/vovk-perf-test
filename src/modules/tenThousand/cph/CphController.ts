import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cphs")
export default class CphController {
  @operation({
    summary: "Get Cphs",
  })
  @get()
  static getCphs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cph",
  })
  @post("{id}")
  static createCph = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
