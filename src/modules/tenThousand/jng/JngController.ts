import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jngs")
export default class JngController {
  @operation({
    summary: "Get Jngs",
  })
  @get()
  static getJngs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jng",
  })
  @post("{id}")
  static createJng = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
