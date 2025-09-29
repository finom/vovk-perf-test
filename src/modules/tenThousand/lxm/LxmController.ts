import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxms")
export default class LxmController {
  @operation({
    summary: "Get Lxms",
  })
  @get()
  static getLxms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxm",
  })
  @post("{id}")
  static createLxm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
