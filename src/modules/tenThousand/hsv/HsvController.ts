import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsvs")
export default class HsvController {
  @operation({
    summary: "Get Hsvs",
  })
  @get()
  static getHsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsv",
  })
  @post("{id}")
  static createHsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
