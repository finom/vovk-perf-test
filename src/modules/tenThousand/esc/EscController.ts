import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("escs")
export default class EscController {
  @operation({
    summary: "Get Escs",
  })
  @get()
  static getEscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esc",
  })
  @post("{id}")
  static createEsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
