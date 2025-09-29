import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("htps")
export default class HtpController {
  @operation({
    summary: "Get Htps",
  })
  @get()
  static getHtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Htp",
  })
  @post("{id}")
  static createHtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
