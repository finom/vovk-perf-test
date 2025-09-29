import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ekfs")
export default class EkfController {
  @operation({
    summary: "Get Ekfs",
  })
  @get()
  static getEkfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ekf",
  })
  @post("{id}")
  static createEkf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
