import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luas")
export default class LuaController {
  @operation({
    summary: "Get Luas",
  })
  @get()
  static getLuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lua",
  })
  @post("{id}")
  static createLua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
