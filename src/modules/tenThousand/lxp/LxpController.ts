import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxps")
export default class LxpController {
  @operation({
    summary: "Get Lxps",
  })
  @get()
  static getLxps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxp",
  })
  @post("{id}")
  static createLxp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
