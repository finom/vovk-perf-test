import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxs")
export default class GxsController {
  @operation({
    summary: "Get Gxs",
  })
  @get()
  static getGxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxs",
  })
  @post("{id}")
  static createGxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
