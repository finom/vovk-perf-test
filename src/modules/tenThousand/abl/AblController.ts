import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abls")
export default class AblController {
  @operation({
    summary: "Get Abls",
  })
  @get()
  static getAbls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abl",
  })
  @post("{id}")
  static createAbl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
