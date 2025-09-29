import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxgs")
export default class HxgController {
  @operation({
    summary: "Get Hxgs",
  })
  @get()
  static getHxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxg",
  })
  @post("{id}")
  static createHxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
