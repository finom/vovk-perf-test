import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ires")
export default class IreController {
  @operation({
    summary: "Get Ires",
  })
  @get()
  static getIres = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ire",
  })
  @post("{id}")
  static createIre = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
