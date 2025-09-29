import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnks")
export default class JnkController {
  @operation({
    summary: "Get Jnks",
  })
  @get()
  static getJnks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnk",
  })
  @post("{id}")
  static createJnk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
