import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvs")
export default class FvController {
  @operation({
    summary: "Get Fvs",
  })
  @get()
  static getFvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fv",
  })
  @post("{id}")
  static createFv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
