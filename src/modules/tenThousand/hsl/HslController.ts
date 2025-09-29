import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsls")
export default class HslController {
  @operation({
    summary: "Get Hsls",
  })
  @get()
  static getHsls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsl",
  })
  @post("{id}")
  static createHsl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
