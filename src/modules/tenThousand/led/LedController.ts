import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leds")
export default class LedController {
  @operation({
    summary: "Get Leds",
  })
  @get()
  static getLeds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Led",
  })
  @post("{id}")
  static createLed = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
