import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqbs")
export default class AqbController {
  @operation({
    summary: "Get Aqbs",
  })
  @get()
  static getAqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqb",
  })
  @post("{id}")
  static createAqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
