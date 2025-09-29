import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebvs")
export default class EbvController {
  @operation({
    summary: "Get Ebvs",
  })
  @get()
  static getEbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebv",
  })
  @post("{id}")
  static createEbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
