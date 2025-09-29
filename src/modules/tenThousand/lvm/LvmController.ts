import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvms")
export default class LvmController {
  @operation({
    summary: "Get Lvms",
  })
  @get()
  static getLvms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvm",
  })
  @post("{id}")
  static createLvm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
