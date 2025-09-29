import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxs")
export default class LxsController {
  @operation({
    summary: "Get Lxs",
  })
  @get()
  static getLxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxs",
  })
  @post("{id}")
  static createLxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
