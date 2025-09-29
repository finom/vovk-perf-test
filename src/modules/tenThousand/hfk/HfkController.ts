import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfks")
export default class HfkController {
  @operation({
    summary: "Get Hfks",
  })
  @get()
  static getHfks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfk",
  })
  @post("{id}")
  static createHfk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
