import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("juas")
export default class JuaController {
  @operation({
    summary: "Get Juas",
  })
  @get()
  static getJuas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jua",
  })
  @post("{id}")
  static createJua = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
