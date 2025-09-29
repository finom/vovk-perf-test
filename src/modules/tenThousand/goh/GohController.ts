import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gohs")
export default class GohController {
  @operation({
    summary: "Get Gohs",
  })
  @get()
  static getGohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Goh",
  })
  @post("{id}")
  static createGoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
