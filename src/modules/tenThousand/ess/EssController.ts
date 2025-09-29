import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esses")
export default class EssController {
  @operation({
    summary: "Get Esses",
  })
  @get()
  static getEsses = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ess",
  })
  @post("{id}")
  static createEss = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
