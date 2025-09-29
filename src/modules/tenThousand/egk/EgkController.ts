import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("egks")
export default class EgkController {
  @operation({
    summary: "Get Egks",
  })
  @get()
  static getEgks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Egk",
  })
  @post("{id}")
  static createEgk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
