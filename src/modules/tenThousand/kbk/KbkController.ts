import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbks")
export default class KbkController {
  @operation({
    summary: "Get Kbks",
  })
  @get()
  static getKbks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbk",
  })
  @post("{id}")
  static createKbk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
