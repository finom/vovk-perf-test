import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fnzs")
export default class FnzController {
  @operation({
    summary: "Get Fnzs",
  })
  @get()
  static getFnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fnz",
  })
  @post("{id}")
  static createFnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
