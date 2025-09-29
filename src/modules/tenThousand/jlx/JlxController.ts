import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlxes")
export default class JlxController {
  @operation({
    summary: "Get Jlxes",
  })
  @get()
  static getJlxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jlx",
  })
  @post("{id}")
  static createJlx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
