import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdrs")
export default class HdrController {
  @operation({
    summary: "Get Hdrs",
  })
  @get()
  static getHdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdr",
  })
  @post("{id}")
  static createHdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
