import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cats")
export default class CatController {
  @operation({
    summary: "Get Cats",
  })
  @get()
  static getCats = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cat",
  })
  @post("{id}")
  static createCat = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
