import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fdps")
export default class FdpController {
  @operation({
    summary: "Get Fdps",
  })
  @get()
  static getFdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fdp",
  })
  @post("{id}")
  static createFdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
