import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkps")
export default class HkpController {
  @operation({
    summary: "Get Hkps",
  })
  @get()
  static getHkps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkp",
  })
  @post("{id}")
  static createHkp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
