import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdzs")
export default class GdzController {
  @operation({
    summary: "Get Gdzs",
  })
  @get()
  static getGdzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gdz",
  })
  @post("{id}")
  static createGdz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
