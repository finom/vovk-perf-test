import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxgs")
export default class LxgController {
  @operation({
    summary: "Get Lxgs",
  })
  @get()
  static getLxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxg",
  })
  @post("{id}")
  static createLxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
