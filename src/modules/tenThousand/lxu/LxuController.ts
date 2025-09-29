import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxus")
export default class LxuController {
  @operation({
    summary: "Get Lxus",
  })
  @get()
  static getLxus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxu",
  })
  @post("{id}")
  static createLxu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
