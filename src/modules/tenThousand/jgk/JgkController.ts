import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jgks")
export default class JgkController {
  @operation({
    summary: "Get Jgks",
  })
  @get()
  static getJgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jgk",
  })
  @post("{id}")
  static createJgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
