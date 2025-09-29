import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lofs")
export default class LofController {
  @operation({
    summary: "Get Lofs",
  })
  @get()
  static getLofs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lof",
  })
  @post("{id}")
  static createLof = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
