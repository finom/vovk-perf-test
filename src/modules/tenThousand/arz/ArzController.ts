import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("arzs")
export default class ArzController {
  @operation({
    summary: "Get Arzs",
  })
  @get()
  static getArzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Arz",
  })
  @post("{id}")
  static createArz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
