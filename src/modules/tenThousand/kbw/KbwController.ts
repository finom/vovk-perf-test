import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kbws")
export default class KbwController {
  @operation({
    summary: "Get Kbws",
  })
  @get()
  static getKbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kbw",
  })
  @post("{id}")
  static createKbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
