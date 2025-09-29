import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbps")
export default class HbpController {
  @operation({
    summary: "Get Hbps",
  })
  @get()
  static getHbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbp",
  })
  @post("{id}")
  static createHbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
