import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kxxes")
export default class KxxController {
  @operation({
    summary: "Get Kxxes",
  })
  @get()
  static getKxxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kxx",
  })
  @post("{id}")
  static createKxx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
