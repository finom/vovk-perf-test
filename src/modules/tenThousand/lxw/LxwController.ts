import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxws")
export default class LxwController {
  @operation({
    summary: "Get Lxws",
  })
  @get()
  static getLxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxw",
  })
  @post("{id}")
  static createLxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
