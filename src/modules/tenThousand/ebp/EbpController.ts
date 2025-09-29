import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebps")
export default class EbpController {
  @operation({
    summary: "Get Ebps",
  })
  @get()
  static getEbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebp",
  })
  @post("{id}")
  static createEbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
