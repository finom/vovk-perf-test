import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ambs")
export default class AmbController {
  @operation({
    summary: "Get Ambs",
  })
  @get()
  static getAmbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amb",
  })
  @post("{id}")
  static createAmb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
