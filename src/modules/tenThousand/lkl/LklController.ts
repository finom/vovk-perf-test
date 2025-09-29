import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkls")
export default class LklController {
  @operation({
    summary: "Get Lkls",
  })
  @get()
  static getLkls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkl",
  })
  @post("{id}")
  static createLkl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
