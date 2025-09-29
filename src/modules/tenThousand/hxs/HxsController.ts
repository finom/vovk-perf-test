import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxs")
export default class HxsController {
  @operation({
    summary: "Get Hxs",
  })
  @get()
  static getHxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxs",
  })
  @post("{id}")
  static createHxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
