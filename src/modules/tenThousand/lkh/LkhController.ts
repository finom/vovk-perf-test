import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkhs")
export default class LkhController {
  @operation({
    summary: "Get Lkhs",
  })
  @get()
  static getLkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkh",
  })
  @post("{id}")
  static createLkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
