import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kegs")
export default class KegController {
  @operation({
    summary: "Get Kegs",
  })
  @get()
  static getKegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Keg",
  })
  @post("{id}")
  static createKeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
