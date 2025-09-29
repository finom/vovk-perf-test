import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jhas")
export default class JhaController {
  @operation({
    summary: "Get Jhas",
  })
  @get()
  static getJhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jha",
  })
  @post("{id}")
  static createJha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
