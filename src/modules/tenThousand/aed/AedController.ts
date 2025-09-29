import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aeds")
export default class AedController {
  @operation({
    summary: "Get Aeds",
  })
  @get()
  static getAeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aed",
  })
  @post("{id}")
  static createAed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
