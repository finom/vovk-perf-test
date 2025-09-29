import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ezks")
export default class EzkController {
  @operation({
    summary: "Get Ezks",
  })
  @get()
  static getEzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ezk",
  })
  @post("{id}")
  static createEzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
