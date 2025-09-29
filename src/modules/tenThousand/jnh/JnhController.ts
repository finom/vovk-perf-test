import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnhs")
export default class JnhController {
  @operation({
    summary: "Get Jnhs",
  })
  @get()
  static getJnhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnh",
  })
  @post("{id}")
  static createJnh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
