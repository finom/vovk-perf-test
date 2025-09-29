import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxes")
export default class LxeController {
  @operation({
    summary: "Get Lxes",
  })
  @get()
  static getLxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxe",
  })
  @post("{id}")
  static createLxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
