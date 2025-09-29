import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ides")
export default class IdeController {
  @operation({
    summary: "Get Ides",
  })
  @get()
  static getIdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ide",
  })
  @post("{id}")
  static createIde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
