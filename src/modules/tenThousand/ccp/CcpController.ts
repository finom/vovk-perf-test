import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccps")
export default class CcpController {
  @operation({
    summary: "Get Ccps",
  })
  @get()
  static getCcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ccp",
  })
  @post("{id}")
  static createCcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
