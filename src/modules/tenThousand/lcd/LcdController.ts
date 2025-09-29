import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcds")
export default class LcdController {
  @operation({
    summary: "Get Lcds",
  })
  @get()
  static getLcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcd",
  })
  @post("{id}")
  static createLcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
