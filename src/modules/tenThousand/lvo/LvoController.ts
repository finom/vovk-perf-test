import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lvos")
export default class LvoController {
  @operation({
    summary: "Get Lvos",
  })
  @get()
  static getLvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lvo",
  })
  @post("{id}")
  static createLvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
