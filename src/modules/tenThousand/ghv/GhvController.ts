import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghvs")
export default class GhvController {
  @operation({
    summary: "Get Ghvs",
  })
  @get()
  static getGhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ghv",
  })
  @post("{id}")
  static createGhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
