import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hmhs")
export default class HmhController {
  @operation({
    summary: "Get Hmhs",
  })
  @get()
  static getHmhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hmh",
  })
  @post("{id}")
  static createHmh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
