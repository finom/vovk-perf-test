import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxbs")
export default class GxbController {
  @operation({
    summary: "Get Gxbs",
  })
  @get()
  static getGxbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxb",
  })
  @post("{id}")
  static createGxb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
