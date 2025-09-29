import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkrs")
export default class HkrController {
  @operation({
    summary: "Get Hkrs",
  })
  @get()
  static getHkrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkr",
  })
  @post("{id}")
  static createHkr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
