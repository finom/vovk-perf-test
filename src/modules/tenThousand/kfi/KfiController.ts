import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfis")
export default class KfiController {
  @operation({
    summary: "Get Kfis",
  })
  @get()
  static getKfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfi",
  })
  @post("{id}")
  static createKfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
