import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fvzs")
export default class FvzController {
  @operation({
    summary: "Get Fvzs",
  })
  @get()
  static getFvzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fvz",
  })
  @post("{id}")
  static createFvz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
