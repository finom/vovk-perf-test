import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcds")
export default class GcdController {
  @operation({
    summary: "Get Gcds",
  })
  @get()
  static getGcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gcd",
  })
  @post("{id}")
  static createGcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
