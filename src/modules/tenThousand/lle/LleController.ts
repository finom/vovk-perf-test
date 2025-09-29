import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lles")
export default class LleController {
  @operation({
    summary: "Get Lles",
  })
  @get()
  static getLles = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lle",
  })
  @post("{id}")
  static createLle = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
