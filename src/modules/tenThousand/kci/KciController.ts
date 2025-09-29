import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kcis")
export default class KciController {
  @operation({
    summary: "Get Kcis",
  })
  @get()
  static getKcis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kci",
  })
  @post("{id}")
  static createKci = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
