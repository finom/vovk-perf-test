import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jaxes")
export default class JaxController {
  @operation({
    summary: "Get Jaxes",
  })
  @get()
  static getJaxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jax",
  })
  @post("{id}")
  static createJax = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
