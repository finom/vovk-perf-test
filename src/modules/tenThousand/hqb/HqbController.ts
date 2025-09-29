import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqbs")
export default class HqbController {
  @operation({
    summary: "Get Hqbs",
  })
  @get()
  static getHqbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqb",
  })
  @post("{id}")
  static createHqb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
