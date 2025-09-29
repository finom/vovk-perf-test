import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkks")
export default class LkkController {
  @operation({
    summary: "Get Lkks",
  })
  @get()
  static getLkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkk",
  })
  @post("{id}")
  static createLkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
