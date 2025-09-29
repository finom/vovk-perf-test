import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hbws")
export default class HbwController {
  @operation({
    summary: "Get Hbws",
  })
  @get()
  static getHbws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hbw",
  })
  @post("{id}")
  static createHbw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
