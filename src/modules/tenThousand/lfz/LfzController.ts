import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfzs")
export default class LfzController {
  @operation({
    summary: "Get Lfzs",
  })
  @get()
  static getLfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfz",
  })
  @post("{id}")
  static createLfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
