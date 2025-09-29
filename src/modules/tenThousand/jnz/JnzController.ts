import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnzs")
export default class JnzController {
  @operation({
    summary: "Get Jnzs",
  })
  @get()
  static getJnzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnz",
  })
  @post("{id}")
  static createJnz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
