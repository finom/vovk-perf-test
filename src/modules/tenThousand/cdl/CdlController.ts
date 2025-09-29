import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdls")
export default class CdlController {
  @operation({
    summary: "Get Cdls",
  })
  @get()
  static getCdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdl",
  })
  @post("{id}")
  static createCdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
