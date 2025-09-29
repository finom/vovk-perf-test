import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkjs")
export default class LkjController {
  @operation({
    summary: "Get Lkjs",
  })
  @get()
  static getLkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkj",
  })
  @post("{id}")
  static createLkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
