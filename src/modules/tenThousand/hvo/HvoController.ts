import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hvos")
export default class HvoController {
  @operation({
    summary: "Get Hvos",
  })
  @get()
  static getHvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hvo",
  })
  @post("{id}")
  static createHvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
