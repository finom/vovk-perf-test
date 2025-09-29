import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ites")
export default class IteController {
  @operation({
    summary: "Get Ites",
  })
  @get()
  static getItes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ite",
  })
  @post("{id}")
  static createIte = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
