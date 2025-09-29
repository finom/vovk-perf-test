import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtls")
export default class DtlController {
  @operation({
    summary: "Get Dtls",
  })
  @get()
  static getDtls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtl",
  })
  @post("{id}")
  static createDtl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
