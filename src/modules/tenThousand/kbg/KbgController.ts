import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbgs")
export default class KbgController {
  @operation({
    summary: "Get Kbgs",
  })
  @get()
  static getKbgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbg",
  })
  @post("{id}")
  static createKbg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
