import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxds")
export default class LxdController {
  @operation({
    summary: "Get Lxds",
  })
  @get()
  static getLxds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxd",
  })
  @post("{id}")
  static createLxd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
