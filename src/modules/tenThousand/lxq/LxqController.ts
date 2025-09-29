import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lxqs")
export default class LxqController {
  @operation({
    summary: "Get Lxqs",
  })
  @get()
  static getLxqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lxq",
  })
  @post("{id}")
  static createLxq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
