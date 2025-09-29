import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsbs")
export default class HsbController {
  @operation({
    summary: "Get Hsbs",
  })
  @get()
  static getHsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsb",
  })
  @post("{id}")
  static createHsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
