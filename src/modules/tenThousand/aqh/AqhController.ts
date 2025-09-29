import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqhs")
export default class AqhController {
  @operation({
    summary: "Get Aqhs",
  })
  @get()
  static getAqhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqh",
  })
  @post("{id}")
  static createAqh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
