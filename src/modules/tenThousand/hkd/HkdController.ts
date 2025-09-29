import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkds")
export default class HkdController {
  @operation({
    summary: "Get Hkds",
  })
  @get()
  static getHkds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkd",
  })
  @post("{id}")
  static createHkd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
