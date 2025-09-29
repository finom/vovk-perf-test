import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("have")
export default class HasController {
  @operation({
    summary: "Get Have",
  })
  @get()
  static getHave = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Has",
  })
  @post("{id}")
  static createHas = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
