import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebbs")
export default class EbbController {
  @operation({
    summary: "Get Ebbs",
  })
  @get()
  static getEbbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebb",
  })
  @post("{id}")
  static createEbb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
