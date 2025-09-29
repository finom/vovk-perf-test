import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gtps")
export default class GtpController {
  @operation({
    summary: "Get Gtps",
  })
  @get()
  static getGtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gtp",
  })
  @post("{id}")
  static createGtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
