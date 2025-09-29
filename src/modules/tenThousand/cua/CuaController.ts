import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cuas")
export default class CuaController {
  @operation({
    summary: "Get Cuas",
  })
  @get()
  static getCuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cua",
  })
  @post("{id}")
  static createCua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
