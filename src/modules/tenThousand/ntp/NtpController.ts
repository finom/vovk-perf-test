import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ntps")
export default class NtpController {
  @operation({
    summary: "Get Ntps",
  })
  @get()
  static getNtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ntp",
  })
  @post("{id}")
  static createNtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
