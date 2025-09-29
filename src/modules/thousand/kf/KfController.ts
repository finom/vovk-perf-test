import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfs")
export default class KfController {
  @operation({
    summary: "Get Kfs",
  })
  @get()
  static getKfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kf",
  })
  @post("{id}")
  static createKf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
