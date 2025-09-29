import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("airs")
export default class AirController {
  @operation({
    summary: "Get Airs",
  })
  @get()
  static getAirs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Air",
  })
  @post("{id}")
  static createAir = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
