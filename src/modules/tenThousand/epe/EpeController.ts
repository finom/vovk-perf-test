import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("epes")
export default class EpeController {
  @operation({
    summary: "Get Epes",
  })
  @get()
  static getEpes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Epe",
  })
  @post("{id}")
  static createEpe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
