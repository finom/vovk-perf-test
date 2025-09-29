import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jtps")
export default class JtpController {
  @operation({
    summary: "Get Jtps",
  })
  @get()
  static getJtps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jtp",
  })
  @post("{id}")
  static createJtp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
