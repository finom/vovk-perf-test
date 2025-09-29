import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("huas")
export default class HuaController {
  @operation({
    summary: "Get Huas",
  })
  @get()
  static getHuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hua",
  })
  @post("{id}")
  static createHua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
