import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lixes")
export default class LixController {
  @operation({
    summary: "Get Lixes",
  })
  @get()
  static getLixes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lix",
  })
  @post("{id}")
  static createLix = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
