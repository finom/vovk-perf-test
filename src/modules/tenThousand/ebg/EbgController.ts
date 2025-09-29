import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebgs")
export default class EbgController {
  @operation({
    summary: "Get Ebgs",
  })
  @get()
  static getEbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebg",
  })
  @post("{id}")
  static createEbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
