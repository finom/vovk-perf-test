import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("zps")
export default class ZpController {
  @operation({
    summary: "Get Zps",
  })
  @get()
  static getZps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Zp",
  })
  @post("{id}")
  static createZp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
