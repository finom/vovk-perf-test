import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("iuas")
export default class IuaController {
  @operation({
    summary: "Get Iuas",
  })
  @get()
  static getIuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Iua",
  })
  @post("{id}")
  static createIua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
