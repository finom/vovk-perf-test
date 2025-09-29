import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxies")
export default class LxyController {
  @operation({
    summary: "Get Lxies",
  })
  @get()
  static getLxies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxy",
  })
  @post("{id}")
  static createLxy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
