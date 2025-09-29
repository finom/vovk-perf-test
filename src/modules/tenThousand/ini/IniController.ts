import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("inis")
export default class IniController {
  @operation({
    summary: "Get Inis",
  })
  @get()
  static getInis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ini",
  })
  @post("{id}")
  static createIni = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
