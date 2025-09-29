import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hkms")
export default class HkmController {
  @operation({
    summary: "Get Hkms",
  })
  @get()
  static getHkms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hkm",
  })
  @post("{id}")
  static createHkm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
