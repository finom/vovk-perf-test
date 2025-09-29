import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fuas")
export default class FuaController {
  @operation({
    summary: "Get Fuas",
  })
  @get()
  static getFuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fua",
  })
  @post("{id}")
  static createFua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
