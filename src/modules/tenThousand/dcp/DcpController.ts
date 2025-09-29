import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcps")
export default class DcpController {
  @operation({
    summary: "Get Dcps",
  })
  @get()
  static getDcps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcp",
  })
  @post("{id}")
  static createDcp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
