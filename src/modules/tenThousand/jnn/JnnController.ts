import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnns")
export default class JnnController {
  @operation({
    summary: "Get Jnns",
  })
  @get()
  static getJnns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnn",
  })
  @post("{id}")
  static createJnn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
