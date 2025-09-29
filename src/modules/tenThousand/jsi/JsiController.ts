import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jsis")
export default class JsiController {
  @operation({
    summary: "Get Jsis",
  })
  @get()
  static getJsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jsi",
  })
  @post("{id}")
  static createJsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
