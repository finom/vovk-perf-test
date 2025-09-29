import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkns")
export default class LknController {
  @operation({
    summary: "Get Lkns",
  })
  @get()
  static getLkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkn",
  })
  @post("{id}")
  static createLkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
