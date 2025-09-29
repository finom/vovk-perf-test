import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jyis")
export default class JyiController {
  @operation({
    summary: "Get Jyis",
  })
  @get()
  static getJyis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jyi",
  })
  @post("{id}")
  static createJyi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
