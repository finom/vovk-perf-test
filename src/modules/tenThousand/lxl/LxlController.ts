import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxls")
export default class LxlController {
  @operation({
    summary: "Get Lxls",
  })
  @get()
  static getLxls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxl",
  })
  @post("{id}")
  static createLxl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
