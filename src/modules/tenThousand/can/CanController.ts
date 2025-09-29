import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cans")
export default class CanController {
  @operation({
    summary: "Get Cans",
  })
  @get()
  static getCans = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Can",
  })
  @post("{id}")
  static createCan = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
