import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adxes")
export default class AdxController {
  @operation({
    summary: "Get Adxes",
  })
  @get()
  static getAdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adx",
  })
  @post("{id}")
  static createAdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
