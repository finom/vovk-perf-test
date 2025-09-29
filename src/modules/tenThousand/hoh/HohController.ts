import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hohs")
export default class HohController {
  @operation({
    summary: "Get Hohs",
  })
  @get()
  static getHohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hoh",
  })
  @post("{id}")
  static createHoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
