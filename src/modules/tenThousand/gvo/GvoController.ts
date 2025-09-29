import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gvos")
export default class GvoController {
  @operation({
    summary: "Get Gvos",
  })
  @get()
  static getGvos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gvo",
  })
  @post("{id}")
  static createGvo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
