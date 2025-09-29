import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnxes")
export default class JnxController {
  @operation({
    summary: "Get Jnxes",
  })
  @get()
  static getJnxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnx",
  })
  @post("{id}")
  static createJnx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
