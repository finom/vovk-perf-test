import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ahrs")
export default class AhrController {
  @operation({
    summary: "Get Ahrs",
  })
  @get()
  static getAhrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ahr",
  })
  @post("{id}")
  static createAhr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
