import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxjs")
export default class HxjController {
  @operation({
    summary: "Get Hxjs",
  })
  @get()
  static getHxjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxj",
  })
  @post("{id}")
  static createHxj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
