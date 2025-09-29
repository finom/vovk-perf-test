import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtps")
export default class MtpController {
  @operation({
    summary: "Get Mtps",
  })
  @get()
  static getMtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtp",
  })
  @post("{id}")
  static createMtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
