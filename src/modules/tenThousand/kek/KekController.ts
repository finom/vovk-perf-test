import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("keks")
export default class KekController {
  @operation({
    summary: "Get Keks",
  })
  @get()
  static getKeks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kek",
  })
  @post("{id}")
  static createKek = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
