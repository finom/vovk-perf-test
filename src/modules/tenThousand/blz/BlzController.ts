import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("blzs")
export default class BlzController {
  @operation({
    summary: "Get Blzs",
  })
  @get()
  static getBlzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Blz",
  })
  @post("{id}")
  static createBlz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
