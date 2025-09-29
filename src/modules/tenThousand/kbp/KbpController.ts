import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbps")
export default class KbpController {
  @operation({
    summary: "Get Kbps",
  })
  @get()
  static getKbps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbp",
  })
  @post("{id}")
  static createKbp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
