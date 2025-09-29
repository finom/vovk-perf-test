import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auis")
export default class AuiController {
  @operation({
    summary: "Get Auis",
  })
  @get()
  static getAuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aui",
  })
  @post("{id}")
  static createAui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
