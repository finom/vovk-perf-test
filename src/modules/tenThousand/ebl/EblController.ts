import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebls")
export default class EblController {
  @operation({
    summary: "Get Ebls",
  })
  @get()
  static getEbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebl",
  })
  @post("{id}")
  static createEbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
