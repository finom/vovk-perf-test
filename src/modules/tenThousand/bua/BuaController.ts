import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("buas")
export default class BuaController {
  @operation({
    summary: "Get Buas",
  })
  @get()
  static getBuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bua",
  })
  @post("{id}")
  static createBua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
