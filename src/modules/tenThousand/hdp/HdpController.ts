import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdps")
export default class HdpController {
  @operation({
    summary: "Get Hdps",
  })
  @get()
  static getHdps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdp",
  })
  @post("{id}")
  static createHdp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
