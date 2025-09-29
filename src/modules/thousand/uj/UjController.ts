import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ujs")
export default class UjController {
  @operation({
    summary: "Get Ujs",
  })
  @get()
  static getUjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Uj",
  })
  @post("{id}")
  static createUj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
