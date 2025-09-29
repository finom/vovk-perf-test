import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuis")
export default class IuiController {
  @operation({
    summary: "Get Iuis",
  })
  @get()
  static getIuis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iui",
  })
  @post("{id}")
  static createIui = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
