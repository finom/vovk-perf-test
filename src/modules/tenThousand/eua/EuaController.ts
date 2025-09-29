import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euas")
export default class EuaController {
  @operation({
    summary: "Get Euas",
  })
  @get()
  static getEuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eua",
  })
  @post("{id}")
  static createEua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
