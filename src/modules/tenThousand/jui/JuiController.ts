import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juis")
export default class JuiController {
  @operation({
    summary: "Get Juis",
  })
  @get()
  static getJuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jui",
  })
  @post("{id}")
  static createJui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
