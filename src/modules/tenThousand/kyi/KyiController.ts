import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyis")
export default class KyiController {
  @operation({
    summary: "Get Kyis",
  })
  @get()
  static getKyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyi",
  })
  @post("{id}")
  static createKyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
