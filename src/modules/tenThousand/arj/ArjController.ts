import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arjs")
export default class ArjController {
  @operation({
    summary: "Get Arjs",
  })
  @get()
  static getArjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arj",
  })
  @post("{id}")
  static createArj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
