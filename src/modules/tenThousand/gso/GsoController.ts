import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsos")
export default class GsoController {
  @operation({
    summary: "Get Gsos",
  })
  @get()
  static getGsos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gso",
  })
  @post("{id}")
  static createGso = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
