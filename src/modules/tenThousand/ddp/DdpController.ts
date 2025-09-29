import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddps")
export default class DdpController {
  @operation({
    summary: "Get Ddps",
  })
  @get()
  static getDdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddp",
  })
  @post("{id}")
  static createDdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
