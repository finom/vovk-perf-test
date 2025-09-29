import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("czbs")
export default class CzbController {
  @operation({
    summary: "Get Czbs",
  })
  @get()
  static getCzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Czb",
  })
  @post("{id}")
  static createCzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
