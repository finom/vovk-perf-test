import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbps")
export default class GbpController {
  @operation({
    summary: "Get Gbps",
  })
  @get()
  static getGbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbp",
  })
  @post("{id}")
  static createGbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
