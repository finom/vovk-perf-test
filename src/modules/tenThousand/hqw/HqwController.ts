import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hqws")
export default class HqwController {
  @operation({
    summary: "Get Hqws",
  })
  @get()
  static getHqws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hqw",
  })
  @post("{id}")
  static createHqw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
