import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxvs")
export default class LxvController {
  @operation({
    summary: "Get Lxvs",
  })
  @get()
  static getLxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxv",
  })
  @post("{id}")
  static createLxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
