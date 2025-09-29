import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnjs")
export default class JnjController {
  @operation({
    summary: "Get Jnjs",
  })
  @get()
  static getJnjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnj",
  })
  @post("{id}")
  static createJnj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
