import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eojs")
export default class EojController {
  @operation({
    summary: "Get Eojs",
  })
  @get()
  static getEojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoj",
  })
  @post("{id}")
  static createEoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
