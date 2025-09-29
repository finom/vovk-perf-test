import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxbs")
export default class LxbController {
  @operation({
    summary: "Get Lxbs",
  })
  @get()
  static getLxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxb",
  })
  @post("{id}")
  static createLxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
