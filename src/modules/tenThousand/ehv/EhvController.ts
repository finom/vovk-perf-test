import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ehvs")
export default class EhvController {
  @operation({
    summary: "Get Ehvs",
  })
  @get()
  static getEhvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ehv",
  })
  @post("{id}")
  static createEhv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
