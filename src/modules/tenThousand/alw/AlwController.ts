import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alws")
export default class AlwController {
  @operation({
    summary: "Get Alws",
  })
  @get()
  static getAlws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alw",
  })
  @post("{id}")
  static createAlw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
