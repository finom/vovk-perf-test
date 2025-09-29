import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnds")
export default class JndController {
  @operation({
    summary: "Get Jnds",
  })
  @get()
  static getJnds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnd",
  })
  @post("{id}")
  static createJnd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
