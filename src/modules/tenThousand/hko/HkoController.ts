import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkos")
export default class HkoController {
  @operation({
    summary: "Get Hkos",
  })
  @get()
  static getHkos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hko",
  })
  @post("{id}")
  static createHko = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
