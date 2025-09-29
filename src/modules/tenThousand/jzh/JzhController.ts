import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzhs")
export default class JzhController {
  @operation({
    summary: "Get Jzhs",
  })
  @get()
  static getJzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzh",
  })
  @post("{id}")
  static createJzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
