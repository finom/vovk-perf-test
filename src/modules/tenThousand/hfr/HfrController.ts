import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfrs")
export default class HfrController {
  @operation({
    summary: "Get Hfrs",
  })
  @get()
  static getHfrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfr",
  })
  @post("{id}")
  static createHfr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
