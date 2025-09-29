import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luvs")
export default class LuvController {
  @operation({
    summary: "Get Luvs",
  })
  @get()
  static getLuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Luv",
  })
  @post("{id}")
  static createLuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
