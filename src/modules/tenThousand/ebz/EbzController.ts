import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebzs")
export default class EbzController {
  @operation({
    summary: "Get Ebzs",
  })
  @get()
  static getEbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebz",
  })
  @post("{id}")
  static createEbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
