import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kons")
export default class KonController {
  @operation({
    summary: "Get Kons",
  })
  @get()
  static getKons = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kon",
  })
  @post("{id}")
  static createKon = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
