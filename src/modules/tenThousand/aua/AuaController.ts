import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auas")
export default class AuaController {
  @operation({
    summary: "Get Auas",
  })
  @get()
  static getAuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aua",
  })
  @post("{id}")
  static createAua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
