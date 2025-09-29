import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxws")
export default class GxwController {
  @operation({
    summary: "Get Gxws",
  })
  @get()
  static getGxws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxw",
  })
  @post("{id}")
  static createGxw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
