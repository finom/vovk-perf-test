import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awos")
export default class AwoController {
  @operation({
    summary: "Get Awos",
  })
  @get()
  static getAwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awo",
  })
  @post("{id}")
  static createAwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
