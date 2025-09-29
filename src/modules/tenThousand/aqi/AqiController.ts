import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aqis")
export default class AqiController {
  @operation({
    summary: "Get Aqis",
  })
  @get()
  static getAqis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aqi",
  })
  @post("{id}")
  static createAqi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
