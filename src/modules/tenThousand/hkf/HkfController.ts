import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkfs")
export default class HkfController {
  @operation({
    summary: "Get Hkfs",
  })
  @get()
  static getHkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkf",
  })
  @post("{id}")
  static createHkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
