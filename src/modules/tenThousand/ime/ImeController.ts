import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("imes")
export default class ImeController {
  @operation({
    summary: "Get Imes",
  })
  @get()
  static getImes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ime",
  })
  @post("{id}")
  static createIme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
