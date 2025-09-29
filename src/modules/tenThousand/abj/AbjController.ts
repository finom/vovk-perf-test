import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("abjs")
export default class AbjController {
  @operation({
    summary: "Get Abjs",
  })
  @get()
  static getAbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Abj",
  })
  @post("{id}")
  static createAbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
