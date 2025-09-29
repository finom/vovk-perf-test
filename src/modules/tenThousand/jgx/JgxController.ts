import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgxes")
export default class JgxController {
  @operation({
    summary: "Get Jgxes",
  })
  @get()
  static getJgxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgx",
  })
  @post("{id}")
  static createJgx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
