import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("begs")
export default class BegController {
  @operation({
    summary: "Get Begs",
  })
  @get()
  static getBegs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Beg",
  })
  @post("{id}")
  static createBeg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
