import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtps")
export default class DtpController {
  @operation({
    summary: "Get Dtps",
  })
  @get()
  static getDtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtp",
  })
  @post("{id}")
  static createDtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
