import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hues")
export default class HueController {
  @operation({
    summary: "Get Hues",
  })
  @get()
  static getHues = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hue",
  })
  @post("{id}")
  static createHue = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
