import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jbps")
export default class JbpController {
  @operation({
    summary: "Get Jbps",
  })
  @get()
  static getJbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jbp",
  })
  @post("{id}")
  static createJbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
