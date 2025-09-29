import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jdrs")
export default class JdrController {
  @operation({
    summary: "Get Jdrs",
  })
  @get()
  static getJdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jdr",
  })
  @post("{id}")
  static createJdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
