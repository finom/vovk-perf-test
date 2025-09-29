import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lfhs")
export default class LfhController {
  @operation({
    summary: "Get Lfhs",
  })
  @get()
  static getLfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lfh",
  })
  @post("{id}")
  static createLfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
