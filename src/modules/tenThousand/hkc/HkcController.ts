import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkcs")
export default class HkcController {
  @operation({
    summary: "Get Hkcs",
  })
  @get()
  static getHkcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkc",
  })
  @post("{id}")
  static createHkc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
