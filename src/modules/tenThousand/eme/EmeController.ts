import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("emes")
export default class EmeController {
  @operation({
    summary: "Get Emes",
  })
  @get()
  static getEmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eme",
  })
  @post("{id}")
  static createEme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
