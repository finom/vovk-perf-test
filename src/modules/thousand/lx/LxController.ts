import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxes")
export default class LxController {
  @operation({
    summary: "Get Lxes",
  })
  @get()
  static getLxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lx",
  })
  @post("{id}")
  static createLx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
