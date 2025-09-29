import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwvs")
export default class GwvController {
  @operation({
    summary: "Get Gwvs",
  })
  @get()
  static getGwvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwv",
  })
  @post("{id}")
  static createGwv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
