import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adhs")
export default class AdhController {
  @operation({
    summary: "Get Adhs",
  })
  @get()
  static getAdhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adh",
  })
  @post("{id}")
  static createAdh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
