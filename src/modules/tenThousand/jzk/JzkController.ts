import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzks")
export default class JzkController {
  @operation({
    summary: "Get Jzks",
  })
  @get()
  static getJzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzk",
  })
  @post("{id}")
  static createJzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
