import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bps")
export default class BpController {
  @operation({
    summary: "Get Bps",
  })
  @get()
  static getBps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bp",
  })
  @post("{id}")
  static createBp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
