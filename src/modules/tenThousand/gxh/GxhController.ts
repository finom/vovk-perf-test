import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxhs")
export default class GxhController {
  @operation({
    summary: "Get Gxhs",
  })
  @get()
  static getGxhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxh",
  })
  @post("{id}")
  static createGxh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
