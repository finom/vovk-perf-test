import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwies")
export default class GwyController {
  @operation({
    summary: "Get Gwies",
  })
  @get()
  static getGwies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwy",
  })
  @post("{id}")
  static createGwy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
