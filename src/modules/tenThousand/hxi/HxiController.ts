import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxis")
export default class HxiController {
  @operation({
    summary: "Get Hxis",
  })
  @get()
  static getHxis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxi",
  })
  @post("{id}")
  static createHxi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
