import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ebjs")
export default class EbjController {
  @operation({
    summary: "Get Ebjs",
  })
  @get()
  static getEbjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ebj",
  })
  @post("{id}")
  static createEbj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
