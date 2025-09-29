import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcps")
export default class FcpController {
  @operation({
    summary: "Get Fcps",
  })
  @get()
  static getFcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcp",
  })
  @post("{id}")
  static createFcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
