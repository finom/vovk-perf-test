import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("edls")
export default class EdlController {
  @operation({
    summary: "Get Edls",
  })
  @get()
  static getEdls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Edl",
  })
  @post("{id}")
  static createEdl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
