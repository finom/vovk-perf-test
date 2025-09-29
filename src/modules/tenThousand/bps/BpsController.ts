import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bps")
export default class BpsController {
  @operation({
    summary: "Get Bps",
  })
  @get()
  static getBps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bps",
  })
  @post("{id}")
  static createBps = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
