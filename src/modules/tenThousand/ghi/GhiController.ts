import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghis")
export default class GhiController {
  @operation({
    summary: "Get Ghis",
  })
  @get()
  static getGhis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghi",
  })
  @post("{id}")
  static createGhi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
