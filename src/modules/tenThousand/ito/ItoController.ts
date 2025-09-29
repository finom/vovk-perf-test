import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itos")
export default class ItoController {
  @operation({
    summary: "Get Itos",
  })
  @get()
  static getItos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ito",
  })
  @post("{id}")
  static createIto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
