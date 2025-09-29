import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("khas")
export default class KhaController {
  @operation({
    summary: "Get Khas",
  })
  @get()
  static getKhas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kha",
  })
  @post("{id}")
  static createKha = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
