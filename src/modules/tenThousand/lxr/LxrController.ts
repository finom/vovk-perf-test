import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxrs")
export default class LxrController {
  @operation({
    summary: "Get Lxrs",
  })
  @get()
  static getLxrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxr",
  })
  @post("{id}")
  static createLxr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
