import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("anbs")
export default class AnbController {
  @operation({
    summary: "Get Anbs",
  })
  @get()
  static getAnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Anb",
  })
  @post("{id}")
  static createAnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
