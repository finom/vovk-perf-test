import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxzs")
export default class LxzController {
  @operation({
    summary: "Get Lxzs",
  })
  @get()
  static getLxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxz",
  })
  @post("{id}")
  static createLxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
