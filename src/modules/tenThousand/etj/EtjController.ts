import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("etjs")
export default class EtjController {
  @operation({
    summary: "Get Etjs",
  })
  @get()
  static getEtjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Etj",
  })
  @post("{id}")
  static createEtj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
