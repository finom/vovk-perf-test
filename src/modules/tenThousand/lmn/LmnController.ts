import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmns")
export default class LmnController {
  @operation({
    summary: "Get Lmns",
  })
  @get()
  static getLmns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmn",
  })
  @post("{id}")
  static createLmn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
