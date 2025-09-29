import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfjs")
export default class HfjController {
  @operation({
    summary: "Get Hfjs",
  })
  @get()
  static getHfjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfj",
  })
  @post("{id}")
  static createHfj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
