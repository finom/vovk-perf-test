import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cszs")
export default class CszController {
  @operation({
    summary: "Get Cszs",
  })
  @get()
  static getCszs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csz",
  })
  @post("{id}")
  static createCsz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
