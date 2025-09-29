import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxks")
export default class LxkController {
  @operation({
    summary: "Get Lxks",
  })
  @get()
  static getLxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxk",
  })
  @post("{id}")
  static createLxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
