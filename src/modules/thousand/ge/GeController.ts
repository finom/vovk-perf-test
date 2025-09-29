import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ges")
export default class GeController {
  @operation({
    summary: "Get Ges",
  })
  @get()
  static getGes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ge",
  })
  @post("{id}")
  static createGe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
