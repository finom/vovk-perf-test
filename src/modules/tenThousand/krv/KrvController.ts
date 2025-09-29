import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("krvs")
export default class KrvController {
  @operation({
    summary: "Get Krvs",
  })
  @get()
  static getKrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Krv",
  })
  @post("{id}")
  static createKrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
