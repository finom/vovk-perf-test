import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ghas")
export default class GhaController {
  @operation({
    summary: "Get Ghas",
  })
  @get()
  static getGhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gha",
  })
  @post("{id}")
  static createGha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
