import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghws")
export default class GhwController {
  @operation({
    summary: "Get Ghws",
  })
  @get()
  static getGhws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghw",
  })
  @post("{id}")
  static createGhw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
