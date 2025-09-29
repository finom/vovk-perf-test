import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("os")
export default class OController {
  @operation({
    summary: "Get OS",
  })
  @get()
  static getOS = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create O",
  })
  @post("{id}")
  static createO = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
