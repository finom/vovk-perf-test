import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ayis")
export default class AyiController {
  @operation({
    summary: "Get Ayis",
  })
  @get()
  static getAyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ayi",
  })
  @post("{id}")
  static createAyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
