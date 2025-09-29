import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jzvs")
export default class JzvController {
  @operation({
    summary: "Get Jzvs",
  })
  @get()
  static getJzvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jzv",
  })
  @post("{id}")
  static createJzv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
