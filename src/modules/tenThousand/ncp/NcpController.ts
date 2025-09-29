import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ncps")
export default class NcpController {
  @operation({
    summary: "Get Ncps",
  })
  @get()
  static getNcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ncp",
  })
  @post("{id}")
  static createNcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
