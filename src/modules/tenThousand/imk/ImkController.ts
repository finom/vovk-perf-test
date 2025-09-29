import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imks")
export default class ImkController {
  @operation({
    summary: "Get Imks",
  })
  @get()
  static getImks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Imk",
  })
  @post("{id}")
  static createImk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
