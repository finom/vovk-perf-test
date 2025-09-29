import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxhs")
export default class LxhController {
  @operation({
    summary: "Get Lxhs",
  })
  @get()
  static getLxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxh",
  })
  @post("{id}")
  static createLxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
