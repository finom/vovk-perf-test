import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnvs")
export default class FnvController {
  @operation({
    summary: "Get Fnvs",
  })
  @get()
  static getFnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnv",
  })
  @post("{id}")
  static createFnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
