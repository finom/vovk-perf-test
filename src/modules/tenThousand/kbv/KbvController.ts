import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbvs")
export default class KbvController {
  @operation({
    summary: "Get Kbvs",
  })
  @get()
  static getKbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbv",
  })
  @post("{id}")
  static createKbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
