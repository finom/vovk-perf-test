import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kdvs")
export default class KdvController {
  @operation({
    summary: "Get Kdvs",
  })
  @get()
  static getKdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kdv",
  })
  @post("{id}")
  static createKdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
