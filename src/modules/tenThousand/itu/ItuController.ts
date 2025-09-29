import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("itus")
export default class ItuController {
  @operation({
    summary: "Get Itus",
  })
  @get()
  static getItus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Itu",
  })
  @post("{id}")
  static createItu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
