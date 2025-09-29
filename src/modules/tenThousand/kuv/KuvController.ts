import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kuvs")
export default class KuvController {
  @operation({
    summary: "Get Kuvs",
  })
  @get()
  static getKuvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kuv",
  })
  @post("{id}")
  static createKuv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
