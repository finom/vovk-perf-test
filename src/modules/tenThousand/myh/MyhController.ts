import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("myhs")
export default class MyhController {
  @operation({
    summary: "Get Myhs",
  })
  @get()
  static getMyhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Myh",
  })
  @post("{id}")
  static createMyh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
