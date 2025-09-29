import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etrs")
export default class EtrController {
  @operation({
    summary: "Get Etrs",
  })
  @get()
  static getEtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etr",
  })
  @post("{id}")
  static createEtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
