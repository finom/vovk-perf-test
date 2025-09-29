import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("llies")
export default class LlyController {
  @operation({
    summary: "Get Llies",
  })
  @get()
  static getLlies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lly",
  })
  @post("{id}")
  static createLly = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
