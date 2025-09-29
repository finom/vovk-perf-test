import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkjs")
export default class HkjController {
  @operation({
    summary: "Get Hkjs",
  })
  @get()
  static getHkjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkj",
  })
  @post("{id}")
  static createHkj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
